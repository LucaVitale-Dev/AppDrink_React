import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

function Card({ el }) {
  const [visible, setVisible] = useState(false);

  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = el[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(<p key={i}>{ingredient}</p>);
      }
    }
    return ingredients;
  };

  const renderQuantity = () => {
    const quantity = [];
    for (let i = 1; i <= 15; i++) {
      const qnt = el[`strMeasure${i}`];
      if (qnt) {
        quantity.push(<p key={i}>{qnt}</p>);
      }
    }
    return quantity;
  };

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative flex flex-col items-center justify-center gap-3 mb-6 "
    >
      <img className=" rounded-2xl" src={el.strDrinkThumb} alt="" />
      <h4 className=" font-Playwrite italic text-2xl">{el.strDrink}</h4>

      {visible && (
        <div className="p-6 w-full h-full bg-black absolute bg-opacity-90 flex flex-col justify-evenly overflow-auto ">
          <h3 className=" flex items-center text-2xl font-bold justify-center gap-2">
            <FaRegHeart />
            {el.strDrink}
          </h3>
          <p className=" text-center ">{el.strAlcoholic}</p>
          <div className=" grid grid-cols-2 justify-items-center">
            <div>{renderIngredients()}</div>
            <div>{renderQuantity()}</div>
          </div>
          <p>{el.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
