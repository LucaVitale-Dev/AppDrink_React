import React, { useContext, useEffect } from "react";
import DrinkContext from "../utility/drinkContext";
import alphabetArray from "../utility/alphabet";
import logo from "../assets/logo.png";

function Sidebar({ alcolichFilter }) {
  const { drinkList, setDrinkList, drinkPref, setDrinkPref, dataCall } =
    useContext(DrinkContext);

  return (
    <div className="  p-10 grid  md:grid-cols-2 justify-items-center items-center ">
      <img className=" w-[250px]" src={logo} alt="" />

      <div className=" flex flex-col items-center gap-2">
        <p
          className="uppercase text-xl cursor-pointer"
          onClick={() => setDrinkList(drinkPref)}
        >
          Drink Preferiti
        </p>

        <h3 className=" uppercase text-xl">filter for alcolich :</h3>
        <div className=" flex gap-3 items-center text-white">
          <p
            className=" cursor-pointer"
            onClick={() => alcolichFilter("vodka")}
          >
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
        <h3 className=" uppercase text-xl">filter for letter:</h3>

        <div className="flex gap-1 md:gap-3 text-white">
          {alphabetArray.map((letter) => (
            <button
              className="uppercase"
              onClick={() => dataCall(letter)}
              key={letter}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
