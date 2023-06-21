import cookieCutter from 'cookie-cutter';

export const getMe = async (token: string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}user/me`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        );

        const userData = await response.json();
        return userData;

    } catch (err) {
        console.log(err);
    }
}


export const authLogin = async (username: string, password: string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}auth/login`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: username,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const data = await response.json();

        const token = data['accessToken']
        cookieCutter.set('SESSID', token)
        return response.status
    } catch (err) {
        console.log(err);
    }
}

export const authLogout = async () => {
    try {
        cookieCutter.set('SESSID', null)
        console.log('Success');

    } catch (err) {
        console.log(err);
    }
}


export const updateUser = async (userData: Object, token: string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}user/me`,
            {
                method: 'PUT',
                body: JSON.stringify(
                    userData
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


//Relations
export const fetchReservations = async (token: string) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}user/reservations`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        );

        const userReservations = await response.json();
        return userReservations;

    } catch (err) {
        console.log(err);
    }
}


export const authRegister = async (user: Object) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_ENDPOINT_API}auth/register`,
            {
                method: 'POST',
                body: JSON.stringify(
                    user
                ),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        if (response.status === 201) {
            await authLogin(user.email, user.password)
        }
        return response.status
    } catch (err) {
        console.log(err);
    }
}