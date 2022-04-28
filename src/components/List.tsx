import { useState } from "react";

type listProps = {
  initialItems: string[];
};

export function List({ initialItems }: listProps) {
  const [list, setList] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  function handleAddToList() {
    setTimeout(() => {
      setList([...list, newItem]);
    }, 500);
  }

  function handleRemoveItemFromList(item: string) {
    setTimeout(() => {
      setList((oldState) => oldState.filter((i) => i !== item));
    }, 500);
  }

  return (
    <>
      <input
        placeholder="Novo item"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddToList}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItemFromList(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
