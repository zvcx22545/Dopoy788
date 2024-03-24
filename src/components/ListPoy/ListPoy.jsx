import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";
import { IoIosBackspace } from "react-icons/io";
import React, { useState } from "react";
import "./ListPoy.css"
import { Link } from "react-router-dom";


// icon
const Lefticon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
);


function Listpoy(){
    const [showModal, setShowModal] = useState(false);
    const hov = "border border-[#FF8329] font-bold text-[#4400A5] rounded w-[150px] h-[55px] hover:bg-[#4400A5] hover:text-white hover:border-none";
    const [activeButton, setActiveButton] = useState("all");

    return(
        <>
    <section style={{ minHeight: "100vh", position:"relative"}}>
        <Navbar />
        {/* Modal */}
        {showModal && (
                    <div className="mo2">
                        <div className="modal-content">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 duration-300 ml-auto ease-in-out transition delay-150 hover:rotate-180" onClick={() => setShowModal(false)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            <div className="flex justify-between items-center mb-4 mt-2">
                                <div className="flex gap-2 items-center">
                                    <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-10 h-10 rounded-full" />
                                    <div className="grid">
                                        <p className="text-[#4400A5] text-[1.5rem] font-bold ">หวยไทย</p>
                                        <p>งวดที่ 14 ธันวาคม 2023</p>
                                    </div>
                                </div>
                                <span className="bg-[#D8D8D8] rounded-2xl p-2">รอผลออก</span>
                                
                            </div>
                            <hr className=" bg-[#4400A5] my-4" />
                            <div className="modalTable2">
                                <div className="headTable flex justify-between items-center text-white text-center h-[5px] mb-[-1rem]">
                                </div>
                                    <table>
                                        <thead className="text-white text-center h-[40px] bg-[#4400A51F]">
                                            <th>ประเภท</th>
                                            <th>เลข</th>
                                            <th>แทง</th>
                                            <th>เรทจ่าย</th>
                                            <th>ออกผล</th>
                                            <th>ถูกรางวัล</th>
                                        </thead>
                                        <tbody className="z-0">
                                            <tr>
                                                <td>วิ่งสองบน</td>
                                                <td>23</td>
                                                <td>300</td>
                                                <td>85</td>
                                                <td>รอผล</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>วิ่งสองบน</td>
                                                <td>23</td>
                                                <td>300</td>
                                                <td>85</td>
                                                <td>รอผล</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>วิ่งสองบน</td>
                                                <td>23</td>
                                                <td>300</td>
                                                <td>85</td>
                                                <td>รอผล</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>วิ่งสองบน</td>
                                                <td>23</td>
                                                <td>300</td>
                                                <td>85</td>
                                                <td>รอผล</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            <div className="flex justify-between items-center mt-10">
                                <p>ยอดแทง</p>
                                <p>฿ 10 </p>
                            </div>
                                <hr className=" bg-[#4400A5] my-5" />
                            <div className="flex justify-between items-center">
                                <p>ถูกรางวัล</p>
                                <p>฿ 0</p>
                            </div>
                                <hr className=" bg-[#4400A5] my-5" />
                        <button className="w-full text-white bg-[#FF2929F2] p-3 rounded border hover:border-[#FF2929F2] hover:bg-white hover:text-[#FF2929F2]">ยกเลิกโพย (เหลือ 3 ครั้ง ) </button>
                        </div>
                    </div>
                )}
      <div className="flex flex-col p-5 items-center">
      <div className="divider divider-start pb-8 text-[#4400A5] md:hidden">
        <Link to="/Home" className="flex justify-center items-center gap-1">
          <div className="text-2x">{Lefticon}</div>
          <div className="text-xl"> ย้อนกลับ</div>   
          </Link>
        </div>
        </div>
        <div className="grid justify-center text-center pb-[2rem]"  >
            <h1 className="text-[#4400A5] text-[2rem] font-bold mb-14">โพยหวย</h1>
            <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-lg:mx-auto max-md:grid-cols-2">
                <div className="border bg-[#FF8329] text-white h-[110px] w-[100%] rounded text-left p-5">
                    <p className="text-2xl font-bold">ยกแทงวันนี้</p>
                    <h1 className="text-2xl font-bold">฿ 10</h1>
                </div>
                <div className="border bg-[#FF8329]  text-white h-[110px] w-[100%] rounded text-left p-5">
                    <p className="text-2xl font-bold">โพยวันนี้</p>
                    <h1 className="text-2xl font-bold">1</h1>
                </div>
                <div className="border bg-[#4400A5]  text-white h-[110px] w-[100%] rounded text-left p-5">
                    <p className="text-2xl font-bold">ออกแล้ว</p>
                    <h1 className="text-2xl font-bold">0</h1>
                </div>
                <div className="border bg-[#4400A5]  text-white h-[110px] w-[100%] rounded text-left p-5">
                    <p className="text-2xl font-bold">รอผลออก</p>
                    <h1 className="text-2xl font-bold">1</h1>
                </div>
            </div>
            <div className="grid grid-cols-4 my-14 gap-5 mr-auto max-lg:mx-auto max-md:grid-cols-2">
                <button className={activeButton === "all" ? `${hov} bg-[#4400A5] text-white` : hov} onClick={() => setActiveButton("all")}>ทั้งหมด</button>
                <button className={activeButton === "waiting" ? `${hov} bg-[#4400A5] text-white` : hov} onClick={() => setActiveButton("waiting")}>รอผลออก</button>
                <button className={activeButton === "released" ? `${hov} bg-[#4400A5] text-white` : hov} onClick={() => setActiveButton("released")}>ผลออกแล้ว</button>
                <button className={activeButton === "cancelled" ? `${hov} bg-[#4400A5] text-white` : hov} onClick={() => setActiveButton("cancelled")}>ยกเลิกแล้ว</button>
          </div>
            <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
{/* ------------------------------------------------------------------------------ */}
    {(activeButton === "all" || activeButton === "waiting") && (
                <div className="border border-[#4400A5] rounded text-left p-5 max-md:mx-auto max-md:w-full max-md:grid max-md:justify-center max-lg:mx-auto max-lg:grid" onClick={() => setShowModal(true)}>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-10 h-10 rounded-full" />
                            <div className="grid">
                                <p className="text-[#4400A5] text-[1.5rem] font-bold ">หวยไทย</p>
                                <p>งวดที่ 14 ธันวาคม 2023</p>
                            </div>
                        </div>
                        <span className="bg-[#D8D8D8] rounded-2xl p-2">รอผลออก</span>
                    </div>
                    <hr className=" bg-[#4400A5] h-[1.5px] my-2" />
                    <div className="flex justify-between items-center">
                        <div className="grid items-center text-left">
                            <p className="font-bold text-[#7B7B7B]">เดิมพัน</p>
                            <p className="text-[#4400A5] text-[1.5rem]">฿ 10</p>
                        </div>
                        <div className="flex gap-5">
                        <div className="grid items-center text-left">
                            <p className="font-bold text-[#7B7B7B]">เดิมพัน</p>
                            <p className="text-[#4400A5] text-[1.5rem]">฿ 0</p>
                        </div>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#4400A5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-[#FF8329] rounded p-1 hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                        </svg>
                        </button>
                        </div>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center">
                        <p>Do90wjnbposc</p>
                        <div className="flex gap-1">
                            <p>28/12/66</p>
                            <p>22.35.00</p>
                        </div>
                    </div>
                </div>
    )}
{/* ------------------------------------------------------------------------------ */}
            
{/* ------------------------------------------------------------------------------ */}
            </div>
            {activeButton === "released" && (
              <div className="border border-[#4400A5] mt-[2rem] rounded w-full grid text-center" >
                {/* Content for released */}
                <span className="bg-[#D8D8D8] w-full p-2">ไม่มีข้อมูล</span>
              </div>
            )}
            {activeButton === "cancelled" && (
              <div className="border border-[#4400A5] mt-[2rem] rounded w-full grid text-center" >
                {/* Content for cancelled */}
                <span className="bg-[#D8D8D8] w-full p-2">ไม่มีข้อมูล</span>
              </div>
            )}
        </div>
       
    </section>
    <Footer/>
    </>
    )
}
export default Listpoy