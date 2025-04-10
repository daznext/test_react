import React, { FC, useEffect, useState } from "react";

import "./App.css";

// Написать React компонент который примет в качестве props список элементов состоящий из id, name.
// Компонент должен генерировать первые 10 элементов отсортированные по алфавиту и поле для поиска.
// Пользователь может ввести текст в input - список должен обновиться и показать все элементы содержащие строку поиска.
// Можно использовать vue.js или другой фреймворк если нет опыта с реакт.

const input_items = [
  { id: 1, name: "Book" },
  { id: 2, name: "Pencil" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Notebook" },
  { id: 5, name: "Pen" },
  { id: 6, name: "Banana" },
  { id: 7, name: "Eraser" },
  { id: 8, name: "Orange" },
  { id: 9, name: "Marker" },
  { id: 10, name: "Laptop" },
  { id: 1001, name: "Backpack" },
  { id: 1002, name: "Avocado" },
  { id: 6, name: "Banana" },
  { id: 7, name: "Eraser" },
  { id: 8, name: "Orange" },
  { id: 9, name: "Marker" },
  { id: 10, name: "Laptop" },
  { id: 1001, name: "Backpack" },
  { id: 1002, name: "Avocado" },
  { id: 6, name: "Banana" },
  { id: 7, name: "Eraser" },
  { id: 8, name: "Orange" },
  { id: 9, name: "Marker" },
  { id: 10, name: "Laptop" },
  { id: 1001, name: "Backpack" },
  { id: 1002, name: "Avocado" },
  { id: 6, name: "Banana" },
  { id: 7, name: "Eraser" },
  { id: 8, name: "Orange" },
  { id: 9, name: "Marker" },
  { id: 10, name: "Laptop" },
  { id: 1001, name: "Backpack" },
  { id: 1002, name: "Avocado" },
  { id: 6, name: "Banana" },
  { id: 7, name: "Eraser" },
  { id: 8, name: "Orange" },
  { id: 9, name: "Marker" },
  { id: 10, name: "Laptop" },
  { id: 1001, name: "Backpack" },
  { id: 1002, name: "Avocado" },
];

interface IItem {
  id: number;
  name: string;
}

interface SearchListProps {
  items: IItem[];
}

const SearchList = ({ items }: SearchListProps) => {
  const [searchString, setSearchString] = useState<string>("");
  const [lines, setLines] = useState<IItem[]>([]);

  useEffect(() => {
    let _items = items.sort((a, b) => (a.name > b.name ? 1 : -1));

    if (searchString !== "") {
      const re = new RegExp(searchString, "gi");
      _items = _items.filter((l) => l.name.search(re) !== -1);
    }

    _items = _items.slice(0, 10);

    setLines(_items);
  }, [searchString, items]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <div>
        <input value={searchString} onChange={onInputChange} size={50} />
      </div>
      <div>
        {lines.map((l) => (
          <p>{l.name}</p>
        ))}
      </div>
    </>
  );
};

const App: FC = () => {
  return <SearchList items={input_items} />;
};

export default App;
