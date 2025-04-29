import  Trailer  from "@/entities/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";



const useGameTrailers = (gameId:number|string) =>{
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
    return useQuery({
        queryKey: ["trailers",gameId],
        queryFn: () => apiClient.getAll()
    });
} 

export default useGameTrailers;