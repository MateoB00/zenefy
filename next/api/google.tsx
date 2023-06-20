export const fetchCompanyData = async (partner_company: Object) => {
    try {
        const response = await fetch(
            `http://localhost:3001/api/google/informations_company`,
            {
                method: 'POST',
                body: JSON.stringify(
                    partner_company
                ),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const companyData = await response.json();
        return companyData;
    } catch (err) {
        console.log(err);
    }
}
