import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root
      overflow="hidden"
      _hover={{
        boxShadow: "lg",
        transform: "scale(1.03)", // Slightly smaller scale (less "jump")
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
      }}
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
    >
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body>
        <HStack justify="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
