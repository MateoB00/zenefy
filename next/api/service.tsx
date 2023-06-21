export const getService = async (id: number) => {
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

export const getServicesByCityAndCategory = async (city: string, category: string) => {
    try {
        const response = await fetch(
            `http://localhost:3001/service/category_city/${category}/${city}`,
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

export const getServicesByPartner = async (partner_id: any) => {
    try {
        const response = await fetch(
            `http://localhost:3001/service/partner/${partner_id}`,
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

export const createService = async (token: string, serviceInfos: Object) => {
    try {
        const response = await fetch(
            `http://localhost:3001/service`,
            {
                method: 'POST',
                body: JSON.stringify(
                    serviceInfos
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
