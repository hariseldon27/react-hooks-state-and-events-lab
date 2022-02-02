import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(true)
  // const appClass = false ? "App dark" : "App light"
  const appClass = !isDarkMode ? "App dark" : "App light"

  function handleClick(){
    setIsDarkMode(isDarkMode => !isDarkMode)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDarkMode ? "App Dark" : "App Light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
