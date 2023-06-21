// @ts-nocheck

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import { getReservationsByPartner, createReservation } from '../../api/reservation'
import "react-big-calendar/lib/css/react-big-calendar.css";

import cookieCutter from 'cookie-cutter';

moment.locale("fr");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar({ partnerId }) {
    const [eventsData, setEventsData] = useState(events);
    const [reservations, setReservations] = useState();
    const [reservation, setReservation] = useState();

    React.useEffect(() => {
        const fetchReservationsByPartnerId = async () => {
            const reservations = await getReservationsByPartner(partnerId)

            console.log(reservations)
            if (reservations) {
                for (let i = 0; i < reservations.length; i++) {
                    const element = reservations[i];
                    element.start = new Date(element.started_at)
                    element.end = new Date(element.ended_at)
                }
                setReservations(reservations)
            }
        }

        fetchReservationsByPartnerId()
    }, [])


    const handleSelect = async ({ start, end }) => {
        const userToken = cookieCutter.get('SESSID')
        const title = window.prompt("Titre de l'évenement");
        console.log(start)
        const reservationsInfos = {
            started_at: start,
            ended_at: end,
            service: null,
            partner_company: partnerId,
            done: true,
            accepted: true,
            title: title
        }
        if (title && userToken) {
            await createReservation(userToken, reservationsInfos)
        }
    };

    return (
        <Calendar
            views={["day", "agenda", "work_week", "month"]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={reservations}
            style={{ height: "100vh", background: "white" }}
            onSelectEvent={(event) => alert(event.title)}
            onSelectSlot={handleSelect}
        />
    );
}
