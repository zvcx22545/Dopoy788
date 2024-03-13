import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logoutUser,fetchUser} from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';


function Navbar() {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    dispatch(fetchUser());
  },[dispatch])

  useEffect(() => {
    const handleResize = () => {
      // Close modal if screen width is greater than 768px
      if (window.innerWidth > 768) {
        setIsModalOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
        const response = await dispatch(logoutUser()).unwrap();
        if (response.success) {
            // Redirect only if the response has a success status
            redirect("/");
            // Refresh the page after redirecting
            setTimeout(() => {
                window.location.reload();
            }, 1000); // 1000 milliseconds = 1 second
        } else {
            console.error('Logout failed:', response);
        }
    } catch (error) {
        // Only log the error if it's not the "No token found" error
        if (error !== "No token found.") {
            console.error('Logout Error:', error);
        }
        // Redirect to login page regardless of the error
        redirect("/");
        // Refresh the page after redirecting
        setTimeout(() => {
            window.location.reload();
        }, 1000); // 1000 milliseconds = 1 second
    }
};

  
  
  
  return (
    <div className="navbar max-md:justify-between shadow-md">
      <Link to="/Home"><img src="Doopoylogo.png" className="logo" /> </Link>
      
      <div className="navbar-center hidden lg:flex lg:mx-auto">
        <ul className="menu menu-horizontal px-1">
          <Link to="/Home"><li><a className="text-lg">เช็คฉลากกินแบ่ง</a></li></Link>
          <Link to="/Blog"><li><a className="text-lg">บทความ</a></li></Link>
        </ul>
      </div>


      {window.innerWidth >= 768 && (
      <div className="dropdown dropdown-end ml-5">
          <div tabIndex={0} role="button" className="btn w-40">
           {currentUser ? currentUser.username:"Guest"}
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-white shadow bg-[#333] rounded-box w-52">
            <Link to="/Listpoy"><li><a>โพยหวย</a></li></Link>
            <Link to="/Topup"><li><a>เติมเงิน / ถอนเงิน</a></li></Link>
            <Link to="/Invite"><li><a>แนะนำเพื่อน</a></li></Link>
            <Link to="/Repassword"><li><a>เปลี่ยนรหัสผ่าน</a></li></Link>
            <li><a>ข้อมูลส่วนตัว</a></li>
             <li><a onClick={handleLogout}>ออกจากระบบ</a></li>
          </ul>
          
        </div>
      )}
      
        {isModalOpen && (
        <div className="fixed inset-0 border-none rounded-none z-50 flex items-center justify-center bg-[#fff] bg-opacity-100 ">
          <div className="nav-content p-4 rounded-lg shadow-md right-0 w-52">
            <div tabIndex={0} role="button" className="btn w-full mb-4">
              {currentUser ? currentUser.username : "Guest"}
            </div>
            <ul className="menu menu-sm">
              <Link to="/Listpoy"><li><a>โพยหวย</a></li></Link>
              <Link to="/Topup"><li><a>เติมเงิน / ถอนเงิน</a></li></Link>
              <Link to="/Invite"><li><a>แนะนำเพื่อน</a></li></Link>
              <Link to="/Repassword"><li><a>เปลี่ยนรหัสผ่าน</a></li></Link>
              <li><a>ข้อมูลส่วนตัว</a></li>
              <li><a onClick={handleLogout}>ออกจากระบบ</a></li>
            </ul>
            <button className="absolute top-2 right-2" onClick={() => setIsModalOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Button to open modal */}
      {window.innerWidth <= 768 && ( // Render only if screen width is less than or equal to 768px
        <button onClick={() => setIsModalOpen(true)} className="dropdown dropdown-end ml-5">
          <div tabIndex={0} role="button" className="btn w-40">
            {currentUser ? currentUser.username : "Guest"}
          </div>
        </button>
      )}

      <div className="md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm bg-white right-0 text-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            <Link to="/Home"><li><a>เช็คฉลากกินแบ่ง</a></li></Link>
            <Link to="/Blog"><li><a>บทความ</a></li></Link>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar