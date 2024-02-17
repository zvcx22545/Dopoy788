import React from 'react'
import Navbar from '../Navbar/Navbar';
import Navlogin from '../Navlogin/Navlogin';

function MainLayout() {
  return (
    <section id="main-layout">
    <Navbar></Navbar>
    <Navlogin/>
    </section>
  );
}

export default MainLayout