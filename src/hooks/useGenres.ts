import { useQuery } from '@tanstack/react-query';
import  APIClient from '@/services/api-client';
import { FetchResponse } from '@/services/api-client';
import genres from '../data/genres'
import ms from 'ms';


const apiClient = new APIClient<Genre>("/genres");


export interface Genre{
    id:number; 
    name:string;
    image_background:string;
}


const useGenres = () => {
    return useQuery<FetchResponse<Genre>, Error>(
        {
            queryKey: ['genres'],
            queryFn: apiClient.getAll,
            staleTime: ms('24 hrs'),
            initialData: genres
        }
    )
}


export default useGenres

