export const createReservation = async (token: string, reservationInfos: Object) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}reservation`,
            {
                method: 'POST',
                body: JSON.stringify(
                    reservationInfos
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        );

        const status = response.status;
        console.log(status)

    } catch (err) {
        console.log(err);
    }
}


export const getReservationsByPartner = async (partner_id: any) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}reservation/partner/${partner_id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const serviceData = await response.json();
        return serviceData;

    } catch (err) {
        console.log(err);
    }
}