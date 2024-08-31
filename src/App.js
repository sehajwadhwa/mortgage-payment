import "./App.scss";

import { MortgageProvider } from "./components/context/MortgageContext";
import Home from "./components/Home/Home";


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
