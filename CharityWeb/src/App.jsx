import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Body from "./Body"; // Keep it if you're using it for homepage or layout
import VolunteerForm from "./pages/VolunteerForm";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/volunteer-form" element={<VolunteerForm />} />
                <Route path="/contact-page" element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default App;
