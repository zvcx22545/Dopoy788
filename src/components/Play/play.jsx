import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./play.css";
import Footer from "../Footer/Footer";
import { IoIosBackspace } from "react-icons/io";
import { BiGridAlt } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import NumpadLotto from "./NumpadLotto";
import Title2 from "../TitleMenu/Title2";
import Title3 from "../TitleMenu/Title3";

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [numberOfDigits, setNumberOfDigits] = useState(4);
  const [completedNumbers, setCompletedNumbers] = useState([]);
  const addCompletedNumbers = (newNumbers) => {
    setCompletedNumbers([...completedNumbers, newNumbers]);
  };

  //   add active class for tab

  const [activeButton, setActiveButton] = useState("เลือกกดเอง");

  const [activeHuy, setActiveHuy] = useState("สี่ตัวบน");
  const active = (buttonName, numberOfDigits) => {
    setActiveHuy(buttonName);
    setNumberOfDigits(numberOfDigits); // ส่งค่าตัวเลขไปกับฟังก์ชัน
  };

  const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName); // ให้ activeButton เป็นปุ่มที่ถูกคลิ
  };

  useEffect(() => {
    const countdownDate = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown(`${hours}:${minutes}:${seconds}`);
      if (distance < 0) {
        clearInterval(interval);
        setCountdown("EXPIRED");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <Navbar />
      <div className="flex flex-col p-5">
        <div className="divider divider-start text-4xl pb-8">
          <IoIosBackspace />
          ย้อนกลับ
        </div>
        <div className="footer px-10 py-4">
          <aside className="items-center grid-flow-col gap-4">
            <img
              src="https://placehold.co/50x50"
              alt="Vietnam flag"
              className="w-15 h-15 rounded-full"
            />
            <p className="text-[#4400A5] text-3xl">
              หวยไทย <br />
              <p className="text-[#000] text-xl">งวดวันที่ 14 ธันวาคม 2023</p>
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end bg-primary rounded-full drop-shadow-lg">
            <div className="grid grid-flow-col gap-4">
              <div className="stat text-center">
                <div className=" text-white text-xl min-w-48">
                  20วัน {countdown}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="mo2">
          <div className="modal-content">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p>ใส่ราคา</p>
                <p className="bg-[#4400A5] p-1 text-white rounded">บันทึกโพย</p>
              </div>
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>{" "}
              {/* Close Button */}
            </div>
            <div className="modalTable ">
              <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                <h1 className="w-full">สามตัวล่าง</h1>
                <h1 className="w-full">เรทจ่าย</h1>
                <h1 className="w-full">ราคา</h1>
                <h1 className="w-full">ลบ</h1>
              </div>
              <table>
                <tbody>
                  {completedNumbers.map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td>{numberSet}</td>
                      <td>50</td>
                      <td>
                        <p className="border border-[#4400A5] px-1">10</p>
                      </td>
                      <td>
                        <button className="text-[#FF2929]">
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between gap-5 mt-5">
              <button className="pricePoy">5</button>
              <button className="pricePoy">10</button>
              <button className="pricePoy">20</button>
              <button className="pricePoy">50</button>
              <button className="pricePoy">100</button>
              <button className="pricePoy">500</button>
            </div>
            <div className="mt-5">
              <div className="flex justify-between items-center gap-5">
                <p>จำนวนเงิน</p>
                <div className="w-[50%] flex justify-end items-center gap-5">
                  <button className="w-[35px] h-[35px] bg-[#FF2929] rounded"></button>
                  <input
                    type="number"
                    className="w-[45%] border border-[#4400A5] rounded px-1"
                  />
                  <button className="w-[35px] h-[35px] bg-[#00871E] rounded"></button>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-between gap-3">
                <p>เงินคงหลือ (บาท)</p>
                <p className="text-right">0</p>
                <p>ยอดรวม (บาท)</p>
                <p className="text-right">25</p>
                <button className="rounded text-black bg-[#EBA1A1] border border-[#EBA1A1] hover:text-[#EBA1A1] hover:bg-white p-1">
                  ยอดรวม (บาท)
                </button>
                <button className="rounded text-white bg-[#4400A5] border border-[#4400A5] hover:bg-white hover:text-[#4400A5]">
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid  grid-flow-col gap-4 p-5">
        <div className="row-span-3 w-full px-3 py-5 max-lg:hidden">
          <div className="flex justify-center items-center font-bold text-white text-[1.25rem] h-[60px] w-full bg-[#FF8329] rounded-lg mb-6">
            <h1>ดึงโพย</h1>
          </div>
          <div className="list w-full rounded-lg text-center p-2">
            <h1>รายการแทง</h1>
            <hr className="my-2" />
            <div className="list-menuorder py-2">
              {completedNumbers.map((numberSet, index) => (
                <h1 key={index}>{numberSet}</h1>
              ))}
            </div>
            <div className="menu-btn grid gap-2">
              <button className="custom" onClick={() => setShowModal(true)}>
                ใส่ราคา/ส่งโพย
              </button>
              <button className="delete">ลบทั้งหมด</button>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="playbtn">
            <div className="grid gap-4  grid-cols-3">
              <button
                className={`btn ${activeButton === "เลือกกดเอง" ? "active" : ""
                  }`}
                onClick={() => handleButtonClick("เลือกกดเอง")}
              >
                <BiGridAlt /> เลือกกดเอง
              </button>

              <button
                className={`btn ${activeButton === "เลือกแผงเลข" ? "active" : ""
                  }`}
                onClick={() => handleButtonClick("เลือกแผงเลข")}
              >
                <BiGridAlt /> เลือกแผงเลข
              </button>
              <button
                className={`btn ${activeButton === "เลือกแบบเลขวิน" ? "active" : ""
                  }`}
                onClick={() => handleButtonClick("เลือกแบบเลขวิน")}
              >
                <BiGridAlt /> เลือกแบบเลขวิน
              </button>
            </div>
          </div>

          <div className={`container-putnumber ${activeButton === "เลือกกดเอง" ? "" : "hidden"
              } ${activeButton === "เลือกกดเอง"
                ? "animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-linear"
                : ""
              }`}
          >
            {activeButton === "เลือกกดเอง" && (
              <section>
                <div className="gap-4 w-40">
                  <div className="divider divider-end text-xl">
                    เลือกประเภทการแทง
                  </div>
                </div>
                <div className="custom-container">
                  <div className="grid gap-4 p-5 grid-cols-3">

                  <button className={`btn ${activeHuy === "สี่ตัวบน" ? "active" : ""}`} onClick={() => active("สี่ตัวบน", 4)} > <BiGridAlt /> สี่ตัวบน
                  <div className="badge badge-primary">1,000</div>
                  </button>

                  <button className={`btn ${activeHuy === "สี่ตัวโต๊ด" ?"active" : ""}`} onClick={() => active("สี่ตัวโต๊ด", 4)} > <BiGridAlt /> สี่ตัวโต๊ด
                  <div className="badge badge-primary">1,000</div>
                  </button>

                  <button className={`btn ${activeHuy === "สามตัวบน" || activeHuy === "สามตัวโต๊ด" || activeHuy === "สามตัวล่าง" ? "active" : ""}`} onClick={() => active("สามตัวบน", 3)} > 
                  <BiGridAlt /> สามตัวบน <div className="badge badge-primary">1,000</div>
                  </button>

                  <button className={`btn ${activeHuy === "สามตัวบน" || activeHuy === "สามตัวโต๊ด" || activeHuy === "สามตัวล่าง" ? "active" : ""}`} onClick={() => active("สามตัวโต๊ด", 3)} > 
                  <BiGridAlt /> สามตัวโต๊ด <div className="badge badge-primary">1,000</div>
                  </button>

                  <button className={`btn ${activeHuy === "สามตัวบน" || activeHuy === "สามตัวโต๊ด" || activeHuy === "สามตัวล่าง" ? "active" : ""}`} onClick={() => active("สามตัวล่าง", 3)} > 
                  <BiGridAlt /> สามตัวล่าง <div className="badge badge-primary">1,000</div>
                  </button>

                    <button className={`btn ${activeHuy === "สองตัวบน" || activeHuy === "สองตัวล่าง" ? "active" : ""}`} onClick={() => active("สองตัวบน", 2)} > 
                    <BiGridAlt /> สองตัวบน <div className="badge badge-primary">1,000</div>
                  </button>
                  <button className={`btn ${activeHuy === "สองตัวบน" || activeHuy === "สองตัวล่าง" ? "active" : ""}`} onClick={() => active("สองตัวล่าง", 2)} > 
                    <BiGridAlt /> สองตัวล่าง <div className="badge badge-primary">1,000</div>
                  </button>
                  <button className={`btn ${ activeHuy === "วิ่งบน" ? "active" : ""}`} onClick={() => active("วิ่งบน", 1)} > 
                    <BiGridAlt /> วิ่งบน <div className="badge badge-primary">1,000</div>
                  </button>
                  <button className={`btn ${ activeHuy === "วิ่งล่าง" ? "active" : ""}`} onClick={() => active("วิ่งล่าง", 1)} > 
                    <BiGridAlt /> วิ่งล่าง <div className="badge badge-primary">1,000</div>
                  </button>
                  </div>
                </div>

                {/* <div className="gap-4 w-40">
              <div className="divider divider-end text-xl">กดเอง</div>
            </div> */}

                <div className="grid gap-4 p-5 col-span-2">
                  <div className="gap-4 w-40">
                    <div className="divider divider-end text-xl">กดเลข</div>
                  </div>
                  <div className="">
                    <NumpadLotto
                      addCompletedNumbers={addCompletedNumbers}
                      numberOfDigits={numberOfDigits}
                    />
                  </div>
                </div>
              </section>
            )}
          </div>
          <div className={`container-putnumber ${ activeButton !== "เลือกแผงเลข" ? "hidden" : "" } ${  activeButton === "เลือกแผงเลข" ? "animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-linear" : ""  }`}>
        <Title2/>
      </div>

      <div className={`container-putnumber ${ activeButton !== "เลือกแบบเลขวิน" ? "hidden" : "" } ${  activeButton === "เลือกแบบเลขวิน" ? "animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-linear" : ""  }`}>
        <Title3/>
      </div>
        </div>
       
        {/* <div className="col-span-2 ...">
          <NumpadLotto addCompletedNumbers={addCompletedNumbers} />
        </div> */}
        <div className="list-responsive mt-auto">
          <h1>รายการแทง</h1>
          <button className="list-btn" onClick={() => setShowModal(true)}>
            ใส่ราคา/ส่งโพย
          </button>
        </div>
      </div>
      {/* Modal */}
      {showModal && ( // แสดง modal เมื่อ showModal เป็น true
        <div className="modal">
          {" "}
          {/* Modal Container */}
          <div className="modal-content">
            {" "}
            {/* Modal Content */}
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>{" "}
            {/* Close Button */}
            <p>เนื้อหาของ Modal ที่นี่...</p> {/* เนื้อหาของ Modal */}
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
}

export default Play;
