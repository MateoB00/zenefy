export const getService = async (id: number) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}service/${id}`,
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
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}service/category_city/${category}/${city}`,
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

export const getServicesByCity = async (city: string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}service/city/${city}`,
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


export const getServicesByCategory = async (category: string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}service/category/${category}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const serviceData = await response.json();
        console.log('serviceData');
        console.log(serviceData);
        console.log('serviceData');
        return serviceData;

    } catch (err) {
        console.log(err);
    }
}

export const getServicesByPartner = async (partner_id: any) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}service/partner/${partner_id}`,
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
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}service`,
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

        return response.status;

    } catch (err) {
        console.log(err);
    }
}
