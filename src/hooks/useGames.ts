import { GameQuery } from "@/App";
import { FetchResponse } from "@/services/api-client";
import { Genre } from "./useGenres";
import { useInfiniteQuery} from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import { Platform } from "./usePlatforms";
import ms from 'ms';


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

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey:gameQuery ? ["games",gameQuery] : ["games"],
    queryFn: ({pageParam}) => apiClient.getAll({
        params:{
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
        }
    }),
    initialPageParam:1,
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next  ? allPages.length + 1 : undefined
    },
    staleTime: ms('24 hrs')
})
    





export default useGames