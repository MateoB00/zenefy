export const getService = async (id) => {
    try {
        const response = await fetch(
            `http://localhost:3001/service/${id}`,
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