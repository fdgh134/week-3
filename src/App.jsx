import React from "react";
import useInput from "./hooks/useInput";

// const App = () => {
// 	// input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
//   const [title, setTitle] = useState("");
//   const onChangeTitleHandler = (e) => {
//     setTitle(e.target.value);
//   };

// 	// input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
//   const [body, setBody] = useState("");
//   const onChangeBodyHandler = (e) => {
//     setBody(e.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="title"
//         value={title}
//         onChange={onChangeTitleHandler}
//       />
//       <input
//         type="text"
//         name="title"
//         value={body}
//         onChange={onChangeBodyHandler}
//       />
//     </div>
//   );
// };

const App = () => {
  const [title, onChangeTitle] = useInput();
  const [body, onChangeBody] = useInput();

  return (
    <div>
      <input 
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitle}
      />
      <input 
        type="text"
        name="title"
        value={body}
        onChange={onChangeBody}
      />      
    </div>
  );
}

export default App;
