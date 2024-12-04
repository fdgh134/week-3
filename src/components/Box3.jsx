import React from "react";

const boxStyle = {
  width:"100px",
  height:"100px",
  backgroundColor:"green",
  color:"white",
  display:"flex",
  justifyContent:"center",
  alignItem:"center",
};

function Box3() {
  console.log("Box3 렌더링!");
  return <div style={boxStyle}>Box3</div>
}

export default React.memo(Box3);