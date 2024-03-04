import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoIosBackspace } from "react-icons/io";
import "./Invite.css"

function Invite(){
    return(
        <section>
            <Navbar/>
            <div className="flex flex-col p-5">
                <div className="divider divider-start text-4xl pb-8">
                <IoIosBackspace />
                ย้อนกลับ
                </div>
            </div>
            <div className="flex justify-center items-center gap-10 p-6 max-md:justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#4400A5" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-[#4400A5] rounded p-1 text-white hover:text-[#FF8329] max-md:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                </svg>  
                <p className="bg-[#4400A51F] rounded-lg w-[65%] max-md:w-auto max-md:px-5 h-[40px] flex justify-start items-center px-10">https://Doopoy.co.test</p>
                <button className="bg-[#4400A5] flex text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] px-2 py-[7px] rounded-lg justify-center items-center gap-2">
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
            <div className="flex gap-5 p-10 max-md:grid">

                <div className="grid gap-5 w-[60%] max-md:w-full">

                    <div className="grid items-center text-center border bg-[#E9E0F4] border-[#4400A5] rounded-lg p-5 shadow-md">
                        <p>จำนวนเงินที่เพื่อนเราแทงทั้งหมด</p>
                        <hr className=" bg-[#4400A5] h-[3px] my-4" />
                        <input type="number" className="px-5 my-3" name="withdraw" id="" value={0} />
                        <p className="text-left mb-2">หมายเหตุ : </p>
                        <button className="bg-[#4400A5] text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] flex justify-center items-center w-full py-1 rounded-lg" >ถอนเงิน</button>
                    </div>

                    <div className="grid items-center border border-[#4400A5] rounded-lg p-5 shadow-md">
                        <p>จำนวนเงินที่เพื่อนเราแทงทั้งหมด</p>
                        <hr className=" bg-[#4400A5] h-[1.5px] my-4" />
                        <p className="text-[1.5rem] font-bold text-[#4400A5]">฿ 0</p>
                        <p>รายได้สมาชิกของเพื่อนเราทั้งหมด (฿0)</p>
                    </div>
                
                    <div className="grid items-center border border-[#4400A5] rounded-lg p-5 shadow-md">
                        <p>รายได้ที่เราแนะนำเพื่อนทั้งหมด</p>
                        <hr className=" bg-[#4400A5] h-[1.5px] my-4" />
                        <p className="text-[1.5rem] font-bold text-[#4400A5]">฿ 0</p>
                        <p>รายได้สมาชิกของเพื่อนเราทั้งหมด (฿0)</p>
                    </div>

                </div>    
                
                <div className="w-full">
                    <div className="grid grid-cols-2 gap-5">

                    <div className="grid items-center border border-[#4400A5] rounded-lg p-5 shadow-md">
                        <div className="flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                            <span className="bg-[#FF8329] text-white p-2 rounded-lg max-md:p-1">รายละเอียด</span>
                        </div>
                        <p className="text-[1.5rem] font-bold text-[#4400A5]">10 %</p>
                        <p>รายได้สมาชิกของเพื่อนเราทั้งหมด (฿0)</p>
                    </div>

                    <div className="grid items-center border border-[#4400A5] rounded-lg p-5 shadow-md">
                        <div className="flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>

                            <span className="bg-[#FF8329] text-white p-2 rounded-lg max-md:p-1">รายละเอียด</span>
                        </div>

                        <p className="text-[1.5rem] font-bold text-[#4400A5]">10 %</p>
                        <p>ค่าคอมสมาชิกของเพื่อนเรา 10 ชั้น</p>
                    </div>

                    </div>
                    <div className="flex justify-end items-center my-5 gap-5">
                        <button className="bg-[#4400A5] text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] flex justify-center items-center w-[150px] py-1 rounded-lg ">
                            สมาชิกทั้งหมด
                        </button>

                        <button className="bg-[#FF8329] text-white border border-[#FF8329] hover:bg-white hover:text-[#FF8329] flex justify-center items-center w-[150px] py-1 rounded-lg ">
                            รายได้สมาชิก/รายวัน
                        </button>
                    </div>

                    <div className="DataTable">
                        <table className="TopupTable">
                            <thead>
                                <th scope="col">ชื่อ</th>
                                <th>จำนวนแทง(บาท)</th>
                                <th>ค่าคอมมิชั่น</th>
                                <th>สมัครเมื่อไหร่</th>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td scope="col" data-label="ชื่อ">1</td>
                                    <td data-label="จำนวนแทง(บาท)">2</td>
                                    <td data-label="ค่าคอมมิชั่น">3</td>
                                    <td data-label="สมัครเมื่อไหร่">4</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

           
            

            <Footer/>
        </section>
    )
}
export default Invite