// import './App.css';
// import GrandFather from './components/GrandFather';

// export function App() {
//   return <GrandFather />
// }

import React, { useCallback, useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

const boxesStyle = {
  display: "flex",
  marginTop: "10px",
};

function App(){
  console.log("App 컴포넌트 리렌더링");

  const [count, setCount] = useState(0);

  const plusBtn = () => {
    setCount(count + 1);
  };

  const minusBtn = () => {
    setCount(count - 1);
  };

  const initCount = useCallback(() => {
    console.log(`[COUNT 변경] ${count}에서 0으로 변경!`);
    setCount(0);
  }, [count]);

  return (
    <div>
      <h3>카운트 예제</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={plusBtn}>+</button>
      <button onClick={minusBtn}>-</button>
      <div style={boxesStyle}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </div>
  );
}

export default App;
