import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Event from "./pages/Event";
import Travel from "./pages/Travel";

function App() {
  const [language, setLanguage] = useState("hi"); // "hi" | "en"

  return (
    <Router>
      <div className="app-root">
        {/* Shared Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route
              path="/about"
              element={
                <AboutPage
                  language={language}
                  setLanguage={setLanguage}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Travel" element={<Travel />} />

            {/* Optional: fallback */}
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
