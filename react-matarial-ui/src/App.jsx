import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import LeagueDetails from "./components/LeagueDetails";
import TeamDetials from "./components/TeamDetials";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/leagues"} element={<Home />} />
        <Route path={"/leagues/:name"} element={<LeagueDetails />} />
        <Route path={"/leagues/:name/:name"} element={<TeamDetials />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
