import { Link } from "react-router-dom";
import "./component/Rules.css"

function Rule(){
    return(
        <section>
            <br />
            <div className="container grid grid-cols-3 gap-6 align-middle p-[2rem] mx-auto">
            <div className="img-con">
                <img className="img-banner" src="https://i.pinimg.com/originals/1f/3c/d8/1f3cd8a353017c3d0100fd0e40b1ae80.jpg" alt="" />
            </div>
            <div className="List-con">
            <div className="flex justify-center mt-5">
                <button className="text-white bg-[#FF8329] rounded h-[60px] w-[60%] border border-[#FF8329] hover:bg-white hover:text-[#FF8329]">
                    ดูโพย788 ดีกว่าเว็บอื่นอย่างไร 
                </button>
            </div>
                <div className="flex flex-row justify-center gap-4 mt-5 px-5">
                    <Link to="/Rate" className="inline-block w-[40%]"><button className="text-white bg-[#4400A5] rounded h-[60px] w-full border border-[#4400A5] hover:bg-white hover:text-[#4400A5] truncate">
                        อัตราการจ่าย 
                    </button></Link>
                    <Link to="/Rules" className="inline-block w-[40%]"><button className="text-white bg-[#4400A5] rounded h-[60px] border border-[#4400A5] hover:bg-white hover:text-[#4400A5] w-[100%] truncate px-2 ">
                        กติกาและกฎต่างๆ 
                    </button></Link>
                    <Link to="" className="inline-block w-[40%]"><button className="text-white bg-[#4400A5] rounded h-[60px] border border-[#4400A5] hover:bg-white hover:text-[#4400A5] w-[100%] truncate px-2 ">
                    โปรโมชั่นประจำเดือน 
                    </button></Link>
                </div>
                </div>
                <div className="img-con">
                    <img className="img-banner" src="https://i.postimg.cc/YCL9P0w0/2.jpg" alt="" />
                </div>
                </div>
        </section>
    );
}
export default Rule