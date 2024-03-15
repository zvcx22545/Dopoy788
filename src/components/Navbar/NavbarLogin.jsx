import { Link } from 'react-router-dom';
function NavbarLogin() {

  return (
    <div className="navbar flex justify-between  shadow-md">
      <Link to="/"><img src="Doopoylogo.png" className="logo" /> </Link>
    
    {/* <div className="navbar-center hidden  lg:flex">
      <ul className="menu menu-horizontal px-1 ">
        <Link to="/"><li><a className="text-lg">เช็คฉลากกินแบ่ง</a></li></Link>
        <Link to="/Blog"><li><a className="text-lg">บทความ</a></li></Link>
      </ul>
    </div> */}
    <div className="flex gap-2">
    <div className="gap-2 ">
      <Link to="/register"><button className="btn text-white bg-[#FF8329]">สมัครสมาชิก</button></Link>
    </div>
    <div className="">
      {/* <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white text-black">
          <Link to="/"><li><a>เช็คฉลากกินแบ่ง</a></li></Link>
          <Link to="/Blog"><li><a>บทความ</a></li></Link>
        </ul>
      </div> */}
      
    </div>
    </div>
    {/* <Link to="/Login"> <div tabIndex={0} role="button" className="btn w-40">
      เข้าสู่ระบบ
        </div></Link> */}
  </div>
  )
}

export default NavbarLogin