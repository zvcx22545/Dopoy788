import Navbar from '../Navbar/Navbar';
import Navlogin from '../Navlogin/Navlogin'
import Tab from '../Tab/Tab';
import Footer from '../Footer/Footer';
import Card from '../card/card';

function MainLayout() {
  
  return (
    <section id="main-layout">
      <Navbar/>
      <Navlogin/>
      <Tab/>
      <Card/>
      <br/>
      <Footer/>
    </section>
  );
}

export default MainLayout