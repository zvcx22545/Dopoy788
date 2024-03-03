import Navbar from '../Navbar/Navbar';
// import Tab from '../Tab/Tab';
import Footer from '../Footer/Footer';
// import Card from '../card/card';
import Rule from '../Rule/RuleBtn';
import Resultrotte from '../Resultrotte/Resultroote';
import Redeem from '../Redeem/Redeem';
import ParentComponent from '../ParentComponent/ParentComponent';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

function MainLayout() {
  // const navigate = useNavigate();
  // const userToken = useSelector((state) => state.user.userToken);
  // useEffect(() => {
  //   // Check if the user is logged in
  //   if (!userToken) {
  //     navigate('/Login'); // Redirect to login page if not logged in
  //   }
  // }, [userToken, navigate]);
  return (
    <section id="main-layout">
      <Navbar/>
      {/* <Navlogin/> */}
      <ParentComponent/>
      {/* <Tab/>
      <Card/> */}
      <Rule/>
      <Resultrotte/>
      <Redeem/>
      <br/>
      <Footer/>
    </section>
  );
}

export default MainLayout