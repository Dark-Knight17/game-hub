import {create} from "zustand"
import {mountStoreDevtool} from "simple-zustand-devtools"

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string; 
}


interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId:number) => void;
    setPlatformId: (platformId:number) =>  void;
    setSortOrder: (sortOrder:string) => void
}

const useGameQueryStore = create<GameQueryStore>(set => (
    {
        gameQuery:{},
        setGenreId: (genreId:number) => set(store => ({gameQuery: {...store.gameQuery,genreId}})),
        setPlatformId: (platformId:number) => set(store => ({gameQuery: {...store.gameQuery,platformId}})),
        setSearchText:(searchText:string) => set(() => ({gameQuery: {searchText}})),
        setSortOrder: (sortOrder:string) => set(store => ({gameQuery: {...store.gameQuery,sortOrder}}))
    }
))

if(process.env.NODE_ENV === 'development')
    mountStoreDevtool('Game Query Store', useGameQueryStore);

export default useGameQueryStore;