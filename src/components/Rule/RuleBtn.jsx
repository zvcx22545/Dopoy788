import { Link } from "react-router-dom";
function Rule(){
    return(
        <section>
            <br />
            <div className="flex justify-center mt-5">
                <button className="text-white bg-[#FF8329] rounded h-[60px] w-[60%] border border-[#FF8329] hover:bg-white hover:text-[#FF8329]">
                    ดูโพย788 ดีกว่าเว็บอื่นอย่างไร 
                </button>
            </div>
                <div className="flex flex-row justify-center gap-4 mt-5 px-5">
                    <button className="text-white bg-[#4400A5] rounded h-[60px] w-[40%] border border-[#4400A5] hover:bg-white hover:text-[#4400A5] truncate">
                        อัตราการจ่าย 
                    </button>
                    <Link to="/Rules" className="inline-block w-[40%]"><button className="text-white bg-[#4400A5] rounded h-[60px] border border-[#4400A5] hover:bg-white hover:text-[#4400A5] w-[100%] truncate px-2 ">
                        กติกาและกฎต่างๆ 
                    </button></Link>
                   <button className="text-white bg-[#4400A5] border border-[#4400A5] rounded w-[40%] h-[60px]  hover:bg-white hover:text-[#4400A5] truncate">
                        โปรโมชั่นประจำเดือน
                    </button>
                </div>
        </section>
    );
}
export default Rule