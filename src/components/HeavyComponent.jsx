import React, { useState, useMemo } from "react";

function HeavyComponent() {
  const [count, setCount] = useState(0);
  
  const heavyWork = () => {
    for (let i = 0; i < 1000; i++) {
    }
    return 100;
  };
  // useMemo 사용 X
  // const value = heavyWork();
  
  // useMemo 사용
  const value = useMemo(() => heavyWork(),[]);
  
  return (
  	<div>
      <p>난 {value}를 가져오는 무거운 컴포넌트다!</p>
	  <button onClick={() => {
          setCount(count + 1);
        }}
      >
        누르면 count가 올라요!
      </button>
   	  <br/>
      {count}
    </div>
  );
  
}

export default HeavyComponent;