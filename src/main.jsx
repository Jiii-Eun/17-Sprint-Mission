import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTemplate from "@/templates/MainTemplate";
import Items from "@/pages/Items.jsx";
import AddItem from "@/pages/AddItem.jsx";
import Login from "@/pages/Login.jsx";
import Signup from "@/pages/Signup.jsx";
import NotFound from "@/pages/NotFound.jsx";
import Home from "@/pages/Home.jsx";
import Privacy from "@/pages/Privacy.jsx";
import Faq from "@/pages/Faq.jsx";
import Community from "@/pages/Community";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="items" element={<Items />} />
          <Route path="additem" element={<AddItem />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="community" element={<Community />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
