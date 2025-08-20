import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/pages/home";
import ItemsPage from "@/pages/items";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import AddItem from "@/pages/addItem";

import HomeLayout from "@/layout/HomeLayout.jsx";
import DefaultLayout from "@/layout/DefaultLayout.jsx";
import { ResetStyle } from "@/styles/ResetStyle";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { ToastContainer } from "react-toastify";

localStorage.setItem(
  "accessToken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInNjb3BlIjoiYWNjZXNzIiwiaWF0IjoxNzU1NjYzMzc1LCJleHAiOjE3NTU2NjUxNzUsImlzcyI6InNwLXBhbmRhLW1hcmtldCJ9.p83nHs_-3fVG9-7uiL2gvexmtVRW9gEzWQEFdUINymM"
);

function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        limit={1}
      />
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route element={<DefaultLayout />}>
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
