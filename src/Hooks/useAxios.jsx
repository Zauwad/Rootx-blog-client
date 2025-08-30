import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL: 'https://blog-server-beta-nine.vercel.app/'
})

const useAxios = () => {
    return axiosInstance
};

export default useAxios;