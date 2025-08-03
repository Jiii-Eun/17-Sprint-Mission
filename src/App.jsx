import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home/HomePage";
import ItemsPage from "@/pages/items/ItemsPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import AddItem from "@/pages/AddItem";

import HomeLayout from "@/layout/HomeLayout.jsx";
import DefaultLayout from "@/layout/DefaultLayout.jsx";
import NoLayout from "@/layout/NoLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<NoLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route element={<DefaultLayout />}>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
