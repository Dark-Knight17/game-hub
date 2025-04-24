import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genreId: number) => {
    setGameQuery({
      ...gameQuery,
      genreId,
    });
  };

  const handleSelectPlatform = (platformId: number) => {
    setGameQuery({
      ...gameQuery,
      platformId,
    });
  };

  const handleSelectSortOrder = (sortOrder: string) => {
    setGameQuery({
      ...gameQuery,
      sortOrder,
    });
  };

  const handleSearch = (searchText: string) => {
    setGameQuery({
      ...gameQuery,
      searchText,
    });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={handleSearch} />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
        marginTop={16}
      >
        <GenreList
          onSelectGenre={handleSelectGenre}
          selectedGenreId={gameQuery.genreId}
        />
      </GridItem>
      <GridItem area="main" marginTop={6}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={handleSelectPlatform}
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={handleSelectSortOrder}
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
