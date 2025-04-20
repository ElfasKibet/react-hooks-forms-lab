import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([
    { id: uuid(), name: "Lettuce", category: "Produce" },
    { id: uuid(), name: "Swiss Cheese", category: "Dairy" },
    { id: uuid(), name: "Yogurt", category: "Dairy" },
    { id: uuid(), name: "String Cheese", category: "Dairy" },
  ]);

  const [search, setSearch] = useState("");

  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter search={search} onSearchChange={setSearch} />
      <ul>
        {itemsToDisplay.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> <em>({item.category})</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
