import { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';
// icon
const Lefticon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
);

function Repassword() {
    const [inputValue, setInputValue] = useState('');
    const [confirmationValue, setConfirmationValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleConfirmationChange = (e) => {
        setConfirmationValue(e.target.value);
    };

    const handleSubmit = () => {
        // ตรวจสอบค่า inputValue และ confirmationValue และดำเนินการต่อตามต้องการ
        if (inputValue === confirmationValue) {
            // ทำตามกระบวนการเมื่อค่าทั้งสองตรงกัน
        } else {
            // ทำตามกระบวนการเมื่อค่าไม่ตรงกัน
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <>
        <section style={{ minHeight: "100vh", position:"relative"}}>
            <Navbar />
            <div className="flex flex-col p-5">
            <div className="divider divider-start pb-8 text-[#4400A5] md:hidden">
        <Link to="/Home" className="flex justify-center items-center gap-1">
          <div className="text-2x">{Lefticon}</div>
          <div className="text-xl"> ย้อนกลับ</div>   
          </Link>
        </div>
            </div>
            <div className="flex justify-center items-center mt-[5%] mx-auto w-full lg:mt-[10%]">
                <div className="grid rounded-lg items-center border w-[600px] border-[#4400A5] p-5 max-md:w-[350px] max-md:mt-[5%]">
                    <p>เปลี่ยนรหัสผ่าน</p>
                    <hr className="mt-5" />
                    <div className="grid my-5 gap-2">
                        <label htmlFor="Newpassword">รหัสใหม่</label>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                            <input 
                                className="pl-10 border border-[#D8D8D8] py-2 px-3 rounded-lg"
                                type={showPassword ? "text" : "password"} 
                                pattern="key"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <button onClick={toggleShowPassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4400A5" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid my-5 gap-2">
                        <label htmlFor="Newpassword">ยืนยันรหัสใหม่</label>
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                            <input 
                                className="pl-10 border border-[#D8D8D8] py-2 px-3 rounded-lg"
                                type={showPassword ? "text" : "password"} 
                                pattern="key"
                                value={confirmationValue}
                                onChange={handleConfirmationChange}
                            />
                            <button onClick={toggleShowPassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4400A5" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button className="bg-[#4400A5] text-white rounded border border-[#4400A5] hover:bg-white hover:text-[#4400A5] p-2" onClick={handleSubmit}>เปลี่ยนรหัสผ่าน</button>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default Repassword;
