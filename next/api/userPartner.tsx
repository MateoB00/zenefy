export const updatePartner = async (partnerData: Object, token: string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}user/partner/update`,
            {
                method: 'PUT',
                body: JSON.stringify(
                    partnerData
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        );

        return response.status
    } catch (err) {
        console.log(err);
    }
}

export const getServices = async (partner_id: number, token: string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}partner_company/${partner_id}/services`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        );

        const data = response.json()

        return data
    } catch (err) {
        console.log(err);
    }
}