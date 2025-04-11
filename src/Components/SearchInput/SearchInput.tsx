import React, { useEffect, useState } from "react";
import { IItem, SearchListProps } from "./types";
import { escapeRegExp, sortItems } from "./helpers";
import { HighlightText } from "../HighLightText/HighLightText";

// Написать React компонент который примет в качестве props список элементов состоящий из id, name.
// Компонент должен генерировать первые 10 элементов отсортированные по алфавиту и поле для поиска.
// Пользователь может ввести текст в input - список должен обновиться и показать все элементы содержащие строку поиска.
// Можно использовать vue.js или другой фреймворк если нет опыта с реакт.

const SearchInput = ({ items }: SearchListProps) => {
  const [searchString, setSearchString] = useState<string>("");
  const [lines, setLines] = useState<IItem[]>([]);
  const [sortedItems, setSortedItems] = useState<IItem[]>([]);

  useEffect(() => setSortedItems(sortItems(items)), [items]);

  useEffect(() => {
    let _items: IItem[] = [];
    if (searchString !== "") {
      const re = new RegExp(escapeRegExp(searchString), "gi");
      _items = sortedItems.filter((l) => re.test(l.name));
    } else {
      _items = sortedItems.slice(0, 10);
    }
    setLines(_items);
  }, [sortedItems, searchString]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <div>
        <input value={searchString} onChange={onInputChange} size={50} />
      </div>
      <ul>
        {lines.map((l, i) => (
          <li key={`search-li-${i}`}>
            <HighlightText text={l.name} searchString={searchString} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchInput;
