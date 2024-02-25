import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import CardBlog from "./CardBlog"

function Blog(){
    return(
        <section>
            <Navbar />
            <div className="flex justify-center py-5 px-14">
                <div className="grid grid-cols-3 gap-20 max-lg:grid-cols-2 max-md:grid-cols-1">
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                    <CardBlog/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}
export default Blog