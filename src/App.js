import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import InputPage from "./components/InputPage";
import OutputPage from "./components/OutputPage";

function App() {
  const [ocrText, setOcrText] = useState("");

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark">
        <Routes>
          <Route path="/" element={<InputPage setOcrText={setOcrText} />} />
          <Route path="/output" element={<OutputPage ocrText={ocrText} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
