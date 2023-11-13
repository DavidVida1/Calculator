import styled from "styled-components";

const ButtonCalc = ({ value }) => {
  return <BtnCalcWrapper>{value}</BtnCalcWrapper>;
};

const BtnCalcWrapper = styled.button`
  font-size: 2.5rem;
  text-align: center;

  background: rgba(255, 255, 255, 0.13);
  border-radius: 14px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export default ButtonCalc;
