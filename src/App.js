import { Route, Routes } from "react-router-dom";
import Cars from "./Cars";
import Flowers from "./Flowers";
import Home from "./Home";
import Menu from "./Menu";
import Mountains from "./Mountains";
import "./App.css";
function App() {
  return (
    <>
      <>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cars" element={<Cars />}></Route>
          <Route path="/Flowers" element={<Flowers />}></Route>
          <Route path="/Mountains" element={<Mountains />}></Route>
        </Routes>
      </>
    </>
  );
}
export default App;
