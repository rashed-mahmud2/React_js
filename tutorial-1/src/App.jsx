// import { useState } from "react";
import CharacterDetails from "./components/CharacterDetails";
import RicknMorty from "./components/RicknMorty";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RicknMorty />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
