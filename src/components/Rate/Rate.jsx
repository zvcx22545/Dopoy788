import { Link } from "react-router-dom";
import { IoIosBackspace } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Rate.css";

// icon
const Lefticon = (
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
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

function Rate() {
  const head = "flex items-center text-[1rem] font-[500] px-3 pt-3";
  const blockTable =
    "flex flex-col pb-2 shadow-xl rounded-lg border border-[#4400A5]";

  return (
    <>
      <section style={{ minHeight: "100vh", position: "relative" }}>
        <Navbar />
        <div className="flex flex-col p-5">
            <div className="divider divider-start text-[#4400A5] md:hidden">
        <Link to="/Home" className="flex justify-center items-center gap-1">
          <div className="text-2x">{Lefticon}</div>
          <div className="text-xl"> ย้อนกลับ</div>   
          </Link>
        </div>
            </div>
        <div className="pl-5 text-[1.5rem] font-[500] text-[#4400A5]">
          <h1>อัตราจ่ายหวย</h1>
        </div>
        <div className="grid grid-cols-4 gap-5 p-5 max-lg:grid-cols-2  max-md:grid-cols-1">
          <div className={blockTable}>
            <p className={head}>หวยไทย</p>
            <table className="Rate">
              <thead>
                <th>ประเภท</th>
                <th>ราคา</th>
                <th>อัตราจ่าย</th>
              </thead>
              <tbody>
                <tr>
                  <td>4 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>10,000</td>
                </tr>
                <tr>
                  <td>4 ตัวโต๊ด</td>
                  <td>บาทละ</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>3 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>3 ตัวโต๊ด</td>
                  <td>บาทละ</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>3 ตัวล่าง</td>
                  <td>บาทละ</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>2 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2 ตัวล่าง</td>
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

          <div className={blockTable}>
            <p className={head}>หวยฮานอย</p>
            <table className="Rate">
              <thead>
                <th>ประเภท</th>
                <th>ราคา</th>
                <th>อัตราจ่าย</th>
              </thead>
              <tbody>
                <tr>
                  <td>4 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>10,000</td>
                </tr>
                <tr>
                  <td>4 ตัวโต๊ด</td>
                  <td>บาทละ</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>3 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>3 ตัวโต๊ด</td>
                  <td>บาทละ</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>3 ตัวล่าง</td>
                  <td>บาทละ</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>2 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2 ตัวล่าง</td>
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

          <div className={blockTable}>
            <p className={head}>หวยลาว</p>
            <table className="Rate">
              <thead>
                <th>ประเภท</th>
                <th>ราคา</th>
                <th>อัตราจ่าย</th>
              </thead>
              <tbody>
                <tr>
                  <td>4 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>10,000</td>
                </tr>
                <tr>
                  <td>4 ตัวโต๊ด</td>
                  <td>บาทละ</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>3 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>3 ตัวโต๊ด</td>
                  <td>บาทละ</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>3 ตัวล่าง</td>
                  <td>บาทละ</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>2 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2 ตัวล่าง</td>
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

          <div className={blockTable}>
            <p className={head}>หวยหุ้นต่างประเทศ</p>
            <table className="Rate">
              <thead>
                <th>ประเภท</th>
                <th>ราคา</th>
                <th>อัตราจ่าย</th>
              </thead>
              <tbody>
                <tr>
                  <td>3 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>3 ตัวโต๊ด</td>
                  <td>บาทละ</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>3 ตัวล่าง</td>
                  <td>บาทละ</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>2 ตัวบน</td>
                  <td>บาทละ</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2 ตัวล่าง</td>
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
      <Footer />
    </>
  );
}
export default Rate;
