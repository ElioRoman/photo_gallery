import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import PhotoGallery from "./components/PhotoGallery.tsx";

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<PhotoGallery />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
