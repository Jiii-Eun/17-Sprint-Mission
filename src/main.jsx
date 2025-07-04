import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddItem from '@/pages/AddItem.jsx';
import Community from '@/pages/Community';
import Faq from '@/pages/Faq.jsx';
import Home from '@/pages/Home.jsx';
import Items from '@/pages/Items.jsx';
import Login from '@/pages/Login.jsx';
import NotFound from '@/pages/NotFound.jsx';
import Privacy from '@/pages/Privacy.jsx';
import Signup from '@/pages/Signup.jsx';
import { GlobalStyle } from '@/styles/global';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='items' element={<Items />} />
        <Route path='additem' element={<AddItem />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='community' element={<Community />} />
        <Route path='faq' element={<Faq />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
