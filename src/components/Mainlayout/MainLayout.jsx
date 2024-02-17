import Navbar from '../Navbar/Navbar';
import Navlogin from '../Navlogin/Navlogin'
import Tab from '../Tab/Tab';
import Footer from '../Footer/Footer';

function MainLayout() {
  return (
    <section id="main-layout">
      <Navbar></Navbar>
      <Navlogin/>
      <Tab/>
      <Footer/>
    </section>
  );
}

export default MainLayout