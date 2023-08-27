import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRendieringFuntional from "./components/ConditionalRendieringFuntional";

function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <ConditionalRendieringFuntional connected={false}/>
    </div>
  );
}

export default App;