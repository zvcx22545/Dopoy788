import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import CardBlog from "./CardBlog"

function Blog(){
    return(
        <>
        <section style={{ minHeight: "100vh", position:"relative"}}>
            <Navbar />
            <div className="flex justify-center mt-[2rem] py-5 px-14">
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