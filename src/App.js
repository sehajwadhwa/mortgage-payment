import "./App.scss";
import Calculator from "./components/Calculator/Calculator";
import { MortgageProvider } from "./components/context/MortgageContext";
import Result from "./components/Result/Result";

function App() {
  return (
    <MortgageProvider>
      <div className="app">
        <Calculator />
        <Result />
      </div>
    </MortgageProvider>
  );
}

export default App;
