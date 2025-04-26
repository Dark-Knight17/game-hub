import usePlatform from "@/hooks/usePlatform";
import useGenre  from "@/hooks/useGenre"
import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "@/store";



const GameHeading = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  const genreName = useGenre(gameQuery.genreId)?.name || "";
  const platformName = usePlatform(gameQuery.platformId)?.name || "";
  

  const heading = `${platformName} ${genreName} Games`;
  return (
    <Heading as="h1" fontWeight="extrabold" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
