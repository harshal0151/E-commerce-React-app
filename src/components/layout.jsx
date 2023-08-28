
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header';
import Footer from './footer';
const layout = () => {
  return <>
 
  <Header />
  <Outlet />
  <Footer />
  </>;
}

export default layout