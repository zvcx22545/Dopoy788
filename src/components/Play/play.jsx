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
import Swal from "sweetalert2";

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [numberOfDigits, setNumberOfDigits] = useState(4);
  const [completedNumbers, setCompletedNumbers] = useState([]);
  const [activeHuy19, setActiveHuy19] = useState(false);
  const [isReverseChecked, setIsReverseChecked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(10); // เพิ่มตัวแปร price และตั้งค่าเริ่มต้นเป็น 10
  const totalPrices = completedNumbers.reduce((accumulator, currentNumberSet) => {
    return accumulator + price;
  }, 0);

  const addCompletedNumbers = (newNumbers) => {
    if (isReverseChecked) {
      const reversedNumbers = reverseNumbers(newNumbers);
      setCompletedNumbers([...completedNumbers, ...reversedNumbers]);
    } else {
      setCompletedNumbers([...completedNumbers, newNumbers]);
    }
  };

  const addCompletedNumber = (number) => {
    setCompletedNumbers((prevNumbers) => [...prevNumbers, number]);
  };

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
    setQuantity(newPrice);
  };

  const handleHuy19 = (buttonName, newNumberOfDigits) => {
    // Remove "วิ่งบน" and "วิ่งล่าง" from activeButtons if any Huy19 button is clicked
    if (["19 ประตู", "รูดหน้า", "รูดหลัง"].includes(buttonName)) {
      setActiveButtons(activeButtons.filter(btn => btn !== "วิ่งบน" && btn !== "วิ่งล่าง"));
        setNumberOfDigits(newNumberOfDigits);
    }
  
    if (activeHuy19 === buttonName) {
      setActiveHuy19(false);
      setNumberOfDigits(2); // Default value when toggling off
    } else {
      setActiveHuy19(buttonName);
      setNumberOfDigits(newNumberOfDigits);
    }
  };
  // Inside the component function Play

  const handleIncrement = () => {
    // เพิ่มค่า price ที่ละ 1
    setPrice(prevPrice => prevPrice + 1);
  };
  
  const handleDecrement = () => {
    // ลดค่า price ที่ละ 1 หากค่า price ไม่น้อยกว่า 1
    if (price > 1) {
      setPrice(prevPrice => prevPrice - 1);
    }
  };
  //Delete All the value in betting

  const DeleteAll = () => {
    Swal.fire({
      title: "ยืนยันลบรายการแทงทั้งหมดหรือไม่?",
      showCancelButton: true,
      confirmButtonText: "ใช่",
      cancelButtonText: "ยกเลิก",
      icon: "warning",
      customClass: {
        icon: "swal-icon-red",
        confirmButton: "swal-confirm-button-red",
        cancelButton: "swal-cancel",
        title: "Title-delete",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setCompletedNumbers([]); // Clear the completedNumbers array
        Swal.fire("ลบรายการแทงสำเร็จ", "", "success");
      }
    });
  };

  // Delete list in รายการแทง

  const handleDelete = (index) => {
    // Create a copy of the completedNumbers array
    const updatedNumbers = [...completedNumbers];
    // Remove the item at the specified index
    updatedNumbers.splice(index, 1);
    // Update the state with the new array
    setCompletedNumbers(updatedNumbers);
  };

  //   add active class for tab

  const [activeButton, setActiveButton] = useState("เลือกกดเอง");

  const [activeButtons, setActiveButtons] = useState(["สี่ตัวบน"]);

  const active = (buttonName, newNumberOfDigits) => {
    if (activeButtons.length === 1 && activeButtons[0] === buttonName) {
      // The button is already the only active button, do nothing
      return;
    }
  
    // If the button is already active, deactivate it
    if (activeButtons.includes(buttonName)) {
      setActiveButtons(activeButtons.filter(btn => btn !== buttonName));
    } else {
      // If the button is not one of the special Huy19 buttons, deactivate them
      if (!["19 ประตู", "รูดหน้า", "รูดหลัง"].includes(buttonName)) {
        setActiveHuy19(false);
      }
  
      // If the number of digits is changing, activate only the clicked button
      if (newNumberOfDigits !== numberOfDigits) {
        setActiveButtons([buttonName]);
        setNumberOfDigits(newNumberOfDigits);
      } else {
        // Toggle the active state of the clicked button
        setActiveButtons([...activeButtons, buttonName]);
      }
    }
  
    // If "วิ่งบน" or "วิ่งล่าง" is clicked, deactivate "2 ตัวบน" and "2 ตัวล่าง"
    if (buttonName === "วิ่งบน" || buttonName === "วิ่งล่าง") {
      // If the clicked button is "วิ่งบน" or "วิ่งล่าง"
      // Check if "สองตัวบน" or "สองตัวล่าง" is active, if yes, don't remove it
      if (activeButtons.includes("สองตัวบน") || activeButtons.includes("สองตัวล่าง")) {
        setActiveButtons([buttonName]); // Set only the clicked button as active
      } else {
        // Remove "สองตัวบน" and "สองตัวล่าง" before adding "วิ่งบน" or "วิ่งล่าง"
        setActiveButtons(activeButtons.filter(btn => btn !== "สองตัวบน" && btn !== "สองตัวล่าง"));
        setActiveButtons([buttonName]); // Set the clicked button as active
      }
      setNumberOfDigits(newNumberOfDigits); // Set the number of digits
      setIsReverseChecked(false); // Uncheck reverse checkbox
      setActiveHuy19(false); // Set reverse checkbox to unchecked
    }
  };

  const handleCheckboxChange = () => {
    setIsReverseChecked(!isReverseChecked); // Toggle the value
  };

  const reverseNumbers = (number) => {
    const strNumber = number.toString();
    const permutations = [];
    generatePermutations(strNumber, "", permutations);
    return permutations;
  };

  const generatePermutations = (strNumber, currentPerm, permutations) => {
    if (strNumber.length === 0) {
      permutations.push(currentPerm);
    } else {
      const used = new Set();
      for (let i = 0; i < strNumber.length; i++) {
        if (!used.has(strNumber[i])) {
          used.add(strNumber[i]);
          const remainingDigits =
            strNumber.slice(0, i) + strNumber.slice(i + 1);
          generatePermutations(
            remainingDigits,
            currentPerm + strNumber[i],
            permutations
          );
        }
      }
    }
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
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <p>ใส่ราคา</p>
                <p className="bg-[#4400A5] p-1 text-white rounded">บันทึกโพย</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 duration-300 ease-in-out transition delay-150 hover:rotate-180" onClick={() => setShowModal(false)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
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
                        <p className="border border-[#4400A5] px-1">{price}</p>
                      </td>
                      <td>
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index)}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between gap-5 mt-5">
              <button className="pricePoy" onClick={() => handlePriceChange(5)}>5</button>
              <button className="pricePoy" onClick={() => handlePriceChange(10)}>10</button>
              <button className="pricePoy" onClick={() => handlePriceChange(20)}>20</button>
              <button className="pricePoy" onClick={() => handlePriceChange(50)}>50</button>
              <button className="pricePoy" onClick={() => handlePriceChange(100)}>100</button>
              <button className="pricePoy" onClick={() => handlePriceChange(500)}>500</button>
            </div>
            <div className="mt-5">
              <div className="flex justify-between items-center gap-5">
                <p>จำนวนเงิน</p>
                <div className="w-[50%] flex justify-end items-center gap-5">
                <button className="w-[35px] h-[35px] bg-[#FF2929] rounded" onClick={() => handleDecrement()}></button>
                <input
                  readOnly
                  type="number"
                  value={completedNumbers.length === 0 ? 0 : price}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-[45%] border border-[#4400A5] rounded px-1 text-center bg-white h-[35px]"
                />
                <button className="w-[35px] h-[35px] bg-[#00871E] rounded" onClick={() => handleIncrement()}></button>

                </div>
              </div>
              <div className="grid grid-cols-2 justify-between gap-3">
                <p>เงินคงหลือ (บาท)</p>
                <p className="text-right">0</p>
                <p>ยอดรวม (บาท)</p>
                <p className="text-right">{totalPrices}</p>
                <button
                  className="rounded text-black bg-[#EBA1A1] border border-[#EBA1A1] hover:text-[#EBA1A1] hover:bg-white p-1"
                  onClick={DeleteAll}
                >
                  ลบทั้งหมด
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
        <div className="row-span-3 w-full px-3 max-lg:hidden">
          <div className="flex justify-center items-center font-bold text-white text-[1.25rem] h-[60px] w-full bg-[#FF8329] rounded-lg mb-6">
            <h1>ดึงโพย</h1>
          </div>
          <div className="list w-full rounded-lg text-center p-2">
            <div className="container-bet flex justify-between item-center relative">
              <h1 className="betting absolute left-3"> รายการแทง</h1>
              <div className="rounded-full bg-[#4400A5] text-white px-[12px] py-[3px] right-3 absolute">
                {completedNumbers.length} รายการ
              </div>
            </div>
            <hr className="my-10" />
            <div className="list-menuorder py-2">
              {completedNumbers.map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index)}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}
            </div>

            <div className="menu-btn grid gap-2">
              <button
                className={`custom ${ completedNumbers.length === 0 ? "disabled" : "" }`} onClick={() => {if (completedNumbers.length > 0) { setShowModal(true); }}}
                disabled={completedNumbers.length === 0}
                style={{ opacity: completedNumbers.length === 0 ? 0.3 : 1 }} >
                ใส่ราคา/ส่งโพย
              </button>
              <button
                className="delete"
                onClick={() => DeleteAll(completedNumbers)}
              >
                ลบทั้งหมด
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="playbtn">
            <div className="grid gap-4  grid-cols-3">
              <button
                className={`btn ${
                  activeButton === "เลือกกดเอง" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("เลือกกดเอง")}
              >
                <BiGridAlt /> เลือกกดเอง
              </button>

              <button
                className={`btn ${
                  activeButton === "เลือกแผงเลข" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("เลือกแผงเลข")}
              >
                <BiGridAlt /> เลือกแผงเลข
              </button>
              <button
                className={`btn ${
                  activeButton === "เลือกแบบเลขวิน" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("เลือกแบบเลขวิน")}
              >
                <BiGridAlt /> เลือกแบบเลขวิน
              </button>
            </div>
          </div>

          <div
            className={`container-putnumber ${
              activeButton === "เลือกกดเอง" ? "" : "hidden"
            } ${
              activeButton === "เลือกกดเอง"
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
                  <div className="grid gap-4 grid-cols-3">
                    <button
                      className={`btn ${
                        activeButtons.includes("สี่ตัวบน") ? "active" : ""
                      }`}
                      onClick={() => active("สี่ตัวบน", 4)}
                    >
                      <BiGridAlt /> สี่ตัวบน{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${
                        activeButtons.includes("สี่ตัวโต๊ด") ? "active" : ""
                      }`}
                      onClick={() => active("สี่ตัวโต๊ด", 4)}
                    >
                      <BiGridAlt /> สี่ตัวโต๊ด{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${
                        activeButtons.includes("สามตัวบน") ? "active" : ""
                      }`}
                      onClick={() => active("สามตัวบน", 3)}
                    >
                      <BiGridAlt /> สามตัวบน{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${
                        activeButtons.includes("สามตัวโต๊ด") ? "active" : ""
                      }`}
                      onClick={() => active("สามตัวโต๊ด", 3)}
                    >
                      <BiGridAlt /> สามตัวโต๊ด{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${
                        activeButtons.includes("สามตัวล่าง") ? "active" : ""
                      }`}
                      onClick={() => active("สามตัวล่าง", 3)}
                    >
                      <BiGridAlt /> สามตัวล่าง{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${
                        activeButtons.includes("สองตัวบน") ? "active" : ""
                      }`}
                      onClick={() => active("สองตัวบน", 2)}
                    >
                      <BiGridAlt /> สองตัวบน{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>
                    <button
                      className={`btn ${
                        activeButtons.includes("สองตัวล่าง") ? "active" : ""
                      }`}
                      onClick={() => active("สองตัวล่าง", 2)}
                    >
                      <BiGridAlt /> สองตัวล่าง{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>
                    <button
                      className={`btn ${
                        activeButtons.includes("วิ่งบน") ? "active" : ""
                      }`}
                      onClick={() => active("วิ่งบน", 1)}
                    >
                      <BiGridAlt /> วิ่งบน{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>
                    <button
                      className={`btn ${
                        activeButtons.includes("วิ่งล่าง") ? "active" : ""
                      }`}
                      onClick={() => active("วิ่งล่าง", 1)}
                    >
                      <BiGridAlt /> วิ่งล่าง{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 p-5 col-span-2">
                  <div className="gap-4 w-full flex justify-between">
                    <div className="right-container w-[10.45%]">
                      <div className="divider divider-end text-xl flex-shrink-0">
                        กดเลข
                      </div>
                    </div>

                    <div
                      className={`left-content flex flex-col justify-center items-center ${
                        activeButtons.includes("วิ่งบน") ||
                         activeButtons.includes("วิ่งล่าง") ||
                           activeHuy19
                          ? "hidden"
                          : ""
                      }`}
                    >
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          checked={isReverseChecked}
                          onChange={handleCheckboxChange}
                        />
                        <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all delay-100 dark:border-gray-600 peer-checked:bg-[#4400A5]"></div>
                        <div className="text-[#4400A5] ms-3 text-[18.75px] font-medium dark:text-gray-300">
                          กลับเลข
                        </div>
                      </label>
                    </div>
                   
                  </div>
                  <div className={`btn-con flex justify-center items-center gap-[8px]
                  ${
                    activeButtons.includes("สองตัวล่าง") || activeButtons.includes("สองตัวบน") ? "":"hidden"
                  }`}>

                      <button className={`btn ${activeHuy19 === "19 ประตู" ? "active" : ""}`} onClick={() => handleHuy19("19 ประตู",1)}>19 ประตู</button>
                      <button className={`btn ${activeHuy19 === "รูดหน้า" ? "active" : ""}`} onClick={() => handleHuy19("รูดหน้า",1)}>รูดหน้า</button>
                      <button className={`btn ${activeHuy19 === "รูดหลัง" ? "active" : ""}`} onClick={() => handleHuy19("รูดหลัง",1)}>รูดหลัง</button>
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
          <div
            className={`container-putnumber ${
              activeButton !== "เลือกแผงเลข" ? "hidden" : ""
            } ${
              activeButton === "เลือกแผงเลข"
                ? "animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-linear"
                : ""
            }`}
          >
            <Title2 addCompletedNumber={addCompletedNumber} />
          </div>

          <div
            className={`container-putnumber ${
              activeButton !== "เลือกแบบเลขวิน" ? "hidden" : ""
            } ${
              activeButton === "เลือกแบบเลขวิน"
                ? "animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-linear"
                : ""
            }`}
          >
            <Title3 />
          </div>
        </div>

        {/* <div className="col-span-2 ...">
          <NumpadLotto addCompletedNumbers={addCompletedNumbers} />
        </div> */}
        <div className="list-responsive mt-auto">
          <div className="container-bet flex flex-1 gap-2 item-center justify-center">
            <h1 className="betting">รายการแทง</h1>
            <div className="rounded-full bg-[#4400A5] text-white px-[12px] py-[3px] mr-auto">
              {completedNumbers.length}
            </div>
          </div>
          <button
            className={`list-btn ${
              completedNumbers.length === 0 ? "disabled" : ""
            }`}
            onClick={() => {
              if (completedNumbers.length > 0) {
                setShowModal(true);
              }
            }}
            disabled={completedNumbers.length === 0}
            style={{ opacity: completedNumbers.length === 0 ? 0.3 : 1 }}
          >
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
