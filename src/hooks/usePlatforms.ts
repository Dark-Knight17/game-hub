import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import   APIClient  from '@/services/api-client'
import ms from 'ms';
import  Platform  from '../entities/Platform';

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: ms('24 hrs'),
        initialData:  platforms
    })
}

export default usePlatforms