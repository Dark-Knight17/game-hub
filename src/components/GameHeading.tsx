import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: platforms } = usePlatforms();
  const platformName =
    platforms.results.find((platform) => platform.id === gameQuery.platformId)
      ?.name || "";

  const { data: genres } = useGenres();
  const genreName =
    genres.results.find((genre) => genre.id === gameQuery.genreId)?.name || "";

  const heading = `${platformName} ${genreName} Games`;
  return (
    <Heading as="h1" fontWeight="extrabold" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
