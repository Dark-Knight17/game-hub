import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
    sortOrder: string;
  onSelectSortOrder: (sort: string) => void;
}

const SortSelector = ({sortOrder, onSelectSortOrder }: SortSelectorProps) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder  = sortOrders.find(order => order.value === sortOrder)?.label || "Relevance";    
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" focusRing="none">
          <Text fontWeight="bold">Order by:{currentSortOrder}</Text>
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
