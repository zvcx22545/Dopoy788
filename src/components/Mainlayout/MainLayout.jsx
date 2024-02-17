import Navbar from '../Navbar/Navbar';
import Tab from '../Tab/Tab';
import Navlogin from '../Navlogin/Navlogin';
import ImgMediaCard from '../card/card';
import Footer from '../Footer/Footer';

function MainLayout() {
  return (
    <section id="main-layout">
    <Navbar></Navbar>
    <Navlogin/>
    <Tab/>
    <ImgMediaCard/>
    <Footer/>

    </section>
  );
}

export default MainLayout