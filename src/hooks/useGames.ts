import { GameQuery } from "@/App";
import { FetchResponse } from "@/services/api-client";
import { Genre } from "./useGenres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import { Platform } from "./usePlatforms";
import genres from "@/data/genres";



const apiClient = new APIClient<Game>("games");


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
    queryKey:gameQuery ? ["games",gameQuery] : ["games"],
    queryFn: () => apiClient.getAll({
        params:{
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    })
})
    





export default useGames