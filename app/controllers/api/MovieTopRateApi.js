import axios from 'axios';
import { Config } from "@/constants"

export default class MovieTopRateApi {
    static getListMovieTopRated = async () => {
        const api = Config.apiUrl + '/movie/top_rated?api_key=' + Config.apiKey + '&language=en-US&page=1';
        try {
            console.log(api);
            let response = await axios.get(api);
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    };
    static getMovieDetailById = async ({ id }) => {
        const api = Config.apiUrl + '/movie/' + id + '?api_key=' + Config.apiKey + '&append_to_response=videos';
        try {
            console.log(api);
            let response = await axios.get(api);
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
    static getCategories = async () => {
        const api = Config.apiUrl + '/genre/movie/list' + '?api_key=' + Config.apiKey;
        try {
            console.log(api);
            let response = await axios.get(api);
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }

    static getReviewByMovieId = async (id) => {
        const api = Config.apiUrl + `/movie/${id}/reviews` + '?api_key=' + Config.apiKey;
        try {
            console.log(api);
            let response = await axios.get(api);
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }

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
}

