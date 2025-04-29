import useGameTrailers from "@/hooks/useTrailers";
import { AspectRatio } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const trailer = data?.results[0];
  return trailer ? (
    <AspectRatio ratio={16 / 9}>
      <video src={trailer.data[480]} poster={trailer.preview} controls />
    </AspectRatio>
  ) : null;
};

export default GameTrailer;
