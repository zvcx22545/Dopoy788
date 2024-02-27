import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer.jsx'
import "./register.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AfterSuccess from "./AfterSuccess.jsx";
import {useDispatch, useSelector } from "react-redux";
import { createUser } from "../reducers/userSlice.jsx";
import { useNavigate } from 'react-router-dom';


function Register() {


  const [userData, setUserData] = useState({
    username: "",
    password: "",
    phonenumber: "",
    bank_account: "",
    bank_account_number: "",
    Referral_code: "",
  });
  
  const[message,setMessage] = useState("");
  const [isError,setIsError] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);

  const handleSave = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(createUser(userData));
    if (createUser.fulfilled.match(resultAction)) {
      setMessage("User saved successfully.");
      setIsError(false);
      navigate("/"); // Use navigate for redirection
    } else {
      if (resultAction.payload) {
        setMessage(resultAction.payload.errorMessage);
      } else {
        setMessage("An error occurred.");
      }
      setIsError(true);
    }
  };

  const handleChanges = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  

  // const [Bank, setBank] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    if (!/^\d*$/.test(value)) {
      return;
    }

    // Check if length is more than 10 digits
    if (value.length > 10) {
      return; // Do nothing if length is more than 10 digits
    }

    setPhoneNumber(value);
    setPhoneNumberError("");
  };

  return (
    <section id="register">
      <Navbar></Navbar>
      <div className="Container-Regis flex flex-col justify-center items-center">
        <div className="logo">
          <img
            src="https://media.discordapp.net/attachments/1147854094929776664/1207952174785495050/n2.png?ex=65e18421&is=65cf0f21&hm=0e04083e483540d4f53ba76fd32b8954c5abe96a76d36e4e019527e8d33efa3e&"
            alt=""
          />
        </div>
        <div className="text-[#4400A5] mb-3 ">ลงทะเบียนข้อมูลสมาชิก</div>
        <form
          className="flex flex-col w-[35%] mx-auto max-lg:w-[50%] max-sm:w-[80%]"
        >
          <div className="recomend">
            <label htmlFor="username">ชื่อผู้ใช้งาน</label>
            <input
              type="username"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleChanges}
              placeholder="Please enter username"
              className="border-solid border border-[#4400A5] p-1 rounded"
              required
            />
             {message && <div className={isError ? "text-red-500" : "text-green-500"}>{message}</div>}
          </div>

          <div className="recomend">
            <label htmlFor="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              value={userData.password}
              onChange={handleChanges}
              name="password"
              placeholder="Password"
              className="border-solid border border-[#4400A5] p-1 rounded"
              required
            />
          </div>

          <div className="recomend">
            <label htmlFor="phone">เบอร์โทร</label>
            <input
              type="tel"
              onChange={(e)=>
              {
                handleChanges(e);
                handlePhoneNumberChange(e);
              }}
              value={phoneNumber}
              maxLength="10"
              placeholder="Phone"
              name="phonenumber"
              className="border-solid border border-[#4400A5] p-1 rounded"
              required
            />
             {message && <div className={isError ? "text-red-500" : "text-green-500"}>{message}</div>}
            {phoneNumberError && (
              <div className="error-message">{phoneNumberError}</div>
            )}
          </div>
            
          <div className="w-full mt-[.5rem]">
          <label htmlFor="Bank account">บัญชีธนาคาร</label>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                style={{backgroundColor: 'rgba(229, 220, 241, 0.66)',}}
                className="border-solid border h-[31.6px] border-[#4400A5] p-1 rounded"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userData.bank_account}
                label="กรุณาเลือกธนาคาร"
                name="bank_account"
                onChange={handleChanges}
                 required>
                  
                <MenuItem value={"ธนาคารไทยพาณิชย์"}><div className="flex items-center gap-2"> <img className="h-[15px] w-[15px]" src="/public/image/20231007_224813.png" alt="" />ธนาคารไทยพาณิชย์</div> </MenuItem>
                <MenuItem value={"ธนาคารทหารไทยธนชาต"}><div className="flex items-center gap-2"> <img className="h-[15px] w-[15px]" src="/public/image/20231007_225025.png" alt="" />ธนาคารทหารไทยธนชาต</div> </MenuItem>
                <MenuItem value={"ธนาคารกสิกรไทย"}><div className="flex items-center gap-2"> <img className="h-[15px] w-[15px]" src="/public/image/20231204_100616.png" alt="" />ธนาคารกสิกรไทย</div> </MenuItem>
                <MenuItem value={"ธนาคารกรุงศรีอยุธยา"}><div className="flex items-center gap-2"> <img className="h-[15px] w-[15px]" src="/public/image/20231208_133001.png" alt="" />ธนาคารกรุงศรีอยุธยา</div> </MenuItem>
                <MenuItem value={"ธนาคารออมสิน"}><div className="flex items-center gap-2"> <img className="h-[15px] w-[15px]" src="/public/image/20231208_133120.png" alt="" />ธนาคารออมสิน</div> </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
          <div className="recomend">
            <label htmlFor="username">เลขบัญชีธนาคาร</label>
            <input
              type=""
              placeholder="Bank number"
              name="bank_account_number"
              className="border-solid border border-[#4400A5] p-1 rounded"
              value={userData.bank_account_number}
              onChange={handleChanges}
              required
            />
             {message && <div className={isError ? "text-red-500" : "text-green-500"}>{message}</div>}
          </div>

                  <div className="flex justify-between items-center mt-4">
                  <label htmlFor="recomend-person">รหัสผู้แนะนำถ้ามี</label>
                  <input type="text" placeholder="Recommender ID" className="w-[50%] border-solid border border-[#4400A5] p-1 rounded "
                   value={userData.Referral_code} onChange={handleChanges} name="Referral_code"/>
                    {message && <div className={isError ? "text-red-500" : "text-green-500"}>{message}</div>}
                  <div className="bg-green-500 rounded-full h-5 w-5"></div>
                  </div>
                  
                  <div className="mt-8 mx-auto">
                      <button type="submit" className="btn text-white bg-[#4400A5]" onClick={handleSave}>สมัครสมาชิก</button>
                  </div>
                  
                </form>

                <AfterSuccess/>
                

            </div>

            <Footer/>
    </section>
  );
}



export default Register;
