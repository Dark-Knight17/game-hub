import { GameQuery } from "@/App";
import { FetchResponse } from "@/services/api-client";
import { Genre } from "./useGenres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { Platform } from "./usePlatforms";






export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[];
    metacritic: number;
    genres : Genre[];
    rating_top: number;
}


const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>,Error>({
    queryKey: gameQuery ? ["games", gameQuery] : ["games"],
    queryFn: () => apiClient.get<FetchResponse<Game>>("/games",{
        params:{
            genres:gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    }).then(res => res.data),
    
})
    





export default useGames