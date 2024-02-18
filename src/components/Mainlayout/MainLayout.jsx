import Navbar from '../Navbar/Navbar';
import Navlogin from '../Navlogin/Navlogin'
import Tab from '../Tab/Tab';

function MainLayout() {
  
  return (
    <section id="main-layout">
    <Navbar></Navbar>
    <Navlogin/>
    <Tab/>
    </section>
  );
}

export default MainLayout