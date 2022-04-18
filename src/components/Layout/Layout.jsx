import React from 'react';
import AppBar from '../AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <AppBar />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
