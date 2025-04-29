import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import  Game  from "../entities/Game";


const apiClient = new APIClient<Game>("/games");

const useGame = (id:string | number) => useQuery<Game>({
    queryKey: ['game',id],
    queryFn: () => apiClient.get(id)
})

export default useGame;