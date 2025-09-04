const BASE_URL_DEV = 'https://api.disneyapi.dev';

export const makeRequest = async ({
    endpoint,
    method = 'GET',
}) => {
    
    try {
        const res = await fetch(BASE_URL_DEV + endpoint, {
            method,
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}
