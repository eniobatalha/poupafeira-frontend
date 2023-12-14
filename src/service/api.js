import axios from "axios";
import { parseCookies } from "nookies";

const { 'auth.token':token } = parseCookies();

export const api = axios.create({
    baseURL: 'http://localhost:3001'
})

if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}