
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";

import ClassComponents from "./components/ClassComponents";
import PropsExample   from "./components/PropsExample";


function App() {
  return (
    <>
      <h1>Dicas de Series</h1>
      
      <FunctionalComponent />
      <ClassComponents />
      <PropsExample nome="Friends" genero="comedia" />
    </>
  );
}

export default App
