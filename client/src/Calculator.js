import styled from "styled-components";
import bg from "./assets/bgImg.jpg";
import ButtonCalc from "./ButtonCalc";
import { useState } from "react";

const Calculator = () => {
  const [text, setText] = useState("0");

  return (
    <CalculatorWrapper>
      <div className="calculatorContainer">
        <div className="text">
          <p>{text}</p>
        </div>
        <div className="btnWrapper">
          <ButtonCalc value={"AC"} />
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

  .calculatorContainer {
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

    .text {
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

    .btnWrapper {
      display: grid;
      grid: repeat(5, 50px) / repeat(4, 75px);
      /*grid-template-columns: repeat(4, 75px);
      grid-template-rows: repeat(5, 50px);*/
      grid-auto-flow: row;
      align-content: space-between;
      justify-content: space-between;

      width: 100%;
      height: 100%;

      box-shadow: 0px 0px 10px red;
    }
  }
`;
