import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import axios from "axios";
import DrinkContext from "./utility/drinkContext";

function App() {
  //lista generale drink dataCall
  const [drinkList, setDrinkList] = useState([]);
  //lista dei drink preferiti
  const [drinkPref, setDrinkPref] = useState([]);

  //call Api async
  const dataCall = async (letter) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      if (response.data.drinks) {
        setDrinkList(response.data.drinks);
      } else {
        setDrinkList([]);
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
    <DrinkContext.Provider
      value={{ drinkPref, setDrinkPref, drinkList, setDrinkList, dataCall }}
    >
      <div className=" text-[#988869] w-screen h-screen bg-[#2B2B2B] flex items-center justify-center">
        <div className=" flex flex-col rounded-3xl w-[1400px] h-[1000px] bg-[#1B1B1B] shadow-xl shadow-[#988869]">
          <Sidebar alcolichFilter={alcolichFilter} />
          <Content drinkList={drinkList} />
        </div>
      </div>
    </DrinkContext.Provider>
  );
}

export default App;
