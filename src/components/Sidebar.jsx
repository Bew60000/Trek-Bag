import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsContext } from "../lib/hook";

export default function Sidebar() {
  const { handleAddItem } = useItemsContext();

  console.log("Sidebar rendering...");
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
