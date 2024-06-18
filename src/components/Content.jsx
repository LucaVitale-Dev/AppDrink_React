import React from "react";
import Card from "./Card";
import alphabetArray from "../utility/alphabet";

function Content({ drinkList, dataCall }) {
  const containerStyle = {
    scrollbarWidth:
      "none" /* Nascondi la barra di scorrimento solo per Firefox */,
    msOverflowStyle:
      "none" /* Nascondi la barra di scorrimento solo per IE 10+ */,
    "&::WebkitScrollbar": {
      display:
        "none" /* Nascondi la barra di scorrimento solo per WebKit (Chrome, Safari, etc.) */,
    },
  };

  return (
    <div style={containerStyle} className=" col-span-3 p-12 overflow-auto ">
      <div className=" flex justify-between  mb-5">
        <div className=" flex gap-3">
          {alphabetArray.map((letter) => (
            <button
              className=" uppercase"
              onClick={() => dataCall(letter)}
              key={letter}
            >
              {letter}
            </button>
          ))}
        </div>
        <input
          className=" rounded-2xl border-2 border-[#988869] bg-transparent "
          type="search"
        />
      </div>
      <div className="grid gap-3 grid-cols-3">
        {drinkList.map((el) => (
          <Card key={el.idDrink} el={el} />
        ))}
      </div>
    </div>
  );
}

export default Content;
