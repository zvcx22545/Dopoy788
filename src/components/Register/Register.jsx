
import Navbar from "../Navbar/Navbar"
import Swal from "sweetalert2";
import './register.css'
import { useState } from 'react';
function Register() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;

    // Ensure only numeric input is accepted
    if (!/^\d*$/.test(value)) {
      return; // Do nothing if non-numeric characters are entered
    }

    // Check if length is more than 10 digits
    if (value.length > 10) {
      return; // Do nothing if length is more than 10 digits
    }

    setPhoneNumber(value);
    setPhoneNumberError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Regular expression for validating phone number pattern
    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber) && phoneNumber.test(phoneNumber) != 10) {
      setPhoneNumberError('กรุณากรอกเบอร์โทรให้ถูกต้อง');
      // Display SweetAlert2 error message
      Swal.fire({
        icon: 'error',
        title: 'ผิดพลาด',
        text: 'กรุณากรอกเบอร์โทรให้ถูกต้อง',
      });
      return;
    }
    
    // Here you can proceed with the form submission or any other action
  };
  return (

    <section id="register">
            <Navbar></Navbar>
            <div className="Container-Regis flex flex-col justify-center items-center">
                <div className="logo">
                    <img src="https://media.discordapp.net/attachments/1147854094929776664/1207952174785495050/n2.png?ex=65e18421&is=65cf0f21&hm=0e04083e483540d4f53ba76fd32b8954c5abe96a76d36e4e019527e8d33efa3e&" alt="" />
                </div>
                <div className="text-[#4400A5] mb-3 ">ลงทะเบียนข้อมูลสมาชิก</div>
                <form onSubmit={handleSubmit} className="flex flex-col w-[35%] mx-auto max-lg:w-[50%] max-sm:w-[80%]">

                  <div className="recomend">
                  <label htmlFor="username">ชื่อผู้ใช้งาน</label>
                  <input type="username" id="username" placeholder="Username" className="border-solid border border-[#4400A5] p-1 rounded"/>
                  </div>

                  <div className="recomend">
                  <label htmlFor="password">รหัสผ่าน</label>
                  <input type="password" id="password" placeholder="Password" className="border-solid border border-[#4400A5] p-1 rounded"/>
                  </div>
                  
                  <div className="recomend">
                  <label htmlFor="phone">เบอร์โทร</label>
                  <input type="tel" onChange={handlePhoneNumberChange} value={phoneNumber} maxLength="10" placeholder="Phone" className="border-solid border border-[#4400A5] p-1 rounded" required/>
                  {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}
                  </div>

                  <div className="recomend">
                  <label htmlFor="username">บัญชีธนาคาร</label>
                  <input type="text" placeholder="Bank account" className="border-solid border border-[#4400A5] p-1 rounded"/>
                  </div>
                  
                  <div className="recomend">
                  <label htmlFor="username">เลขบัญชีธนาคาร</label>
                  <input type="text" placeholder="Bank number" className="border-solid border border-[#4400A5] p-1 rounded"/>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                  <label htmlFor="recomend-person">รหัสผู้แนะนำถ้ามี</label>
                  <input type="text" placeholder="Recommender ID" className="w-[50%] border-solid border border-[#4400A5] p-1 rounded "/>
                  <div className="bg-green-500 rounded-full h-5 w-5"></div>
                  </div>
                  
                </form>
            </div>
    </section>
  )
}

export default Register