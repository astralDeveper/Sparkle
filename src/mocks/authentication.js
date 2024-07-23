import axios from 'axios'

export const BASE_URL = 'http://192.168.100.3:3000/auth/'


export const PostApi = async (data, path) => {
    try {
        const response = await axios.post(`${BASE_URL}${path}`, data);
        return response.data;
    } catch (error) {
        console.log("Error--->", error)
        alert('Credentials Error');
    }
};
