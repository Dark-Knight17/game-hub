import APIClient, { FetchResponse } from "@/services/api-client";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";


const apiClient = new APIClient<Game>("games");


export interface Game{
    id: number;
    name: string;
    background_image: string;
    description_raw: string;
    parent_platforms: {platform:Platform}[];
    metacritic: number;
    genres : Genre[];
    rating_top: number;
    slug: string;
}

const useGames = () => { 
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>,Error>({
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
}) }
    





export default useGames