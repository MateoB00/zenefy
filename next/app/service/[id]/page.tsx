// @ts-nocheck
'use client'

import * as React from 'react';

import '../../../public/scss/pages/service/calendar/calendar.scss';

import '../../../public/scss/components/header/header_blue.scss';
import '../../../public/scss/components/footer/footer_blue.scss';

import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import FirstBlocService from './first_bloc'
import SecondBlocService from './second_bloc'
import ThirdBlocService from './third_bloc'
import FourthBlocService from './fourth_bloc'
import Calendar from '../../../components/calendar/calendarUser'
import Button from '../../../components/buttons/button'

import { getService } from '../../../api/service'
import { fetchCompanyData } from '../../../api/google'

export default function Page() {
    const [showDispo, setShowDispo] = React.useState(false)

    const [service, setService] = React.useState()
    const [googleCompanyData, setGoogleCompanyData] = React.useState()

    const toggleDispo = () => {
        setShowDispo(true)
    }

    const handleBackClick = () => {
        setShowDispo(false)
    }

    React.useEffect(() => {
        const fetchService = async () => {
            const splitPathname = window.location.pathname.split('/');
            const serviceId = splitPathname[splitPathname.length - 1];

            const getServiceData = await getService(serviceId)
            const getGoogleCompanyData = await fetchCompanyData(getServiceData['partner_company'])
            setService(getServiceData)
            setGoogleCompanyData(getGoogleCompanyData)
        }

        fetchService()
    }, [])

    if (showDispo) {
        return (
            <div className="calendarReactUserSide">
                <Header />
                {
                    service ?
                        <Calendar partnerId={service['partner_company'].id} /> : ''
                }
                <div className='divForButton'>
                    <Button
                        text='Retour'
                        className='buttonBack'
                        onClick={handleBackClick}
                    />
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div>
            <Header logoColor={false}/>
            {
                service ?
                    <div>
                        <FirstBlocService onToggleDispo={toggleDispo} companyInfos={service ? service['partner_company'] : null} />
                        <SecondBlocService serviceData={service} />
                        <ThirdBlocService googleCompanyInfos={googleCompanyData ? googleCompanyData : null} />
                        <FourthBlocService googleCompanyInfos={googleCompanyData ? googleCompanyData['companyInfos'] : null} />
                    </div>
                    :
                    null
            }
            <Footer />
        </div>
    )
}