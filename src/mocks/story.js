import axios from "axios"
import { BASE_URL } from "./authentication"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const addStory = async (data) => {
    try {
        const formData = new FormData();
        formData.append('file', data.file);
        formData.append('caption', data.caption);

        const acessToken = await AsyncStorage.getItem('acessToken');
        const token = JSON.parse(acessToken);

        const res = await axios.put(
            BASE_URL + 'add-story',
            formData,
            {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data',
                }
            }
        );
        console.log("first---->",res.data)
        return res.data; // Corrected from res.date to res.data
    } catch (error) {
        console.log("Error--->", error)
        console.log("Error--->", error.response.data.message)
    }
}
export const getStories = async () => {
    try {
        const acessToken = await AsyncStorage.getItem('acessToken');
        const token = JSON.parse(acessToken);

        const res = await axios.get(BASE_URL + 'get-story',
            {
                headers: {
                    'Authorization': token,
                }
            });

        return res.data; // Corrected from res.date to res.data
    } catch (error) {
        console.log("Error--->", error)
        console.log("Error--->", error.response.data.message)
    }
}
export const getOwnStories = async () => {
    try {
        const acessToken = await AsyncStorage.getItem('acessToken');
        const token = JSON.parse(acessToken);

        const res = await axios.get(BASE_URL + 'get-stories',
            {
                headers: {
                    'Authorization': token,
                }
            });

        return res.data; // Corrected from res.date to res.data
    } catch (error) {
        console.log("Error--->", error)
        console.log("Error--->", error.response.data.message)
    }
}