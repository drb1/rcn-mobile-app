import {useEffect, useState} from 'react';
/* import { getSession } from "next-auth/react";
 */ import axios from './axios';

const useAxiosApi = () => {
  useEffect(() => {
    const fetchData = async () => {
      // const session = await getSession();
      //const accessToken = session?.accessToken;

      /* const requestIntercept = axios.interceptors.request.use(request => {
        if (accessToken) {
          request.headers.Authorization = `Bearer ${accessToken}`;
        }
        return request;
      }); */

      const responseIntercept = axios.interceptors.response.use(
        response => {
          return response;
        },
        error => {
          return Promise.reject(error);
        },
      );

      //  setAxiosInstance(axios);

      return () => {
        axios.interceptors.request.eject(requestIntercept);
        axios.interceptors.response.eject(responseIntercept);
      };
    };

    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  return axios;
};

export default useAxiosApi;
