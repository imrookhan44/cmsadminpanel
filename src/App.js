import Data from "./components/Data";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
