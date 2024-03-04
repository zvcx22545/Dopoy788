import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await dispatch(logoutUser()).unwrap();
      if (response.success) {
        // Redirect only if the response has a success status
        redirect("/Login");
      } else {
        console.error('Logout failed:', response);
      }
    } catch (error) {
      // Only log the error if it's not the "No token found" error
      if (error !== "No token found.") {
        console.error('Logout Error:', error);
      }
      // Redirect to login page regardless of the error
      redirect("/Login");
    }
  };
  
  
  
  return (
    <div className="navbar  shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Link to="/"><li><a>เช็คฉลากกินแบ่ง</a></li></Link>
            <Link to="/Blog"><li><a>บทความ</a></li></Link>
          </ul>
        </div>
        <Link to="/"><img src="Doopoylogo.png" className="logo" /> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/"><li><a className="text-lg">เช็คฉลากกินแบ่ง</a></li></Link>
          <Link to="/Blog"><li><a className="text-lg">บทความ</a></li></Link>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/register"><button className="btn text-white bg-[#FF8329]">สมัครสมาชิก</button></Link>
      </div>
      <div className="dropdown dropdown-end ml-5">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
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
    </div>
  )
}

export default Navbar