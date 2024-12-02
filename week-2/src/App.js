//import styled from "styled-components";
import './App.css';
import { useState } from 'react';

// const StBox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${(props) => props.borderBox};
//   margin: 20px;
//   display: inline-block;
// `;

// function App() {
//   return (
//     <div>
//       <StBox borderBox="red">빨간 박스</StBox>
//       <StBox borderBox="green">초록 박스</StBox>
//       <StBox borderBox="blue">파란 박스</StBox>
//     </div>
//   );
// }

// const boxList = ["red", "green", "blue"];

// const getBoxName = (color) => {
//   switch (color) {
//     case "red":
//       return "빨간 박스";
//     case "green":
//       return "초록 박스";
//     case "blue":
//       return "파란 박스";
//     default:
//       return "검정 박스";
//     }
// };

// function App() {
//   return (
//     <div>
//       {boxList.map((box) => (
//         <StBox borderBox={box}>{getBoxName(box)}</StBox>
//       ))}
//     </div>
//   );
// }

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{number}</div>
      <button
        onClick = {() => {
          setNumber((beforeState) => beforeState + 1);
          setNumber((beforeState) => beforeState + 1);
          setNumber((beforeState) => beforeState + 1);
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
