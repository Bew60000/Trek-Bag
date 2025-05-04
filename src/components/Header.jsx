import { useItemsContext } from "../lib/hook";
import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  const { items } = useItemsContext();

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPackred={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
