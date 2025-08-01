// src/components/Layout.jsx
import React from 'react';
import Navbar from '../src/Comp/Home/Navbar';

import { Outlet } from 'react-router-dom';
import Footer from './Comp/Home/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
