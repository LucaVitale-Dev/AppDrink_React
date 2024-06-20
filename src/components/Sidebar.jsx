import React, { useContext, useEffect } from "react";
import DrinkContext from "../utility/drinkContext";

function Sidebar({ alcolichFilter }) {
  const { drinkList, setDrinkList, drinkPref, setDrinkPref } =
    useContext(DrinkContext);

  return (
    <div className=" border-r-2 border-black p-12 flex flex-col justify-between">
      <h3 className=" font-bold">LOGO</h3>
      <div className=" flex flex-col gap-2">
        <p onClick={() => setDrinkList(drinkPref)}>Drink Preferiti</p>
        <p>Opzione da implementare</p>
      </div>
      <div className=" flex flex-col gap-3">
        <h3 className=" uppercase text-2xl">filter:</h3>
        <p className=" cursor-pointer" onClick={() => alcolichFilter("vodka")}>
          Vodka
        </p>
        <p className=" cursor-pointer" onClick={() => alcolichFilter("gin")}>
          Gin
        </p>
        <p className=" cursor-pointer" onClick={() => alcolichFilter("rum")}>
          Rum
        </p>
        <p
          className=" cursor-pointer"
          onClick={() => alcolichFilter("tequila")}
        >
          Tequila
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
