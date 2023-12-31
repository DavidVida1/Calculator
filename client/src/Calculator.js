import styled from "styled-components";
import bg from "./assets/bgImg.jpg";
import ButtonCalc from "./ButtonCalc";
import { useEffect, useState } from "react";

const Calculator = () => {
  const [text, setText] = useState("0");
  const [previousValue, setPreviousValue] = useState(0);
  const [operator, setOperator] = useState("+");

  const numbersArray = Array.from(Array(10).keys());

  /*----------When you Click on a Num--------*/
  const handleNumClick = (value) => {
    if (operator == "=") {
      setOperator("");
    }
    setText(
      text == "0" || operator == "=" ? value.toString() : text.concat(value)
    );
  };

  /*----------When you Click on AC--------*/
  const handleACClick = () => {
    setText("0");
    setPreviousValue(0);
    setOperator("+");
  };
  /*----------When you Click on + --------*/
  const handleSumClick = () => {
    calculateNums("+");
  };

  /*activeOperator represent l'operator appuyer*/
  const calculateNums = (activeOperator) => {
    let value = parseInt(text);
    /*compares the activeOperator to the Operator state*/
    switch (operator) {
      case "+":
        value = value + previousValue;
        break;
      case "-":
        value = previousValue - value;
        break;
      case "X":
        value = value * previousValue;
        break;

      case "+/-":
        value = value * -1;
        break;
      case "/":
        if (text !== "0") {
          value = previousValue / value;
        }
        break;
    }
    setText("0");
    /*important that the number is a string or the concatonation will not work*/

    if (activeOperator == "=") {
      setText(value.toString());
      value = 0;
    }
    setPreviousValue(value);
    setOperator(activeOperator);
  };

  useEffect(() => {
    console.log(previousValue);
  }, [previousValue]);

  return (
    <CalculatorWrapper>
      <div className="calculatorContainer">
        <div className="text">
          <p>{text}</p>
        </div>
        <div className="btnWrapper">
          <ButtonCalc
            value={"AC"}
            handleClick={handleACClick}
            className="btnAc"
          />{" "}
          <ButtonCalc value={"+/-"} handleClick={handleACClick} />
          <ButtonCalc value={"+"} handleClick={handleSumClick} />
          <ButtonCalc
            value={"-"}
            handleClick={handleACClick}
            className="btnMinus"
          />
          <ButtonCalc
            value={"X"}
            handleClick={handleACClick}
            className="btnX"
          />
          <ButtonCalc
            value={"/"}
            handleClick={handleACClick}
            className="btnDivision"
          />
          <ButtonCalc
            value={"="}
            handleClick={() => {
              calculateNums("=");
            }}
            className="btnEqual"
          />
          <ButtonCalc
            value={"0"}
            handleClick={() => {
              handleNumClick(0);
            }}
            className="btnZero"
          />
          {numbersArray.map((number) => {
            return (
              number > 0 && (
                <ButtonCalc
                  value={number}
                  handleClick={() => {
                    handleNumClick(number);
                  }}
                />
              )
            );
          })}
        </div>
      </div>
    </CalculatorWrapper>
  );
};

export default Calculator;

const CalculatorWrapper = styled.section`
  position: relative;
  height: 800px;
  width: 500px;
  background-image: url(${bg});
  background-position: center;
  background-size: 500px 800px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  & .calculatorContainer {
    position: absolute;
    display: grid;
    grid-template-rows: 122px auto;

    grid-gap: 20px;
    height: 600px;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;

    background: rgba(255, 255, 255, 0.07);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);

    & .text {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 100%;
      font-size: 5rem;

      background: rgba(255, 255, 255, 0.07);
      border-radius: 10px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(9.5px);
      -webkit-backdrop-filter: blur(9.5px);
    }

    & .btnWrapper {
      display: grid;
      grid: repeat(5, 50px) / repeat(4, 75px);
      grid-auto-flow: row;
      align-content: space-between;
      justify-content: space-between;

      width: 100%;
      height: 100%;

      & .btnAc {
        grid-area: 1/1 / 1/3;
      }

      & .btnMinus {
        grid-area: 2/4 / span 1 / span 1;
      }

      & .btnX {
        grid-area: 3/4 / span 1 / span 1;
      }

      & .btnDivision {
        grid-area: 4/4 / span 1 / span 1;
      }

      & .btnEqual {
        grid-area: 5/3 / span 1 / span 2;
      }

      & .btnZero {
        grid-area: 5/2 / span 1 / span 1;
      }
    }
  }
`;
