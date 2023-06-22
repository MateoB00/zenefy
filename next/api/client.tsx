export const createClient = async (token: string, clientData: any) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}client_company`,
            {
                method: 'POST',
                body: JSON.stringify(
                    clientData
                ),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        );

        return response.status;

    } catch (err) {
        console.log(err);
    }
}