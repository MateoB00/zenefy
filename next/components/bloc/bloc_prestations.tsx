import React from 'react';

import '../../public/scss/components/buttons/button.scss';
import '../../public/scss/components/bloc/bloc_prestations.scss';

import ButtonConnexion from '../buttons/button';
import Input from '../inputs/input';

import { getServicesByPartner } from '../../api/service'
import { createReservation } from '../../api/reservation'

import cookieCutter from 'cookie-cutter';

export default function BlocPrestations({ serviceData }) {
    const [servicesPartnerCompany, setServicesPartnerCompany] = React.useState()
    const [showReservation, setShowReservation] = React.useState(false)
    const [serviceChoice, setServiceChoice] = React.useState()
    const [startedAtReservation, setStartedAtReservation] = React.useState()

    React.useEffect(() => {
        const fetchService = async () => {
            const getServicesPartnerCompany = await getServicesByPartner(serviceData['partner_company'].id)
            setServicesPartnerCompany(getServicesPartnerCompany)
        }

        fetchService()
    }, [])

    const handleDateTimeChange = async (e) => {
        e.preventDefault()
        const startedAt = startedAtReservation;
        const userToken = cookieCutter.get('SESSID')

        let endedAt = new Date(startedAt)

        if (serviceChoice.average_time === "10 min") endedAt.setMinutes(endedAt.getMinutes() + 10)
        if (serviceChoice.average_time === "30 min") endedAt.setMinutes(endedAt.getMinutes() + 30)
        if (serviceChoice.average_time === "1 h") endedAt.setMinutes(endedAt.getHours() + 1)
        if (serviceChoice.average_time === "2 h") endedAt.setMinutes(endedAt.getHours() + 2)

        const reservationsInfos = {
            started_at: startedAt,
            ended_at: endedAt,
            service: serviceChoice.id,
            partner_company: serviceData['partner_company'].id
        }

        console.log('startedAt')
        console.log(startedAt)
        console.log(endedAt)
        console.log('startedAt')

        if (userToken) {
            await createReservation(userToken, reservationsInfos)
        }
    }

    return (
        <div>
            <div className="bloc_prestations">
                {
                    servicesPartnerCompany ?
                        Object.values(servicesPartnerCompany).map((service: any, index: number) => (
                            <div className='prestation' key={index}>
                                <p>{service.name}</p>
                                <div className='infos'>
                                    <p>{service.average_time}</p>
                                    <p>{service.price} €</p>
                                    <Input
                                        type="text"
                                        value={'Réserver'}
                                        className='choice'
                                        id='choice'
                                        placeHolder={'Réserver'}
                                        onClick={(e) => {
                                            setShowReservation(true)
                                            setServiceChoice(service)
                                        }}
                                    />
                                </div>
                            </div>
                        )) : <p> Aucun service</p>
                }
            </div>
            {
                showReservation ?
                    <form onSubmit={(e) => {
                        handleDateTimeChange(e)
                    }}>
                        <div className="divValide">
                            <div>
                                <p onClick={(e) => {
                                    setShowReservation(false)
                                }}>X</p>
                                <h1>Choisis une date</h1>
                            </div>
                            <Input
                                type="datetime-local"
                                className='choice'
                                id='choice'
                                placeHolder={'Réserver'}
                                onChange={(e) => {
                                    setStartedAtReservation(e.target.value)
                                }}
                            />
                            <ButtonConnexion
                                className="buttonSubmit"
                                text='Valider'
                                type='submit'
                            />

                        </div>
                    </form>
                    : ''
            }
        </div >
    );
}