import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:4000/api'
});

const jwtAxios = Axios.interceptors.request.use(config => {
    config.headers['authorization'] = '';
    return config;
}, error => {
    return Promise.reject(error);
});

export {Axios, jwtAxios};