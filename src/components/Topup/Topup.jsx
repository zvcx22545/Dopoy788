import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoIosBackspace } from "react-icons/io";
import "./Topup.css";

function Topup() {
  const [showTopup, setShowTopup] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const handleTopupClick = () => {
    setShowTopup(true);
    setShowWithdraw(false);
  };

  const handleWithdrawClick = () => {
    setShowTopup(false);
    setShowWithdraw(true);
  };

  useEffect(() => {
    setShowTopup(true);
    setShowWithdraw(false);
  }, []);


  return (
    <section>
      <Navbar />
      <div className="flex flex-col p-5">
        <div className="divider divider-start text-4xl pb-8">
          <IoIosBackspace />
          ย้อนกลับ
        </div>
      </div>

      

      {showWithdraw && (
        <div className="w-full">
            <div className="w-full">
                <div className="text-center text-[#4400A5] text-[2rem] font-bold mb-5">
                    <p>ถอนเงิน</p>
                </div>
                <div className="text-center bg-[#FF292924] rounded-xl p-10 m-2">
                    <p>
                    ท่านสามารถถอนเงินได้สูงสุด 30 ครั้งต่อวัน!! <br />
                    วันนี้ท่านถอนไปแล้วทั้งหมด 1 ครั้ง หากมีปัญหา
                    กรุณาติดต่อเจ้าหน้าที่
                    </p>
                </div>
                </div>
                
                <div className="grid grid-cols-2 gap-5 p-10 max-md:grid-cols-1 max-md:p-5">

                    <div className="grid items-center border border-[#4400A5] rounded-lg p-5 shadow-md">
                        <p>รายได้รวมทั้งหมด</p>
                        <hr className=" bg-[#4400A5] h-[1.5px] my-4" />
                        <p className="text-[1.5rem] font-bold text-[#4400A5]">฿ 1,000</p>
                        <p>รายได้สมาชิกของเพื่อนเราทั้งหมด (฿0)</p>
                    </div>

                    <div className="grid items-center text-center border bg-[#E9E0F4] border-[#4400A5] rounded-lg p-5 shadow-md">
                        <p>ยอดเงินที่ถอนได้</p>
                        <hr className=" bg-[#4400A5] h-[3px] my-4" />
                        <input type="number" className="px-5 my-3" name="withdraw" id="" value={0} />
                        <p className="text-left mb-2">หมายเหตุ : </p>
                        <button className="bg-[#4400A5] text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] flex justify-center items-center w-full py-1 rounded-lg" >ถอนเงิน</button>
                    </div>

                </div>

        </div>
      )}


    {showTopup && (
        // h-[267px]
    <div className="w-full">
        <div className="w-full"> 
          <div className="text-center text-[#4400A5] text-[2rem] font-bold mb-5">
            <p>เติมเงิน</p>
          </div>
          <div className="text-center bg-[#FF292924] rounded-xl p-10 m-2">
            <p className="mb-10 font-bold">
              กรุณาใช้บัญชีที่ท่านผูกกับระบบเท่านั้น!!
            </p>
            <p>
              เพื่อการฝากที่รวดเร็ว ควรฝากในยอดที่แตกต่างจากยอดฝากครั้งที่แล้วหลังจากโอนแล้วเครดิตจะเข้าระบบโดยอัตโนมัติภายใน
              10 นาที หากมีปัญหากรุณา ติดต่อเจ้าหน้าที่ *กรุณาเลี่ยงการเติมเงินช่วงเวลา 00:00น.
              (เที่ยงคืน) เนื่องจากระบบธนาคารไม่สามารถตรวจสอบยอดเงินได้
            </p>
          </div>
        </div>
     
      <div className="grid grid-cols-2 gap-5 p-10 max-md:grid-cols-1 max-md:p-5">

        <div className="flex justify-between items-center border border-[#4400A5] rounded-lg p-5 shadow-md">
          <div className="flex items-center gap-2">
            <img
              src="https://placehold.co/50x50"
              alt="Vietnam flag"
              className="w-18 h-18 rounded-full"
            />
            <div className="grid">
              <p>กสิกรไทย</p>
              <p className="text-[1.5rem] font-bold">0123456789</p>
            </div>
          </div>
          <div className="flex mt-auto items-end">
            <button className="bg-[#4400A5] flex text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] px-2 py-1 rounded-lg justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
              คัดลอก
            </button>
          </div>
        </div>
         
        <div className="flex justify-between items-center border border-[#4400A5] rounded-lg p-5 shadow-md">
          <div className="flex items-center gap-2">
            <img
              src="https://placehold.co/50x50"
              alt="Vietnam flag"
              className="w-18 h-18 rounded-full"
            />
            <div className="grid">
              <p>กสิกรไทย</p>
              <p className="text-[1.5rem] font-bold">0123456789</p>
            </div>
          </div>
          <div className="flex mt-auto items-end">
            <button className="bg-[#4400A5] flex text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] px-2 py-1 rounded-lg justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
              คัดลอก
            </button>
          </div>
        </div>
      </div>
    </div>
)}
      <div className="grid grid-cols-2 justify-between gap-5 p-10 max-md:p-4">
        <div className="flex gap-3">
          <button
            className="bg-[#4400A5] text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] flex justify-center items-center w-[150px] py-1 rounded-lg "
            onClick={handleTopupClick}
          >
            เติมเงิน
          </button>
          <button
            className="bg-[#FF8329] text-white border border-[#FF8329] hover:bg-white hover:text-[#FF8329] flex justify-center items-center w-[150px] py-1 rounded-lg "
            onClick={handleWithdrawClick}
          >
            ถอนเงิน
          </button>
        </div>
        {showTopup &&(
        <button className="bg-[#4400A5] text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] flex justify-center items-center w-[150px] py-1 rounded-lg ml-auto ">
          อัปโหลดสลิป
        </button>
        )}
      </div>

{/* เติมเงิน */}
            {showTopup &&(
            <div className="modalTable2 px-16 max-md:px-5">
                <table className="text-center">
                    <thead className="text-white text-center h-[40px] bg-[#4400A51F]">
                        <th className="col3">เวลา</th>
                        <th className="col3">ประเภท</th>
                        <th className="col4">บัญชี</th>
                        <th className="col1">จำนวนเงิน</th>
                        <th>สถานะ</th>
                    </thead>
                    <tbody className="text-center">
                        
                        <tr className="max-md:shadow-md">
                            <td data-label="เวลา" className="col3">
                                <div className="flex flex-col justify-center max-md:justify-end">
                                    <p>28/12/66</p>
                                    <p>22.35.00</p>
                                </div>
                            </td>
                            <td className="col3" data-label="ประเภท">
                                <button className="bg-[#FF8329] border border-[#FF8329] hover:bg-white text-white hover:text-[#FF8329] p-1 rounded-lg">เติมเงิน</button>
                            </td>
                            <td className="col4 max-md:h-[50px]" data-label="บัญชี">
                                <div className="flex items-center gap-2 max-md:justify-end">
                                    <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-8 h-8 rounded-full" />
                                        <div className="grid text-left">
                                            <p>กสิกรไทย</p>
                                            <p>0123456789</p>
                                        </div>
                                </div>
                            </td>
                            <td className="col1" data-label="จำนวนเงิน">10</td>
                            <td className="max-md:h-[50px] max-md:ml-auto" data-label="สถานะ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#00871E" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10 bg-[#00871E] rounded-full mx-auto max-md:ml-auto max-md:mx-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        )}
{/* ถอนเงิน */}
        {showWithdraw && (
            <div className="modalTable2 px-16 max-md:px-5">
            <table className="text-center">
                <thead className="text-white text-center h-[40px] bg-[#4400A51F]">
                    <th className="col3">เวลา</th>
                    <th className="col3">ประเภท</th>
                    <th className="col4">บัญชี</th>
                    <th className="col1">จำนวนเงิน</th>
                    <th>สถานะ</th>
                </thead>
                <tbody className="text-center">
                    
                    <tr className="max-md:shadow-md">
                        <td data-label="เวลา" className="col3">
                            <div className="flex justify-center max-md:justify-end">
                                <p>28/12/66</p>
                                <p>22.35.00</p>
                            </div>
                        </td>
                        <td className="col3" data-label="ประเภท">
                            <button className="bg-[#FF8329] border border-[#FF8329] hover:bg-white text-white hover:text-[#FF8329] p-1 rounded-lg">ถอนเงิน</button>
                        </td>
                        <td className="col4 max-md:h-[50px]" data-label="บัญชี">
                            <div className="flex items-center gap-2 max-md:justify-end">
                                <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-8 h-8 rounded-full" />
                                    <div className="grid text-left">
                                        <p>กสิกรไทย</p>
                                        <p>0123456789</p>
                                    </div>
                            </div>
                        </td>
                        <td className="col1" data-label="จำนวนเงิน">10</td>
                        <td className="max-md:h-[50px] max-md:ml-auto" data-label="สถานะ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#00871E" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10 bg-[#00871E] rounded-full mx-auto max-md:ml-auto max-md:mx-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        )}

      <Footer />
    </section>
  );
}
export default Topup;
