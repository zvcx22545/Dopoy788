import Navbar from '../Navbar/Navbar';
import Tab from '../Tab/Tab';
import Navlogin from '../Navlogin/Navlogin';

function MainLayout() {
  return (
    <section id="main-layout">
    <Navbar></Navbar>
    <Tab/>
    <Navlogin/>
    </section>
  );
}

export default MainLayout