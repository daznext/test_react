import { FC } from "react";
import "./App.css";
import SearchInput from "./Components/SearchInput/SearchInput";
import { input_items } from "./Data/items";

const App: FC = () => {
  return <SearchInput items={input_items} />;
};

export default App;
