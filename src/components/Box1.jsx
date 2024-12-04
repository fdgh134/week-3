import React from "react";

const boxStyle = {
  width:"100px",
  height:"100px",
  backgroundColor:"red",
  color:"white",
  display:"flex",
  justifyContent:"center",
  alignItem:"center",
};

function Box1({ initCount }) {
  console.log("Box1 렌더링!");

  const clearBtn = () => {
    initCount();
  };
  return (
  <div style={boxStyle}>
    <button onClick={clearBtn}>초기화</button>
  </div>
  );
}

export default React.memo(Box1);