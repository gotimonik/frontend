import axios from "axios";
import { API_URL } from "../../shared/constants";

export const getPractices = (limit = 10, offset = 0) => {
    var url = `${API_URL}/api/v1/practices?limit=${limit}&offset=${offset}`;
    return axios.get(url)
        .then((result) => {
            if (result && result.status === 200)
                return result.data
            return [];
        })
        .catch((e) => {
            console.info(`error => `, e);
            return [];
        });
};