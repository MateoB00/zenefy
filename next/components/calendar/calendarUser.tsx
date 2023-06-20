import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { getReservationsByPartner } from '../../api/reservation'
moment.locale("fr");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar({ partnerId }) {
    const [reservations, setReservations] = useState();

    React.useEffect(() => {
        const fetchReservationsByPartnerId = async () => {
            const reservations = await getReservationsByPartner(partnerId)

            if (reservations) {
                for (let i = 0; i < reservations.length; i++) {
                    const element = reservations[i];
                    element.start = element.started_at
                    element.end = element.ended_at
                }
                setReservations(reservations)
            }
        }

        fetchReservationsByPartnerId()
    }, [])

    return (
        <Calendar
            views={["month"]}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={reservations}
            style={{ height: "100vh", background: "white" }}
        />
    );
}
