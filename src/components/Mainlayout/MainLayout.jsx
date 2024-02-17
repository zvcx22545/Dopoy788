import React from 'react'
import Navbar from '../Navbar/Navbar';
import Tab from '../Tab/Tab';
import BasicCard from '../card/card';

function MainLayout() {
  return (
    <section id="main-layout">
    <Navbar></Navbar>
    <Tab/>
    <BasicCard/>
    </section>
  );
}

export default MainLayout