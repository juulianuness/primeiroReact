
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";

import ClassComponents from "./components/ClassComponents";
import PropsExample   from "./components/PropsExample";


function App() {
  return (
    <>
      <h1>Meu primeiro React</h1>
      
      <FunctionalComponent />
      <ClassComponents />
      <PropsExample nome="Julia" idade={29} />
    </>
  );
}

export default App
