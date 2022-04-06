import React, { useState } from "react";

export default function CardHandler({ arr, newobj }) {
  let [myar, setmyarr] = useState([...arr]);
  if (myar[myar.length - 1] !== newobj) {
    let ar = [...myar, newobj];
    setmyarr([...ar]);
  }

  const deleteCard = (index) => {
    let newarr = myar;
    newarr.splice(index, 1);
    setmyarr([...newarr]);
  };

  return (
    <div className="cardHandler">
      {myar &&
        myar.map((obj, index) => {
          return (
            <>
              <div className="card" key={obj.bmi + obj.height}>
                <h1>
                  {" "}
                  <span> BMI : {obj.bmi}</span>
                  <button onClick={() => deleteCard(index)}>delete</button>
                </h1>
                <p>
                  <span>weight : {obj.weight}</span>
                  <span>height : {obj.height}</span>
                  <span>date : {obj.date}</span>
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
}
