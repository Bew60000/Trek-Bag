import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsContext } from "../lib/hook";

const sortingOptions = [
  {
    label: "Sort by Default",
    value: "default",
  },
  {
    label: "Sort by Packed",
    value: "packed",
  },
  {
    label: "Sort by Undacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { items, handleDeleteItem, handleToggleItem } = useItemsContext();

  const sortedItem = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy == "packed") {
          return b.packed - a.packed;
        }

        if (sortBy == "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {/* {items.length === 0 && <EmptyView /> } */}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}
      {sortedItem.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>

      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

// window key open table Emoji ( win + . + ; ) press
