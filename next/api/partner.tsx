export const getPartner = async (id: number) => {
    try {
        const response = await fetch(
            `http://localhost:3001/partner_company/${id}`,
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