import Navbar from '../Navbar/Navbar';
import Navlogin from '../Navlogin/Navlogin'
// import Tab from '../Tab/Tab';
import Footer from '../Footer/Footer';
// import Card from '../card/card';
import Rule from '../Rule/RuleBtn';
import Resultrotte from '../Resultrotte/Resultroote';
import Redeem from '../Redeem/Redeem';
import ParentComponent from '../ParentComponent/ParentComponent';

function MainLayoutLogin() {
  
  return (
    <section id="main-layout">
      <Navbar/>
      <Navlogin/>
      <ParentComponent/>
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