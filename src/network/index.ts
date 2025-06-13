import axios from 'axios';

type HttpMethod = 'get' | 'put' | 'post' | 'delete';

export const handleApi = async (url: string, type: HttpMethod, data?: any) => {
    try {
        const response = await axios({
            method: type,
            url,
            data,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Request successful:', response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        alert('Request failed. Please check your input.');
    }
};