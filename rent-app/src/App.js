import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/Navbar";
import { Details } from "./pages/details/Details";
import { Images } from "./pages/details/Images";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        {/* Routing z parametrem */}
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details/:id/images" element={<Images />} />
      </Routes>
    </>
  );
}

export default App;
