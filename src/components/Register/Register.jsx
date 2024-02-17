
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
                <form onSubmit={handleSubmit} className="w-[60%]">
                  <div>
                  <label htmlFor="username">ชื่อผู้ใช้งาน</label>
                  </div>
                  <input type="username" id="username" className="border-solid border border-[#4400A5] rounded"/>
                  <div>
                  <label htmlFor="password">รหัสผ่าน</label>
                  </div>
                  <input type="password" id="password" className="border-solid border border-[#4400A5] rounded"/>
                  <div>
                  <label htmlFor="phone">เบอร์โทร</label>
                  </div>
                  <input type="tel" id="phone" onChange={handlePhoneNumberChange} value={phoneNumber} maxLength="10" placeholder="กรุณากรอกเบอร์โทร" className="border-solid border border-[#4400A5] rounded" required/>
                  {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}

                  <div>
                  <label htmlFor="bank">บัญชีธนาคาร</label>
                  </div>
                  <input type="text" id="bank" className="border-solid border border-[#4400A5] rounded"/>
                  <div>
                  <label htmlFor="bank-account">เลขบัญชีธนาคาร</label>
                  </div>
                  <input type="text" id="bank-account" className="border-solid border border-[#4400A5] rounded"/>
                  <div className="recomend">
                  <label htmlFor="recomend-person">รหัสผู้แนะนำถ้ามี</label>
                  <input type="text" id="recomend-person" className="border-solid border border-[#4400A5] rounded w-[30%] "/>
                  </div>
                </form>
            </div>
    </section>
  )
}

export default Register