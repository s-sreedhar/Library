
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Books from "../src/pages/Books";
import Update from "../src/pages/Update";
import Add from "../src/pages/Add";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Books/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
