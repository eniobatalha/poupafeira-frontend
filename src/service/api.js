import axios from "axios";
import { parseCookies } from "nookies";

const { 'auth.token':token } = parseCookies();

export const api = axios.create({
    baseURL: 'https://apipoupafeira.azurewebsites.net/'
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}