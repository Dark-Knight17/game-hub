import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T>{
    count: number;
    next?: string | null,
    results: T[];
}


const axiosInstance = axios.create(
    {
        baseURL:'https://api.rawg.io/api', 
        params:{
            key:import.meta.env.VITE_API_KEY
        }
    }
)

class APIClient<T>{

    endPoint:string;
    constructor(endPoint:string){
        this.endPoint = endPoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
                .get<FetchResponse<T>>(this.endPoint,config)
                .then(res => res.data)
    }

 
}


export default APIClient