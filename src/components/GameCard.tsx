import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} maxW="sm" overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body>
        <Heading>{game.name}</Heading>
        <HStack justify="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      {/* <Card.Footer /> */}
    </Card.Root>
  );
};

export default GameCard;
