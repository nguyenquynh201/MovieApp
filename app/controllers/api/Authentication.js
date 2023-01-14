import axios from 'axios';
import { Config } from "@/constants"


export default class AuthenticationApi {

    static login = async (data) => {
        try {
            const axiosPost = await axios.create({
                baseURL: 'http://103.57.222.70:8083/api',
                responseType: 'json',
                withCredentials: true,
            });

            const result = axiosPost('/app/auth/sign-in', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                data: data,
            });

            return result;

        } catch (error) {
            return error.response.data;
        }
    }

    static register = async (data) => {
        try {
            const axiosPost = await axios.create({
                baseURL: 'http://103.57.222.70:8083/api',
                responseType: 'json',
                withCredentials: true,
            });

            const result = axiosPost('/app/auth/sign-up', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                data: data,
            });

            return result;

        } catch (error) {
            return error.response.data;
        }
    }
}

