import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import apiClient from '@/services/api-client'
import { Platform } from './useGames'
import { FetchResponse } from '@/services/api-client'



const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(res => res.data.results),
        staleTime: 24 * 60 *60 * 1000, //24hrs
        initialData: platforms
    })
}

export default usePlatforms