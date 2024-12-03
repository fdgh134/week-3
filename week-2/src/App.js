//import styled from "styled-components";
import './App.css';
import { useState, useRef, useEffect } from 'react';

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

// function App() {
//   const [number, setNumber] = useState(0);
//   return (
//     <div>
//       <div>{number}</div>
//       <button
//         onClick = {() => {
//           setNumber((beforeState) => beforeState + 1);
//           setNumber((beforeState) => beforeState + 1);
//           setNumber((beforeState) => beforeState + 1);
//         }}
//       >
//         버튼
//       </button>
//     </div>
//   );
// }

// function App() {
//   const ref = useRef("초기값");
//   console.log("ref 1", ref);
//   ref.current = "바꾼 값";
//   console.log("ref 1", ref);

//   return (
//     <div>
//       <p>useRef</p>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   const plusStateCountButtonHandler = () => {
//     setCount(count + 1);
//   };

//   const plusRefCountButtonHandler = () => {
//     countRef.current++;
//   };

//   return (
//     <>
//       <div>
//         state 영역입니다. {count} <br />
//         <button onClick={plusStateCountButtonHandler}>state 증가</button>
//       </div>
//       <div>
//         ref 영역입니다. {countRef.current} <br />
//         <button onClick={plusRefCountButtonHandler}>ref 증가</button>
//       </div>
//     </>
//   );
// }

function App() {
  const idRef = useRef("");
  const pwRef = useRef("");
  
  const [id, setId] = useState("");
  
  const changeTap = (e) => {
  	setId(e.target.value);
  };
  
  // 랜더링 될 때
  useEffect(() => {
  	idRef.current.focus();
  },[]);
  
  useEffect(() => {
  	if ( id.length >= 10 ) {
      pwRef.current.focus();
    }
  },[id]);
  
  return (
    <>
      <div>
        아이디 : <input type="text" ref={idRef} value={id} onChange={changeTap}/>
      </div>
      <div>
        비밀번호 : <input type="password" ref={pwRef} />
      </div>
    </>
  );
}


export default App;
