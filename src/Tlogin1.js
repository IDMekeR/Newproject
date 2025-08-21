import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tlogin from "./Tlogin";
import Tlogin2 from "./Tlogin2";

function Tlogin1() {
  return (
<Router>
<Routes>
<Route path="/" element={<Tlogin/>} />
<Route path="/Tlogin2" element={<Tlogin2 />} />
</Routes>
</Router>
);
}

export default Tlogin1;
