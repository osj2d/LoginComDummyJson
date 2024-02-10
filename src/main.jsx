import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserStorage } from "./UserContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Conta from "./Components/Conta/Conta.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserStorage>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="conta" element={<Conta />}></Route>
          {/* Fazer Pagina de erro */}
        </Routes>
      </UserStorage>
    </React.StrictMode>
  </BrowserRouter>
);
