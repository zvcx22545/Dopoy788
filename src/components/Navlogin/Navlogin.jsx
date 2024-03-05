import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, refreshToken } from '../reducers/userSlice';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';
function Navlogin() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials(prevState => ({ ...prevState, [name]: value }));
    };



    useEffect(() => {
        const checkTokenExpiration = () => {
            const tokenExpiresAt = localStorage.getItem('tokenExpiresAt');
            if (tokenExpiresAt) {
              const expiresIn = new Date(tokenExpiresAt) - new Date();
              if (expiresIn <= 0) {
                // Token has expired
                console.log("Token has expired, refreshing token...");
                dispatch(refreshToken());
              } else {
                // Set a timeout to refresh the token every 24 hours
                const refreshTimeout = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
          
                setTimeout(() => {
                  // Dispatch the refreshToken action here
                  console.log("Refreshing token...");
                  dispatch(refreshToken());
                }, refreshTimeout);
              }
            }
          };
          
    
        checkTokenExpiration();
        const interval = setInterval(checkTokenExpiration, 5 * 60 * 1000); // Check every 5 minutes
    
        return () => clearInterval(interval);
      }, [dispatch]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginAction = await dispatch(loginUser(credentials)).unwrap(); // Use unwrap() to handle the promise correctly
            if (loginAction && loginAction.token) {
                navigate('/Home'); // Use 'navigate' instead of 'redirect'
            }
        } catch (error) {
            // Handle the rejected case and display the error message
            let errorMessage = 'เกิดข้อผิดพลาด'; // Default error message
    
            if (error) {
                // Assuming error structure is { field: "error message" }
                errorMessage = Object.values(error).map((value) => {
                    if (value === "username is required") return "กรุณากรอก Username<br>";
                    if (value === "password is required") return "กรุณากรอก password<br>";
                    return value; // Return original message for other errors
                }).join(""); // Join all error messages
            }
    
            if (errorMessage.includes("Invalid credentials")) {
                errorMessage = "กรุณากรอก Username และ password ให้ถูกต้อง";
            }
    
            Swal.fire({
                icon: 'error',
                title: 'เข้าสู่ระบบไม่สำเร็จ',
                html: errorMessage,
            });
        }
    };

    
  
   
    return(
        <form action="" onSubmit={handleSubmit}>
        <div className="mb-5 text-white ">
            <div className="navLogin flex items-center gap-[8%] justify-center bg-[#4400A5] py-10 max-lg:flex-col ">
    <div className="max-lg:text-center">
        <p>เข้าสู่ระบบกับ</p>
        <h1 className="max-lg:ml-0 ml-5 text-[2rem] font-bold">ดูโพย 788</h1>
    </div>
    <div className="flex justify-center items-center mt-5 sm:justify-center max-lg:flex-col sm:items-start sm:gap-[10%]">
        <div className="grid gap-2 items-start">
            <label>ชื่อผู้ใช้</label>
            <input type="text" placeholder="Username" className="bg-white text-black border rounded-[5px] p-1" onChange={handleChange} value={credentials.username} name='username'/>
        </div>
        <div className="grid gap-2 items-start max-md:my-5">
            <label>รหัสผ่าน</label>
            <input type="password" placeholder="Password" className="bg-white text-black border rounded-[5px] p-1" onChange={handleChange} value={credentials.password} name='password'/>
            <button className="text-right mt-2">ลืมรหัสผ่าน</button>
        </div>
    </div>
    <div className="mt-3">
        <button className="btn text-white bg-[#FF8329]" onClick={handleSubmit}>ยืนยัน</button>
    </div>
</div>

        </div>
        </form>
    )
}

export default Navlogin