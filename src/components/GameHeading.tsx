import { GameQuery } from "@/App";
import usePlatform from "@/hooks/usePlatform";
import useGenre  from "@/hooks/useGenre"
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const platformName = usePlatform(gameQuery?.platformId)?.name || "";
  const genreName = useGenre(gameQuery?.genreId)?.name || "";

  const heading = `${platformName} ${genreName} Games`;
  return (
    <Heading as="h1" fontWeight="extrabold" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
