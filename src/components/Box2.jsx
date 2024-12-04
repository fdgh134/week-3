import React from "react";

const boxStyle = {
  width:"100px",
  height:"100px",
  backgroundColor:"blue",
  color:"white",
  display:"flex",
  justifyContent:"center",
  alignItem:"center",
};

function Box2() {
  console.log("Box2 렌더링!");
  return <div style={boxStyle}>Box2</div>
}

export default React.memo(Box2);