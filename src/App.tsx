import { Button, Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import NavBar from "./components/NavBar";

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
        <Button variant="outline" onClick={toggleColorMode}>
          Toggle Mode
        </Button>
      </GridItem>
      <GridItem
        area="aside"
        bg="tomato"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
