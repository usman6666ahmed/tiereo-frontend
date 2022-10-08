import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";

export function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
