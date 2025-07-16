import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import PrivateOutlet from "./components/PrivateOutlet";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
