import React from "react";
import Card from "./Card";
import alphabetArray from "../utility/alphabet";

function Content({ drinkList, dataCall }) {
  const containerStyle = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    WebkitScrollbar: {
      display: "none",
    },
  };

  return (
    <div style={containerStyle} className="h-full p-10 overflow-auto">
      <div className="grid gap-3 md:grid-cols-3 auto-rows-fr">
        {drinkList.map((el) => (
          <Card key={el.idDrink} el={el} />
        ))}
      </div>
    </div>
  );
}

export default Content;
