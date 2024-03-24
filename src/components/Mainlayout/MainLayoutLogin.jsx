import Navlogin from '../Navlogin/Navlogin'
// import Tab from '../Tab/Tab';
import Footer from '../Footer/Footer';
// import Card from '../card/card';
import Rule from '../Rule/RuleBtn';
import Resultrotte from '../Resultrotte/Resultroote';
import Redeem from '../Redeem/Redeem';
import NavbarLogin from '../Navbar/NavbarLogin';
import ParentComponentLogin from '../ParentComponent/ParentComponentLogin';
import ParentComponent from '../ParentComponent/ParentComponent';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { logoutUser } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router



function MainLayoutLogin() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.userToken);
  const tokenExpiresAt = useSelector((state) => state.user.tokenExpiresAt);


  useEffect(() => {
    // Consider converting tokenExpiresAt to a Date and checking if it's past
    const currentTime = new Date().getTime();
    const shouldLogout = token || tokenExpiresAt && currentTime > new Date(tokenExpiresAt).getTime();

    async function handleLogout() {
      if (shouldLogout) {
        try {
          const response = await dispatch(logoutUser()).unwrap();
          if (response.success) {
            navigate("/");
          } else {
            console.error('Logout failed:', response);
          }
        } catch (error) {
          if (error.message !== "No token found.") {
            console.error('Logout Error:', error);
          }
          navigate("/");
        }
      }
    }

    handleLogout();
  }, [dispatch, navigate, token, tokenExpiresAt]); // Include token and tokenExpiresAt in dependencies
  
  return (
    <section id="main-layout">
      <NavbarLogin/>
      <Navlogin/>
      {/* <ParentComponentLogin/> */}
      <ParentComponent/>
      {/* <Tab/> */}
      {/* <Card/> */}
      <Rule/>
      {/* <Resultrotte/> */}
      <Redeem/>
      <br/>
      <Footer/>
    </section>
  );
}

export default MainLayoutLogin