import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image,Spinner, Button } from "@chakra-ui/react";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({onSelectGenre, selectedGenre} : GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root variant="plain">
      {data.map((genre) => (
        <List.Item key={genre.id} marginY="8px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={selectedGenre?.id === genre.id ? "bold": "normal"} onClick={() => onSelectGenre(genre)} fontSize="lg" variant="ghost">
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
