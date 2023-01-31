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

            const result = axiosPost('/authenticate', {
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

    static isValidToken = async (token) => {
        try {

            console.warn("sssssssssss", token);

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const response = axios.get('http://103.57.222.70:8083/api/app/vehicle-booking',
                config
            );

            console.log(response.data)
            Promise.resolve(response.data).then((data) => {

                console.log("data============================", data)
                if (data.statusCode === "OK") return true
            }).catch(error => {
                return false;
            });

        } catch (error) {
            console.warn(error)
            return error.response.data;
        }
    }
}

