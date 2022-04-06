import React, { useState, useRef } from "react";
import GraphHandler from "../Graph/GraphHandler";
import CardHandler from "../CardContainer/CardHandler";

function InputData() {
  //date
  let d = new Date();
  let y = d.getFullYear();
  let m = d.getMonth();
  let day = d.getDate();

  let newdate = `0${day}/0${m + 1}/${y % 100}`;
  //   console.log(newdate);

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const inputref1 = useRef(null);
  const inputref2 = useRef(null);

  const [arr, setArr] = useState([
    {
      date: "01/02/22",
      weight: "60",
      height: "170",
      bmi: "28.8",
    },
    {
      date: "02/02/22",
      weight: "60",
      height: "170",
      bmi: "26.8",
    },
    {
      date: "03/02/22",
      weight: "60",
      height: "170",
      bmi: "20.8",
    },
    {
      date: "04/02/22",
      weight: "60",
      height: "170",
      bmi: "24.8",
    },
    {
      date: "05/02/22",
      weight: "60",
      height: "170",
      bmi: "20.8",
    },
    {
      date: "06/02/22",
      weight: "60",
      height: "170",
      bmi: "26.8",
    },
    {
      date: "07/02/22",
      weight: "60",
      height: "170",
      bmi: "28.8",
    },
  ]);

  const calculate = () => {
    let bmival = (weight / (height * height)) * 10000;

    arr.shift();
    let obj = {
      date: newdate,
      bmi: bmival.toFixed(2),
      weight: weight,
      height: height,
    };
    setArr((ls) => {
      return [...ls, obj];
    });
    inputref1.current.value = "";
    inputref2.current.value = "";
  };

  return (
    <>
      <div className="input-head">
        <div className="input">
          <div className="inputItem">
            <label>weight (in kg)</label>
            <input
              ref={inputref1}
              className="inputfield"
              type="number"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="inputItem">
            <label>height (in cm)</label>
            <input
              ref={inputref2}
              className="inputfield"
              type="number"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="btn-bmi" onClick={calculate}>
          Calculate BMI
        </button>
      </div>
      <GraphHandler arr={arr} />
      <CardHandler arr={arr} newobj={arr[6]} />
    </>
  );
}

export default InputData;
