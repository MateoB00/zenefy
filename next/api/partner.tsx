export const getPartner = async (id: number) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}partner_company/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const partnerData = await response.json();

        return partnerData;
    } catch (err) {
        console.log(err);
    }
}

export const createPartner = async (token: string, partnerData: any) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}partner_company`,
            {
                method: 'POST',
                body: JSON.stringify(
                    partnerData,
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        );
console.log(response)
        return response.status;

    } catch (err) {
        console.log(err);
    }
}