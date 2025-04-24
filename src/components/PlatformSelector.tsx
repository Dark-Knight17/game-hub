import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface PlatformSelectorProps {
  selectedPlatformId?: number;
  onSelectPlatform: (platformId: number) => void;
}

let selectedPlatformName = ""
const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  selectedPlatformName = usePlatform(selectedPlatformId)?.name || "";
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" focusRing="none">
          <Text fontWeight="bold">{selectedPlatformName|| "Platforms"}</Text>
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                onClick={() => onSelectPlatform(platform.id)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
