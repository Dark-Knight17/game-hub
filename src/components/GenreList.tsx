import useGenres from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Text, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error} = useGenres();

  if(error) return null;
  if(isLoading) return <Spinner />;
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
