import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./components/Signup";
import LogIn from "./components/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
