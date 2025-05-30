import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_url}`,
    withCredentials: true,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

const  useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();



    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response;
        } , error => {
            console.log('error cought in interceptor', error);
            if(error.status === 401 || error.status === 403){
                console.log('need to logout the user');
                logOut()
                .then(()=>{
                    console.log('logout user');
                    navigate('/signup');
                })
                .catch(error => console.log(error))
        }
            return Promise.reject(error)
        })
    },[])
    return axiosInstance;
};

export default useAxiosSecure;