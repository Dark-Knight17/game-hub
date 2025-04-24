import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  Image,
  Spinner,
  Button,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";

interface GenreListProps {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}
const GenreList = ({
  onSelectGenre,
  selectedGenreId,
}: GenreListProps) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} marginY="6px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.id)}
                fontSize="lg"
                variant="ghost"
              >
                <Flex maxW="100px">
                  <Text truncate>{genre.name}</Text>
                </Flex>
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
