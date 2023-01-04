import './App.css';
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Reservation from "./pages/reservation/Reservation";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
      <Routes>
        <Route exact path="/reserve" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
