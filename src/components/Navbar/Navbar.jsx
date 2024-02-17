import { Link } from 'react-router-dom'
function Navbar() {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>เช็คฉลากกินแบ่ง</a></li>
        <li><a>บทความ</a></li>
        <li><a>รีวิว</a></li>
      </ul>
    </div>
    <Link to="/"><img src="https://media.discordapp.net/attachments/1147854094929776664/1207952174785495050/n2.png?ex=65e18421&is=65cf0f21&hm=0e04083e483540d4f53ba76fd32b8954c5abe96a76d36e4e019527e8d33efa3e&" className="logo" /> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a className="text-lg">เช็คฉลากกินแบ่ง</a></li>
        <li><a className="text-lg">บทความ</a></li>
        <li><a className="text-lg">รีวิว</a></li>
    </ul>Name
  </div>
  <div className="navbar-end gap-2">
  <Link to="/register"><button className="btn text-white bg-[#FF8329]">สมัครสมาชิก</button></Link>
  </div>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</div>
  )
}

export default Navbar