import cookieCutter from 'cookie-cutter';

export const getMe = async (token: string) => {
    try {
        const response = await fetch(
            `http://localhost:3001/user/me`,
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
            `http://localhost:3001/auth/login`,
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
            `http://localhost:3001/user/me`,
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
            `http://localhost:3001/user/reservations`,
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