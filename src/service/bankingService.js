
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const handleDeposite = async (data) => {

    const url = `${API_BASE_URL}/user/v1/diposit`;
    const headers = {
        'device-id': 'dlkfgjdkgd',
        'device-type': '3',
        'device-token': 'dlkfjgldksjg',
        'api-key': 'm2E7FFKm3v8e!xCxj|6RAC87lMA2wOFXt8i3HX&klH}?{556dc1kwyllokWzqeKw&kH}?{j7UuFXn55BE508zy7gEHNMx',
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('token')
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: data
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const handleWithdrawal = async (data) => {
    const url = `${API_BASE_URL}/user/v1/withdrawal`;
    const headers = {
        'device-id': 'dlkfgjdkgd',
        'device-type': '3',
        'device-token': 'dlkfjgldksjg',
        'api-key': 'm2E7FFKm3v8e!xCxj|6RAC87lMA2wOFXt8i3HX&klH}?{556dc1kwyllokWzqeKw&kH}?{j7UuFXn55BE508zy7gEHNMx',
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('token')

    };
    const body = data;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body,
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const handleTransfer = async (data) => {
    const url = `${API_BASE_URL}/user/v1/fundTransfer`;
    const headers = {
        'device-id': 'dlkfgjdkgd',
        'device-type': '3',
        'device-token': 'dlkfjgldksjg',
        'api-key': 'm2E7FFKm3v8e!xCxj|6RAC87lMA2wOFXt8i3HX&klH}?{556dc1kwyllokWzqeKw&kH}?{j7UuFXn55BE508zy7gEHNMx',
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('token')
    };

    const body = data;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body,
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const handleStatement = async (page, queryParams) => {
    const url = `${API_BASE_URL}/user/v1/statement?pageNo=${page}&${queryParams}`;
    const headers = {
        'device-id': 'dlkfgjdkgd',
        'device-type': '3',
        'device-token': 'dlkfjgldksjg',
        'api-key': 'm2E7FFKm3v8e!xCxj|6RAC87lMA2wOFXt8i3HX&klH}?{556dc1kwyllokWzqeKw&kH}?{j7UuFXn55BE508zy7gEHNMx',
        'Content-Type': 'application/json',
        'access-token': localStorage.getItem('token')

    };
    // {
    //     fullName: 'Arpita1 Bala',
    //     email: 'arpita1@gmail.com',
    //     password: '#Apn7566',
    //     cnfPassword: '#Apn7566',
    // }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({}),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

