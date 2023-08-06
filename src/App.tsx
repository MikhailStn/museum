import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/mainPage/mainPage";
import { BuyTicketPage } from "./pages/buyTicketPage/buyTicketPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/buy-ticket" element={<BuyTicketPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
