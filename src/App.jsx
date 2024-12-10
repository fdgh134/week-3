// import './App.css';
// import GrandFather from './components/GrandFather';

// export function App() {
//   return <GrandFather />
// }

// import React, { useCallback, useState } from "react";
// import Box1 from "./components/Box1";
// import Box2 from "./components/Box2";
// import Box3 from "./components/Box3";

// const boxesStyle = {
//   display: "flex",
//   marginTop: "10px",
// };

// function App(){
//   console.log("App 컴포넌트 리렌더링");

//   const [count, setCount] = useState(0);

//   const plusBtn = () => {
//     setCount(count + 1);
//   };

//   const minusBtn = () => {
//     setCount(count - 1);
//   };

//   const initCount = useCallback(() => {
//     console.log(`[COUNT 변경] ${count}에서 0으로 변경!`);
//     setCount(0);
//   }, [count]);

//   return (
//     <div>
//       <h3>카운트 예제</h3>
//       <p>현재 카운트 : {count}</p>
//       <button onClick={plusBtn}>+</button>
//       <button onClick={minusBtn}>-</button>
//       <div style={boxesStyle}>
//         <Box1 initCount={initCount} />
//         <Box2 />
//         <Box3 />
//       </div>
//     </div>
//   );
// }

// import HeavyComponent from "./components/HeavyComponent";

// function App() {
//   const navStyle = {
//     backgroundColor: "yellow",
//     marginBottom: "30px",
//   };
  
//   const footerStyle = {
//     backgroundColor: "green",
//     marginTop: "30px",
//   };
  
//   return (
//   	<div>
//       <nav style={navStyle}>네비게이션 바</nav>
//  	  <HeavyComponent />
//       <footer style={footerStyle}>푸터</footer>
//     </div>
//   );
// }

import React, { useState, useEffect, useMemo } from "react";

function App() {
  const [isAlive, setIsAlive] = useState(true);
  const [uselessCount, setUselessCount] = useState(0);
  
  const user = useMemo(() => {
    return {
   	  name: "홍길동",
      age: 21,
      isAlive: isAlive ? "생존" : "사망",
    };
  },[isAlive]);
  
  useEffect(() => {
    console.log("생존여부가 바뀔 때만 호출!");
  },[user]);
  
  return (
    <div>
      <div>
        내 이름은 {user.name}이고, {user.age}살이야.
      </div>
	  <br/>
      <div>
        <button onClick={() => {
          setIsAlive(!isAlive);
          }}
        >
          누르면 살았다 죽었다 합니다
        </button>
		<br/>
        생존여부 : {user.isAlive}
      </div>
      <br/>
        {uselessCount}  
      <br/>
      <button onClick={() => {
        setUselessCount(uselessCount + 1);
        }}
      > 숫자 증가
      </button>
    </div>
  );
  
}

export default App;
