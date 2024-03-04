import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer.jsx";
import "./register.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AfterSuccess from "./AfterSuccess.jsx";
import { useDispatch, useSelector } from "react-redux";
import { createUser,loginUser } from "../reducers/userSlice.jsx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    phone_number: "",
    bank_name: "",
    bank_account_number: "",
    referral_code: "",
  });



  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    if (isRegistrationSuccess) {
      // Dispatch login action after registration success
      dispatch(loginUser({ username: userData.username, password: userData.password }))
        .then(() => {
          // Navigate to the login page after successful login
        })
        .catch((error) => {
          console.error("Login Error:", error);
          // Handle login error if necessary
        });
    }
  }, [isRegistrationSuccess, dispatch, navigate, userData.password, userData.username]);


  const handleSave = async (e) => {
    e.preventDefault();
  
    // Validate phone number length before dispatching action
    if (userData.phone_number && userData.phone_number.length !== 10) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Phone Number',
        text: 'โปรดป้อนหมายเลขโทรศัพท์ 10 หลัก',
      });
      return; // Stop execution if phone number is invalid
    }
  
    try {
      const resultAction = await dispatch(createUser(userData));
      if (createUser.fulfilled.match(resultAction)) {
        await setIsRegistrationSuccess(true);
        await dispatch(loginUser({ username: userData.username, password: userData.password }));
      } else if (createUser.rejected.match(resultAction)) {
        // Handle the rejected case and display the error message
        let errorMessage = 'เกิดข้อผิดพลาด'; // Default error message
  
        if (resultAction.payload) {
          // Assuming error structure is { field: "error message" }
          errorMessage = Object.values(resultAction.payload).map((value) => {
            if (value === "username already exist") return "มีผู้ใช้ username นี้แล้ว <br>";
            if (value === "password must be a least 8 character") return "รหัสผ่านควรมีอย่างน้อย 8 ตัว <br>";
            if (value === "phone_number is required") return "กรุณากรอกเบอร์โทรศัพท์ <br>";
            if (value === "username is required") return "กรุณากรอก Username<br>";
            if (value === "password is required") return "กรุณากรอก password<br>";
            if (value === "bank_name is required") return "กรุณาเลือกธนาคารของคุณ<br>";
            if (value === "bank_account_number is required") return "กรุณากรอกเลขบัญชีธนาคาร<br>";
            if (value === "string validation failed") return "กรุณากรอกเลขบัญชีธนาคารให้ถูกต้อง<br>";
            return value; // Return original message for other errors
          }).join(" "); // Join all error messages
        } else if (resultAction.error && resultAction.error.message) {
          errorMessage = resultAction.error.message;
        }
  
        Swal.fire({
          icon: 'error',
          title: 'สมัครสมาชิกไม่สำเร็จ',
          html: errorMessage,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'เกิดข้อผิดพลาดที่ไม่คาดคิด',
      });
    }
  };

    const handleKeyPress = (event) => {
      // หยุดไม่ให้ป้อนข้อมูลหากไม่ใช่ตัวเลข และไม่ใช่ควบคุม (เช่น backspace, delete)
      if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
        event.preventDefault();
      }
    };

  const handleChanges = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  // const [Bank, setBank] = useState("");

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
  
    // Check if the input is valid: only digits and not longer than 10 digits
    if (/^\d*$/.test(phoneNumber) && phoneNumber.length <= 10) {
      // Update the phone number in userData state if valid
      setUserData({ ...userData, phone_number: phoneNumber });
    } else {
      // Display error if the input is invalid
      Swal.fire({
        icon: 'error',
        title: 'Invalid Phone Number',
        text: 'กรุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง',
      });
    }
  };
  
  return (
    <section id="register" className="min-h-screen">
      <Navbar></Navbar>
      <div className="Container-Regis flex flex-col justify-center items-center min-h-[85vh]">
        <div className="logo">
          <img
            src="Doopoylogo.png"
            alt=""
          />
        </div>
        <div className={isRegistrationSuccess ? "hidden" : "text-[#4400A5] my-[3] font-[700] title-header"}>ลงทะเบียนข้อมูลสมาชิก</div>
        <form className={isRegistrationSuccess ? "hidden" : "flex flex-col w-[35%] mx-auto max-lg:w-[50%] max-sm:w-[80%]"}
      onSubmit={handleSave}
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

          <div>
            <div className="recomend">
              <label htmlFor="phone">เบอร์โทร</label>
              <input
                type="tel"
                onChange={ handleChanges}
                onKeyPress={handleKeyPress}
                onInput={handlePhoneNumberChange}
                value={userData.phone_number}
                maxLength="10"
                placeholder="Phone"
                name="phone_number"
                className="border-solid border border-[#4400A5] p-1 rounded"
                required
              />
  
            </div>
          </div>

          <div className="w-full mt-[.5rem]">
            <label htmlFor="Bank account">บัญชีธนาคาร</label>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  style={{ backgroundColor: "white" }}
                  className="border-solid border h-[31.6px] border-[#4400A5] p-1 rounded"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userData.bank_name}
                  label="กรุณาเลือกธนาคาร"
                  name="bank_name"
                  onChange={handleChanges}
                  required
                >
                  <MenuItem value={"SCB "}>
                    <div className="flex items-center gap-2">
                      {" "}
                      <img
                        className="h-[15px] w-[15px]"
                        src="image/20231007_224813.png"
                        alt=""
                      />
                      ธนาคารไทยพาณิชย์
                    </div>{" "}
                  </MenuItem>
                  <MenuItem value={"TTB"}>
                    <div className="flex items-center gap-2">
                      {" "}
                      <img
                        className="h-[15px] w-[15px]"
                        src="image/20231007_225025.png"
                        alt=""
                      />
                      ธนาคารทหารไทยธนชาต
                    </div>{" "}
                  </MenuItem>
                  <MenuItem value={"KBANK"}>
                    <div className="flex items-center gap-2">
                      {" "}
                      <img
                        className="h-[15px] w-[15px]"
                        src="image/20231204_100616.png"
                        alt=""
                      />
                      ธนาคารกสิกรไทย
                    </div>{" "}
                  </MenuItem>
                  <MenuItem value={"BAY"}>
                    <div className="flex items-center gap-2">
                      {" "}
                      <img
                        className="h-[15px] w-[15px]"
                        src="image/20231208_133001.png"
                        alt=""
                      />
                      ธนาคารกรุงศรีอยุธยา
                    </div>{" "}
                  </MenuItem>
                  <MenuItem value={"GSB"}>
                    <div className="flex items-center gap-2">
                      {" "}
                      <img
                        className="h-[15px] w-[15px]"
                        src="image/20231208_133120.png"
                        alt=""
                      />
                      ธนาคารออมสิน
                    </div>{" "}
                  </MenuItem>
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
              onKeyDown={handleKeyPress}
              required
            />
          
          </div>

          <div className="flex justify-between items-center mt-4">
            <label htmlFor="recomend-person">รหัสผู้แนะนำถ้ามี</label>
            <input
              type="text"
              placeholder="Recommender ID"
              className="w-[50%] border-solid border border-[#4400A5] p-1 rounded "
              value={userData.referral_code}
              onChange={handleChanges}
              name="referral_code"
            />
          
            <div className="bg-green-500 rounded-full h-5 w-5"></div>
          </div>

          <div className="mt-[2.5rem] mx-auto">
            <button
              type="submit"
              className="btn text-white bg-[#4400A5]"
              onClick={handleSave}
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>
        

        {isRegistrationSuccess ? (
        <AfterSuccess onTimeout={() => navigate('/')} />
        ) : <></>}

      </div>
      <div className="footers">
      <Footer />
      </div>
      
    </section>
  );
}

export default Register;
