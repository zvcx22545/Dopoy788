import Navbar from '../Navbar/Navbar';
import Navlogin from '../Navlogin/Navlogin'
import Tab from '../Tab/Tab';
import Footer from '../Footer/Footer';
import Card from '../card/card';
import Rule from '../Rule/RuleBtn';
import Resultrotte from '../Resultrotte/Resultroote';
import Redeem from '../Redeem/Redeem';

function MainLayout() {
  
  return (
    <section id="main-layout">
      <Navbar/>
      <Navlogin/>
      <Tab/>
      <Card/>
      <Rule/>
      <Resultrotte/>
      <Redeem/>
      <br/>
      <Footer/>
    </section>
  );
}

export default MainLayout