import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} maxW="sm" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading >{game.name}</Heading>
      </Card.Body>
      {/* <Card.Footer /> */}
    </Card.Root>
  );
};

export default GameCard;
