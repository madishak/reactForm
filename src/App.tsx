import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./containers/LogIn";
import Contacts from "./containers/Contacts";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
