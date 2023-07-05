import React from "react";
import "./styles/styles.css";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/Home';
import PrivacyPage from "./components/Privacy";

const App = () => {
  return (
    <div>
      <div className="bg-black">
        <Router>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
