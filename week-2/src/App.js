import styled from "styled-components";
import './App.css';

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px
`;

function App() {
  return (
    <StBox>박스</StBox>
  );
}

export default App;