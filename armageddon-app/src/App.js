import logo from './logo.svg';
import './App.css';
import {Button} from "./button/Button";

function App() {
  return (
    <div className="App">
        <h1 className={"header"} style={{backgroundColor: "yellow"}}>Header level 1</h1>
        <div>Test div</div>
        <Button />
    </div>
  );
}

export default App;
