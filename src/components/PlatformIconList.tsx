import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon} from "@chakra-ui/react";
import { JSX } from "react";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: JSX.Element } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    ios: <MdPhoneIphone />,
    android: <FaAndroid />,
    linux: <FaLinux />,
    mac: <FaApple />,
    nintendo: <SiNintendo />,
    web: <BsGlobe />,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon color="tomato">{iconMap[platform.slug]}</Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
