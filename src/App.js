import "./App.scss";
import Calculator from "./components/Calculator/Calculator";
import { MortgageProvider } from "./components/context/MortgageContext";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";

function App() {
  return (
    <MortgageProvider>
      <div className="app">
     <Home/>
      </div>
    </MortgageProvider>
  );
}

export default App;
