import React, { useState } from "react";
  // value는 useState로 관리
const useInput = () => {
  const [value, setValue] = useState("");
  // 핸들러 로직도 구현
  const handler = (e) => {
    setValue(e.target.value);
  };
  // 이 훅은 []을 반환. 첫번째는 value, 두번째는 핸들러를 반환
  return [value, handler];
};

export default useInput;