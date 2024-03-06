import Navlogin from '../Navlogin/Navlogin'
// import Tab from '../Tab/Tab';
import Footer from '../Footer/Footer';
// import Card from '../card/card';
import Rule from '../Rule/RuleBtn';
import Resultrotte from '../Resultrotte/Resultroote';
import Redeem from '../Redeem/Redeem';
import NavbarLogin from '../Navbar/NavbarLogin';
import ParentComponentLogin from '../ParentComponent/ParentComponentLogin';

function MainLayoutLogin() {
  
  return (
    <section id="main-layout">
      <NavbarLogin/>
      <Navlogin/>
      <ParentComponentLogin/>
      {/* <Tab/> */}
      {/* <Card/> */}
      <Rule/>
      <Resultrotte/>
      <Redeem/>
      <br/>
      <Footer/>
    </section>
  );
}

export default MainLayoutLogin