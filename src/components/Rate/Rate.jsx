import { Link} from "react-router-dom";
import { IoIosBackspace } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Rate.css";

function Rate(){
    const head ="flex items-center text-[1rem] font-[500] px-3 pt-3"
    return(
        <>
        <section style={{ minHeight: "100vh", position:"relative"}}>
            <Navbar/>
            <div className="divider divider-start text-4xl py-8"><Link to="/" className="flex text-[#4400A5] justify-center items-center gap-1">
                <IoIosBackspace />
                    ย้อนกลับ
                </Link>
            </div>
            <div className="pl-5 text-[1.5rem] font-[500] text-[#4400A5]">
                <h1>อัตราจ่ายหวย</h1>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5 max-lg:grid-cols-2  max-md:grid-cols-1">
                
                <div className="flex flex-col shadow-lg rounded-lg border border-[#4400A5]">
                    <p className={head}>หวยไทย</p>
                    <table className="Rate">
                        <thead>
                            <th>ประเภท</th>
                            <th>ราคา</th>
                            <th>อัตราจ่าย</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>สี่ตัวบน</td>
                                <td>บาทละ</td>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <td>สี่ตัวโต๊ด</td>
                                <td>บาทละ</td>
                                <td>350</td>
                            </tr>
                            <tr>
                                <td>สามตัวบน</td>
                                <td>บาทละ</td>
                                <td>1,000</td>
                            </tr>
                            <tr>
                                <td>สามตัวโต๊ด</td>
                                <td>บาทละ</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>สามตัวล่าง</td>
                                <td>บาทละ</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <td>สองตัวบน</td>
                                <td>บาทละ</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>สองตัวล่าง</td>
                                <td>บาทละ</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>วิ่งบน</td>
                                <td>บาทละ</td>
                                <td>3.5</td>
                            </tr>
                            <tr>
                                <td>วิ่งล่าง</td>
                                <td>บาทละ</td>
                                <td>4.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="flex flex-col shadow-lg rounded border border-[#4400A5]">
                    <p className={head}>หวยฮานอย</p>
                    <table className="Rate">
                        <thead>
                            <th>ประเภท</th>
                            <th>ราคา</th>
                            <th>อัตราจ่าย</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>สี่ตัวบน</td>
                                <td>บาทละ</td>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <td>สี่ตัวโต๊ด</td>
                                <td>บาทละ</td>
                                <td>350</td>
                            </tr>
                            <tr>
                                <td>สามตัวบน</td>
                                <td>บาทละ</td>
                                <td>1,000</td>
                            </tr>
                            <tr>
                                <td>สามตัวโต๊ด</td>
                                <td>บาทละ</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>สามตัวล่าง</td>
                                <td>บาทละ</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>สองตัวบน</td>
                                <td>บาทละ</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>สองตัวล่าง</td>
                                <td>บาทละ</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>วิ่งบน</td>
                                <td>บาทละ</td>
                                <td>3.5</td>
                            </tr>
                            <tr>
                                <td>วิ่งล่าง</td>
                                <td>บาทละ</td>
                                <td>4.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="flex flex-col shadow-lg rounded border border-[#4400A5]">
                    <p className={head}>หวยลาว</p>
                    <table className="Rate">
                        <thead>
                            <th>ประเภท</th>
                            <th>ราคา</th>
                            <th>อัตราจ่าย</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>สี่ตัวบน</td>
                                <td>บาทละ</td>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <td>สี่ตัวโต๊ด</td>
                                <td>บาทละ</td>
                                <td>350</td>
                            </tr>
                            <tr>
                                <td>สามตัวบน</td>
                                <td>บาทละ</td>
                                <td>1,000</td>
                            </tr>
                            <tr>
                                <td>สามตัวโต๊ด</td>
                                <td>บาทละ</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>สามตัวล่าง</td>
                                <td>บาทละ</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>สองตัวบน</td>
                                <td>บาทละ</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>สองตัวล่าง</td>
                                <td>บาทละ</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>วิ่งบน</td>
                                <td>บาทละ</td>
                                <td>3.5</td>
                            </tr>
                            <tr>
                                <td>วิ่งล่าง</td>
                                <td>บาทละ</td>
                                <td>4.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="flex flex-col shadow-lg rounded border border-[#4400A5]">
                    <p className={head}>หวยหุ้นต่างประเทศ</p>
                    <table className="Rate">
                        <thead>
                            <th>ประเภท</th>
                            <th>ราคา</th>
                            <th>อัตราจ่าย</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>สามตัวบน</td>
                                <td>บาทละ</td>
                                <td>1,000</td>
                            </tr>
                            <tr>
                                <td>สามตัวโต๊ด</td>
                                <td>บาทละ</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>สามตัวล่าง</td>
                                <td>บาทละ</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <td>สองตัวบน</td>
                                <td>บาทละ</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>สองตัวล่าง</td>
                                <td>บาทละ</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>วิ่งบน</td>
                                <td>บาทละ</td>
                                <td>3.5</td>
                            </tr>
                            <tr>
                                <td>วิ่งล่าง</td>
                                <td>บาทละ</td>
                                <td>4.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
        <Footer/>
        </>
    )
}
export default Rate