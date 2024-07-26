import axios from 'axios'

export const BASE_URL = 'http://192.168.100.12:3000/auth/'
// export const BASE_URL = 'http://192.168.100.21:3000/auth/'


export const PostApi = async (data, path) => {
    try {
        const response = await axios.post(`${BASE_URL}${path}`, data);
        return response.data;
    } catch (error) {
        console.log("Error--->", error.response.data.message)
        alert(error.response.data.message);
    }
};
