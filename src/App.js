import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./Page/Page.jsx";
import ReportPage from "./Page/ReportPage.jsx"

const AppRouter  = () => {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Page />} />
          <Route path="/ReportPage" element={<ReportPage />} />
        </Routes>
      </div>
    </Router>
  );
};


export default AppRouter ;
