import React, { FC, useEffect, useState } from "react";

import "./App.css";

const App: FC = () => {
  const [searchString, setSearchString] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    if (searchString !== "") {
      const timeoutId = setTimeout(() => console.log(searchString), 500);
      return () => clearTimeout(timeoutId);
    }
  }, [searchString]);

  return (
    <>
      <div>
        <input value={searchString} onChange={onInputChange} size={50} />
      </div>
      <div>{searchString}</div>
    </>
  );
};

export default App;
