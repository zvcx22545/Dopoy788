import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";
import { IoIosBackspace } from "react-icons/io";

function Listpoy(){
    return(
    <section>
        <Navbar />
      <div className="flex flex-col p-5">
        <div className="divider divider-start text-4xl pb-8">
          <IoIosBackspace />
          ย้อนกลับ
        </div>
        </div>
        <div className="grid justify-center text-center mb-[7rem]">
            <h1 className="text-[#4400A5] text-[2rem] font-bold mb-14">โพยหวย</h1>
            <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-lg:mx-auto max-md:grid-cols-2">
                <div className="border border-[#4400A5] h-[110px] w-[100%] rounded text-left p-5">
                    <p>ยกแทงวันนี้</p>
                    <h1>THB. 10</h1>
                </div>
                <div className="border border-[#4400A5] h-[110px] w-[100%] rounded text-left p-5">
                    <p>โพยวันนี้</p>
                    <h1>1</h1>
                </div>
                <div className="border border-[#4400A5] h-[110px] w-[100%] rounded text-left p-5">
                    <p>ออกแล้ว</p>
                    <h1>0</h1>
                </div>
                <div className="border border-[#4400A5] h-[110px] w-[100%] rounded text-left p-5">
                    <p>รอผลออก</p>
                    <h1>1</h1>
                </div>
            </div>
            <div className="grid grid-cols-4 my-14 gap-5 mr-auto max-lg:mx-auto max-md:grid-cols-2">
                <button className="border border-[#FF8329] font-bold text-[#4400A5] rounded w-[150px] h-[55px] hover:bg-[#4400A5] hover:text-white hover:border-none">ทั้งหมด</button>
                <button className="border border-[#FF8329] font-bold text-[#4400A5] rounded w-[150px] h-[55px] hover:bg-[#4400A5] hover:text-white hover:border-none">รอผลออก</button>
                <button className="border border-[#FF8329] font-bold text-[#4400A5] rounded w-[150px] h-[55px] hover:bg-[#4400A5] hover:text-white hover:border-none">ผลออกแล้ว</button>
                <button className="border border-[#FF8329] font-bold text-[#4400A5] rounded w-[150px] h-[55px] hover:bg-[#4400A5] hover:text-white hover:border-none">ยกเลิกแล้ว</button>
            </div>
            <div className="border border-[#4400A5] h-[110px] w-[288px] rounded text-left p-5 max-md:mx-auto">

            </div>
            
        </div>
       <Footer/>
    </section>
    )
}
export default Listpoy