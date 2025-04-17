import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardProps {
  children: ReactNode;
}
const GameCardComponent = ({children} : GameCardProps) => {
  return (
    <Box width="300px" borderRadius={10}  overflow="hidden">{children}</Box>
  );
};

export default GameCardComponent;
