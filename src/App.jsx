import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import axios from "axios";

function App() {
  const [drinkList, setDrinkList] = useState([]);

  //call Api async
  const dataCall = async (letter) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      if (response.data.drinks) {
        setDrinkList(response.data.drinks);
      } else {
      }
    } catch (error) {
      console.error("Errore durante il recupero dei dati:", error);
    }
  };

  useEffect(() => {
    dataCall("a");
  }, []);

  const alcolichFilter = async (alcolich) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcolich}`
      );
      setDrinkList(response.data.drinks);
    } catch (error) {
      console.error("Errore durante il recupero dei dati:", error);
    }
  };

  return (
    <div className="   text-[#988869] w-screen h-screen bg-[#2B2B2B] flex items-center justify-center">
      <div className="w-[1485px] bg-[#1B1B1B] h-[850px] grid grid-cols-4 shadow-xl shadow-[#988869]">
        <Sidebar alcolichFilter={alcolichFilter} />
        <Content drinkList={drinkList} dataCall={dataCall} />
      </div>
    </div>
  );
}

export default App;
