import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import CardBlog from "./CardBlog"
import { Link } from "react-router-dom"
// icon
const Lefticon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
);

function Blog(){
    return(
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
            <div className="flex justify-center mt-[1rem] py-5 px-14">
                <div className="grid grid-cols-3 gap-20 max-lg:grid-cols-2 max-md:grid-cols-1">
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                </div>
            </div>
            
        </section>
        <Footer/>
        </>
    )
}
export default Blog