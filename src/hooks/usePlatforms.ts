import useData from './UseData'
import { Platform } from './useGames'


const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms