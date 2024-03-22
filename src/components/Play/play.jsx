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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [numberOfDigits, setNumberOfDigits] = useState(4);
  const [completedNumbers, setCompletedNumbers] = useState({
    สี่ตัวบน: [],
    สี่ตัวโต๊ด: [],
    สามตัวบน: [],
    สามตัวโต๊ด: [],
    สามตัวล่าง: [],
    สองตัวบน: [],
    สองตัวล่าง: [],
    วิ่งบน: [],
    วิ่งล่าง: [],
  });
  const [activeHuy19, setActiveHuy19] = useState(false);
  const [isReverseChecked, setIsReverseChecked] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(10); // เพิ่มตัวแปร price และตั้งค่าเริ่มต้นเป็น 10
  const [Openhuay19, setOpenhuay19] = useState(false);
  const totalPrices = Object.values(completedNumbers).reduce(
    (accumulator, numbersArray) => {
      // For each numbersArray, add the total price for that set
      const totalPriceForSet = numbersArray.reduce(
        (subAccumulator) => subAccumulator + price,
        0
      );
      return accumulator + totalPriceForSet; // Accumulate total prices for all sets
    },
    0
  );

  const [Huayroodnar, SetHuayroodnar] = useState(false);
  const [HuayroodbackS, SetHuayroodback] = useState(false);

  const [displayText, setDisplayText] = useState("");
  const [chosenImage, setChosenImage] = useState("");

  useEffect(() => {
    const storedDisplayText = localStorage.getItem("displayText");
    if (storedDisplayText) {
      setDisplayText(storedDisplayText);
      // Optionally, clear the stored value after retrieving it
      localStorage.removeItem("displayText");
    }

    const storedChosenImage = localStorage.getItem("chosenImage");
    if (storedChosenImage) {
      setChosenImage(storedChosenImage);
      // Optionally, clear the stored value after retrieving it
      localStorage.removeItem("chosenImage");
    }
  }, []);

  // check auth token from user
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.user.userToken);
  useEffect(() => {
    // Check if the user is logged in
    if (!userToken) {
      navigate("/"); // Redirect to login page if not logged in
    }
  }, [userToken, navigate]);
  useEffect(() => {
    // console.log(completedNumbers);
  }, [completedNumbers]);

  const addCompletedNumbers = (digit, activeButtons, Enter) => {
    if (!activeButtons) {
      console.error("activeButtons is undefined or null");
      return;
    }
    const newNumbers = { ...completedNumbers };
    if (Enter === true) {
      if (activeButton === 0) {
        // ถ้า activeButton เท่ากับ 0 ให้เพิ่ม digit ลงใน Obj สี่ตัวบน[]
        newNumbers['สี่ตัวบน'].push(digit);
      } // Copy the completedNumbers object

      activeButtons.forEach((activeButton) => {
        // Loop over each activeButton
        const numbersForActiveButton = newNumbers[activeButton] || []; // Get the array of completed numbers for the active button
        console.log(activeButton, numbersForActiveButton);

        if (activeButton === "สี่ตัวบน" && isReverseChecked) {
          console.log(activeButton);
          // Generate all unique permutations of the digit
          const permutations = reverseNumbers(digit);

          // Push these permutations into the numbersForActiveButton array
          numbersForActiveButton.push(...permutations);

          // Debug: Log the updated numbersForActiveButton
          console.log(
            `${activeButton} after adding permutations:`,
            numbersForActiveButton
          );
        } else if (activeButton === "สี่ตัวบน") {
          console.log(digit);
          // If the active button is 'สี่ตัวบน', add the digit to the 'สี่ตัวบน' array
          numbersForActiveButton.push(digit); // Assuming digit is a single value or object
          // Debug: Log the updated numbersForActiveButton
          console.log(
            `${activeButton} after adding digit:`,
            numbersForActiveButton
          );
        }
        if (activeButton === "สี่ตัวโต๊ด" && isReverseChecked) {
          console.log(activeButton);
          const permutations = reverseNumbers(digit);
          numbersForActiveButton.push(...permutations);
        } else if (activeButton === "สี่ตัวโต๊ด") {
          // Your existing condition for "สี่ตัวโต๊ด"
          numbersForActiveButton.push(digit);
        }
        if (activeButton === "สามตัวบน" && isReverseChecked) {
          console.log(activeButton);
          // Generate all unique permutations of the digit
          const permutations = reverseNumbers(digit);

          // Push these permutations into the numbersForActiveButton array
          numbersForActiveButton.push(...permutations);

          // Debug: Log the updated numbersForActiveButton
          console.log(
            `${activeButton} after adding permutations:`,
            numbersForActiveButton
          );
        } else if (activeButton === "สามตัวบน") {
          // Your existing condition for "สี่ตัวโต๊ด"
          numbersForActiveButton.push(digit);
        } else if (activeButton === "สามตัวล่าง") {
          // Your existing condition for "สามตัวล่าง"
          if (isReverseChecked) {
            const permutations = reverseNumbers(digit);
            // Push these permutations into the numbersForActiveButton array
            numbersForActiveButton.push(...permutations);

            // Debug: Log the updated numbersForActiveButton
            console.log(
              `${activeButton} after adding permutations:`,
              numbersForActiveButton
            );
          } else {
            numbersForActiveButton.push(digit);
          }
        } else if (activeButton === "สามตัวโต๊ด") {
          // Your existing condition for "สามตัวโต๊ด"
          if (isReverseChecked) {
            const permutations = reverseNumbers(digit);
            numbersForActiveButton.push(...permutations);
          } else {
            numbersForActiveButton.push(digit);
          }
        } else if (activeButton === "สองตัวบน") {
          // Your existing condition for "สองตัวล่าง"
          if (isReverseChecked) {
            const permutations = reverseNumbers(digit);
            numbersForActiveButton.push(...permutations);
          } else if (Openhuay19 && activeHuy19 === "19 ประตู") {
            // Your existing condition for handling 19 ประตู
            console.log(activeHuy19);
            const Huay19doors = handleHuay19doors(digit);
            numbersForActiveButton.push(...Huay19doors);
          } else if (Huayroodnar && activeHuy19 === "รูดหน้า") {
            // Your existing condition for handling รูดหน้า
            const Huayroodnars = Huaysroodnar(digit);
            numbersForActiveButton.push(...Huayroodnars);
          } else if (HuayroodbackS && activeHuy19 === "รูดหลัง") {
            // Your existing condition for handling รูดหลัง
            const allNumbers = HuayroodBacks(digit);
            numbersForActiveButton.push(...allNumbers);
          } else {
            numbersForActiveButton.push(digit);
          }
        } else if (activeButton === "สองตัวล่าง") {
          // Your existing condition for "สองตัวล่าง"
          if (isReverseChecked) {
            const permutations = reverseNumbers(digit);
            numbersForActiveButton.push(...permutations);
          } else if (Openhuay19 && activeHuy19 === "19 ประตู") {
            // Your existing condition for handling 19 ประตู
            isReverseChecked === false;
            const Huay19doors = handleHuay19doors(digit);
            numbersForActiveButton.push(...Huay19doors);
          } else if (Huayroodnar && activeHuy19 === "รูดหน้า") {
            // Your existing condition for handling รูดหน้า
            const Huayroodnars = Huaysroodnar(digit);
            numbersForActiveButton.push(...Huayroodnars);
          } else if (HuayroodbackS && activeHuy19 === "รูดหลัง") {
            // Your existing condition for handling รูดหลัง
            const allNumbers = HuayroodBacks(digit);
            numbersForActiveButton.push(...allNumbers);
          } else {
            numbersForActiveButton.push(digit);
          }
        } else if (activeButton === "วิ่งบน") {
          // Your existing condition for "สองตัวล่าง"
          numbersForActiveButton.push(digit);
        } else if (activeButton === "วิ่งล่าง") {
          // Your existing condition for "สองตัวล่าง"
          numbersForActiveButton.push(digit);
        }

        newNumbers[activeButton] = numbersForActiveButton; // Update the completed numbers for the active button
      });

      setCompletedNumbers(newNumbers); // Update the state with the new completed numbers
    }
    else {
      console.log("กรุณากดปุ่ม EN")
    }
  };

  const handleEnButtonClick = (value) => {
    console.log("EN button clicked:", value);
};

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
    setQuantity(newPrice);
  };

  const handleHuy19 = (buttonName, newNumberOfDigits) => {
    // Remove "วิ่งบน" and "วิ่งล่าง" from activeButtons if any Huy19 button is clicked
    if (["19 ประตู", "รูดหน้า", "รูดหลัง"].includes(buttonName)) {
      setActiveButtons(
        activeButtons.filter((btn) => btn !== "วิ่งบน" && btn !== "วิ่งล่าง")
      );
      setNumberOfDigits(newNumberOfDigits);
    }

    if (activeHuy19 === buttonName) {
      setActiveHuy19(false);
      setNumberOfDigits(2); // Default value when toggling off
      setOpenhuay19(false);
    } else {
      setActiveHuy19(buttonName);
      setNumberOfDigits(newNumberOfDigits);
    }
    if (buttonName === "19 ประตู") {
      setOpenhuay19(true);
      setIsReverseChecked(false);
    }
    if (buttonName === "รูดหน้า") {
      SetHuayroodnar(true);
      setIsReverseChecked(false);
    }
    if (buttonName === "รูดหลัง") {
      SetHuayroodback(true);
      setIsReverseChecked(false);
    }
  };

  const addNumberFromButtonClicked = (digit, activeButton) => {
    if (activeButton === undefined || activeButton === null) {
      console.error("activeButton is undefined or null");
      return;
    }

    const newNumbers = { ...completedNumbers };
    if (activeButton === 0) {
      newNumbers["สี่ตัวบน"].push(digit);
    }
    else if (activeButton === 1) {
      newNumbers["สามตัวโต๊ด"].push(digit);
    }
    else if (activeButton === 2) {
      newNumbers["สามตัวล่าง"].push(digit);
    }
    else if (activeButton === 3) {
      newNumbers["สองตัวบน"].push(digit);
    }
    else if (activeButton === 4) {
      newNumbers["สองตัวล่าง"].push(digit);
    }
    else if (activeButton === 5) {
      newNumbers["วิ่งบน"].push(digit);
    }
    else if (activeButton === 6) {
      newNumbers["วิ่งล่าง"].push(digit);
    }
    setCompletedNumbers(newNumbers);


    // const handleOpenHuay19 = () => {
    //   setOpenhuay19(!Openhuay19); // Toggle the value
  };

  function Huaysroodnar(number) {
    const multiples = [];
    for (let i = 0; i < 10; i++) {
      const multiple = number * 10 + i;
      if (multiple <= 99) {
        multiples.push(multiple.toString().padStart(2, "0"));
      }
    }
    return multiples;
  }
  function HuayroodBacks(digit) {
    if (digit < 0 || digit > 9) {
      console.error("Please enter a digit between 0 and 9.");
      return [];
    }

    let numbers = [];
    const parint = parseInt(digit)
    for (let i = 0; i < 10; i++) { // Ensure loop starts from 0
      let number = (i * 10) + parint; // Multiply loop index by 10, then add the input digit
      numbers.push(number.toString().padStart(2, '0')); // Convert to string, ensuring two digits
    }
    return numbers;
  }


  console.log();

  const handleHuay19doors = (digit) => {
    let newNumbers = [];

    // Generate numbers from 0 to 99
    for (let i = 0; i <= 99; i++) {
      let numberStr = i.toString().padStart(2, "0");
      // Check if the number contains the specified digit
      if (numberStr.includes(digit.toString())) {
        newNumbers.push(numberStr);
      }
    }

    return newNumbers.slice(0, 19); // Adjust this line if you have a different logic for selecting 19 numbers
  };

  const handleIncrement = () => {
    // เพิ่มค่า price ที่ละ 1
    setPrice((prevPrice) => prevPrice + 1);
  };

  const handleDecrement = () => {
    // ลดค่า price ที่ละ 1 หากค่า price ไม่น้อยกว่า 1
    if (price > 1) {
      setPrice((prevPrice) => prevPrice - 1);
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
        // Reset the completedNumbers object to its initial state
        setCompletedNumbers({
          สี่ตัวบน: [],
          สี่ตัวโต๊ด: [],
          สามตัวบน: [],
          สามตัวโต๊ด: [],
          สามตัวล่าง: [],
          สองตัวบน: [],
          สองตัวล่าง: [],
          วิ่งบน: [],
          วิ่งล่าง: [],
        });
        setShowModal(false); // Assuming you want to close a modal on confirm
        Swal.fire("ลบรายการแทงสำเร็จ", "", "success");
      }
    });
  };

  // Delete list in รายการแทง

  const handleDelete = (index, section) => {
    const newCompletedNumbers = { ...completedNumbers };

    // Filter out the data only for the specified section
    newCompletedNumbers[section] = newCompletedNumbers[section].filter(
      (_, i) => i !== index
    );

    setCompletedNumbers(newCompletedNumbers);
  };

  const totalItems = Object.keys(completedNumbers).reduce((count, key) => {
    return count + completedNumbers[key].length;
  }, 0);

  const [activeButton, setActiveButton] = useState("เลือกกดเอง");

  const [activeButtons, setActiveButtons] = useState(["สี่ตัวบน"]);

  const active = (buttonName, newNumberOfDigits) => {
    if (activeButtons.length === 1 && activeButtons[0] === buttonName) {
      // The button is already the only active button, do nothing
      return;
    }

    // If the button is already active, deactivate it
    if (activeButtons.includes(buttonName)) {
      setActiveButtons(activeButtons.filter((btn) => btn !== buttonName));
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
      if (buttonName === "วิ่งบน") {
        // Check if "วิ่งบน" is active, if yes, remove it
        if (activeButtons.includes("วิ่งบน")) {
          setActiveButtons(activeButtons.filter((btn) => btn !== "วิ่งบน"));
        } else {
          // Check if "วิ่งล่าง" is active, if yes, don't remove it
          if (activeButtons.includes("วิ่งล่าง")) {
            setActiveButtons(["วิ่งบน", "วิ่งล่าง"]); // Set both buttons as active
          } else {
            // Remove "วิ่งล่าง" before adding "วิ่งบน"
            setActiveButtons(activeButtons.filter((btn) => btn !== "วิ่งล่าง"));
            setActiveButtons(["วิ่งบน"]); // Set only "วิ่งบน" as active
          }
        }
      } else if (buttonName === "วิ่งล่าง") {
        // Check if "วิ่งล่าง" is active, if yes, remove it
        if (activeButtons.includes("วิ่งล่าง")) {
          setActiveButtons(activeButtons.filter((btn) => btn !== "วิ่งล่าง"));
        } else {
          // Check if "วิ่งบน" is active, if yes, don't remove it
          if (activeButtons.includes("วิ่งบน")) {
            setActiveButtons(["วิ่งบน", "วิ่งล่าง"]); // Set both buttons as active
          } else {
            // Remove "วิ่งบน" before adding "วิ่งล่าง"
            setActiveButtons(activeButtons.filter((btn) => btn !== "วิ่งบน"));
            setActiveButtons(["วิ่งล่าง"]); // Set only "วิ่งล่าง" as active
          }
        }
      }
      setNumberOfDigits(newNumberOfDigits); // Set the number of digits
      setIsReverseChecked(false); // Uncheck reverse checkbox
      setActiveHuy19(false); // Set reverse checkbox to unchecked
      SetHuayroodnar(false); // Set Huayroodnar to false when "วิ่งบน" or "วิ่งล่าง" is clicked
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

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const thaiMonths = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
      'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
      'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];

    // Get the current date
    const now = new Date();

    // Convert to Thai Buddhist year by adding 543 years to the Gregorian year
    const thaiYear = now.getFullYear() + 543;

    // Get the month in Thai
    const monthThai = thaiMonths[now.getMonth()];

    // Format the date as day month(year in Thai)
    const formattedDate = `${now.getDate()} ${monthThai} ${thaiYear}`;
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const countdownDate = new Date(Date.now() + 8000 * 60 * 1000); // 2 minutes from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let timeLeft;
      if (distance > 1000 * 60 * 60 * 24) {
        // If more than 24 hours left
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timeLeft = `${days} วัน ${hours}:${minutes}:${seconds}`;
      } else {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timeLeft = `${hours}:${minutes}:${seconds}`;
      }
      setCountdown(timeLeft);
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
        {/* <div className="divider divider-start text-3xl pb-8 text-[#4400A5]">
        <Link to="/" className="flex justify-center items-center gap-1">
          <IoIosBackspace />
            ย้อนกลับ
          </Link>
        </div> */}
        <div className="footer px-10 py-4">
          <aside className="items-center grid-flow-col gap-4">
            <img src={chosenImage} alt="Vietnam flag" className="h-[50px]" />
            <p className="text-[#4400A5] text-3xl">
              {displayText} <br />
              <p className="text-[#000] text-xl">งวดวันที่ {currentDate}</p>
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end bg-primary rounded-full drop-shadow-lg">
            <div className="grid grid-flow-col gap-4">
              <div className="stat text-center">
                <div className=" text-white text-xl min-w-48">{countdown}</div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 duration-300 ease-in-out transition delay-150 hover:rotate-180"
                onClick={() => setShowModal(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              {/* Close Button */}
            </div>
            <div className="modalTable">
              {/* <div className="h-[40px] w-full bg-[#4400A5] hidden max-md:block"></div> */}

              <table>
                {completedNumbers["สี่ตัวบน"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">สี่ตัวบน</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}
                <tbody>
                  {completedNumbers["สี่ตัวบน"].map((numberSet, index) => (
                    <tr key={index}>
                      <td data-label="สี่ตัวบน">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "สี่ตัวบน")}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {completedNumbers["สี่ตัวโต๊ด"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">สี่ตัวโต๊ด</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}

                <tbody>
                  {completedNumbers["สี่ตัวโต๊ด"].map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td data-label="สี่ตัวโต๊ด">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "สี่ตัวโต๊ด")}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

                {completedNumbers["สามตัวบน"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">สามตัวบน</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}
                <tbody>
                  {completedNumbers["สามตัวบน"].map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td data-label="สามตัวบน">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "สามตัวบน")}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

                {completedNumbers["สามตัวโต๊ด"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">สามตัวโต๊ด</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}
                <tbody>
                  {completedNumbers["สามตัวโต๊ด"].map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td data-label="สามตัวโต๊ด">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "สามตัวโต๊ด")}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {completedNumbers["สามตัวล่าง"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">สามตัวล่าง</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}
                <tbody>
                  {completedNumbers["สามตัวล่าง"].map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td data-label="สามตัวล่าง">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "สามตัวล่าง")}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {completedNumbers["สองตัวบน"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">สองตัวบน</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}

                <tbody>
                  {completedNumbers["สองตัวบน"].map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td data-label="สองตัวบน">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "สองตัวบน")}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {completedNumbers["สองตัวล่าง"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">สองตัวล่าง</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}

                <tbody>
                  {completedNumbers["สองตัวล่าง"].map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td data-label="สองตัวล่าง">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "สองตัวล่าง")}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {completedNumbers["วิ่งบน"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">วิ่งบน</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}

                <tbody>
                  {completedNumbers["วิ่งบน"].map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td data-label="วิ่งบน">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "วิ่งบน")}
                        >
                          <BiTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {completedNumbers["วิ่งล่าง"].length > 0 && (
                  <div className="headTable flex justify-between items-center text-white text-center h-[40px] bg-[#4400A5]">
                    <h1 className="w-full">วิ่งล่าง</h1>
                    <h1 className="w-full">เรทจ่าย</h1>
                    <h1 className="w-full">ราคา</h1>
                    <h1 className="w-full">ลบ</h1>
                  </div>
                )}
                <tbody>
                  {completedNumbers["วิ่งล่าง"].map((numberSet, index) => (
                    <tr key={`${numberSet}_${index}`}>
                      <td data-label="วิ่งล่าง">{numberSet}</td>
                      <td data-label="เรทจ่าย">50</td>
                      <td
                        data-label="ราคา"
                        className="flex justify-between md:justify-center"
                      >
                        <p className="border border-[#4400A5] px-1 w-[50px] flex justify-center items-center">
                          {price}
                        </p>
                      </td>
                      <td data-label="ลบ">
                        <button
                          className="text-[#FF2929]"
                          onClick={() => handleDelete(index, "วิ่งล่าง")}
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
              <button className="pricePoy" onClick={() => handlePriceChange(5)}>
                5
              </button>
              <button
                className="pricePoy"
                onClick={() => handlePriceChange(10)}
              >
                10
              </button>
              <button
                className="pricePoy"
                onClick={() => handlePriceChange(20)}
              >
                20
              </button>
              <button
                className="pricePoy"
                onClick={() => handlePriceChange(50)}
              >
                50
              </button>
              <button
                className="pricePoy"
                onClick={() => handlePriceChange(100)}
              >
                100
              </button>
              <button
                className="pricePoy"
                onClick={() => handlePriceChange(500)}
              >
                500
              </button>
            </div>
            <div className="mt-5">
              <div className="flex justify-between items-center gap-5">
                <p>จำนวนเงิน</p>
                <div className="w-[50%] flex justify-end items-center gap-5">
                  <button
                    className="w-[35px] h-[35px] bg-[#FF2929] rounded text-white text-[25px]"
                    onClick={() => handleDecrement()}
                  >-</button>
                  <input
                    type="number"
                    value={totalItems === 0 ? 0 : price}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-[45%] border border-[#4400A5] rounded px-1 text-center bg-white h-[35px]"
                  />
                  <button
                    className="w-[35px] h-[35px] bg-[#00871E] rounded text-white text-[25px]"
                    onClick={() => handleIncrement()}
                  >+</button>
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
      <div className="grid  grid-flow-col gap-4 ps-5 pe-5 pb-5 pt-2">
        <div className="row-span-3 w-full px-3 max-lg:hidden">
          <div className="flex justify-center items-center font-bold text-white text-[1.25rem] h-[60px] w-full bg-[#FF8329] rounded-lg mb-6">
            <h1>ดึงโพย</h1>
          </div>
          <div className="list w-full rounded-lg text-center p-2">
            <div className="container-bet flex justify-between item-center relative">
              <h1 className="betting absolute left-3"> รายการแทง</h1>
              <div className="rounded-full bg-[#4400A5] text-white px-[12px] py-[3px] right-3 absolute">
                <div>{totalItems} รายการ</div>
              </div>
            </div>
            <hr className="mt-10" />
            <div className="list-menuorder py-2">
              {/* Check for "สี่ตัวบน" */}
              {completedNumbers["สี่ตัวบน"].length > 0 && (
                <div className="title-betting">สี่ตัวบน</div>
              )}
              {completedNumbers["สี่ตัวบน"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "สี่ตัวบน")}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}

              {/* Check for "สี่ตัวโต๊ด" */}
              {completedNumbers["สี่ตัวโต๊ด"].length > 0 && (
                <div className="title-betting">สี่ตัวโต๊ด</div>
              )}
              {completedNumbers["สี่ตัวโต๊ด"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "สี่ตัวโต๊ด")}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}

              {/* Check for "สามตัวบน" */}
              {completedNumbers["สามตัวบน"].length > 0 && (
                <div className="title-betting">สามตัวบน</div>
              )}
              {completedNumbers["สามตัวบน"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "สามตัวบน")}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}
              {/* Check for "สามตัวโต๊ด" */}
              {completedNumbers["สามตัวโต๊ด"].length > 0 && (
                <div className="title-betting">สามตัวโต๊ด</div>
              )}
              {completedNumbers["สามตัวโต๊ด"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "สามตัวโต๊ด")}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}

              {/* Check for "สามตัวล่าง" */}
              {completedNumbers["สามตัวล่าง"].length > 0 && (
                <div className="title-betting">สามตัวล่าง</div>
              )}
              {completedNumbers["สามตัวล่าง"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "สามตัวล่าง")}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}

              {/* Check for "สองตัวบน" */}
              {completedNumbers["สองตัวบน"].length > 0 && (
                <div className="title-betting">สองตัวบน</div>
              )}
              {completedNumbers["สองตัวบน"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "สองตัวบน")}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}
              {/* Check for "สองตัวล่าง" */}
              {completedNumbers["สองตัวล่าง"].length > 0 && (
                <div className="title-betting">สองตัวล่าง</div>
              )}
              {completedNumbers["สองตัวล่าง"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "สองตัวล่าง")}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}

              {/* Check for "วิ่งบน" */}
              {completedNumbers["วิ่งบน"].length > 0 && (
                <div className="title-betting">วิ่งบน</div>
              )}
              {completedNumbers["วิ่งบน"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "วิ่งบน")} // Pass "วิ่งบน" as the section argument
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}

              {/* Check for "วิ่งล่าง" */}
              {completedNumbers["วิ่งล่าง"].length > 0 && (
                <div className="title-betting">วิ่งล่าง</div>
              )}
              {completedNumbers["วิ่งล่าง"].map((numberSet, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between px-5"
                >
                  <h1>{numberSet}</h1>
                  {/* Delete Button */}
                  <button
                    className="text-[#FF2929] text-[18px]"
                    onClick={() => handleDelete(index, "วิ่งล่าง")}
                  >
                    <BiTrashAlt />
                  </button>
                </div>
              ))}
            </div>

            <div className="menu-btn grid gap-2">
              <button
                className={`custom ${totalItems === 0 ? "disabled" : ""}`}
                onClick={() => {
                  if (totalItems > 0) {
                    setShowModal(true);
                  }
                }}
                disabled={totalItems === 0}
                style={{ opacity: totalItems === 0 ? 0.3 : 1 }}
              >
                ใส่ราคา/ส่งโพย
              </button>
              <button
                className={`delete ${totalItems === 0 ? "disabled" : ""}`}
                disabled={totalItems === 0}
                style={{ opacity: totalItems === 0 ? 0.3 : 1 }}
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

          <div
            className={`container-putnumber ${activeButton === "เลือกกดเอง" ? "" : "hidden"
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
                  <div className="grid gap-4 grid-cols-3">
                    <button
                      className={`btn ${activeButtons.includes("สี่ตัวบน") ? "active" : ""
                        }`}
                      onClick={() => active("สี่ตัวบน", 4)}
                    >
                      <BiGridAlt /> สี่ตัวบน{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${activeButtons.includes("สี่ตัวโต๊ด") ? "active" : ""
                        }`}
                      onClick={() => active("สี่ตัวโต๊ด", 4)}
                    >
                      <BiGridAlt /> สี่ตัวโต๊ด{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${activeButtons.includes("สามตัวบน") ? "active" : ""
                        }`}
                      onClick={() => active("สามตัวบน", 3)}
                    >
                      <BiGridAlt /> สามตัวบน{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${activeButtons.includes("สามตัวโต๊ด") ? "active" : ""
                        }`}
                      onClick={() => active("สามตัวโต๊ด", 3)}
                    >
                      <BiGridAlt /> สามตัวโต๊ด{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${activeButtons.includes("สามตัวล่าง") ? "active" : ""
                        }`}
                      onClick={() => active("สามตัวล่าง", 3)}
                    >
                      <BiGridAlt /> สามตัวล่าง{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>

                    <button
                      className={`btn ${activeButtons.includes("สองตัวบน") ? "active" : ""
                        }`}
                      onClick={() => active("สองตัวบน", 2)}
                    >
                      <BiGridAlt /> สองตัวบน{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>
                    <button
                      className={`btn ${activeButtons.includes("สองตัวล่าง") ? "active" : ""
                        }`}
                      onClick={() => active("สองตัวล่าง", 2)}
                    >
                      <BiGridAlt /> สองตัวล่าง{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>
                    <button
                      className={`btn ${activeButtons.includes("วิ่งบน") ? "active" : ""
                        }`}
                      onClick={() => active("วิ่งบน", 1)}
                    >
                      <BiGridAlt /> วิ่งบน{" "}
                      <div className="badge badge-primary">1,000</div>
                    </button>
                    <button
                      className={`btn ${activeButtons.includes("วิ่งล่าง") ? "active" : ""
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

                    {/* <div
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
                    </div> */}
                  </div>
                  <div
                    className={`btn-con flex justify-center items-center gap-[8px]`}
                  >
                    <div
                      className={`left-content flex flex-col justify-center items-center ${activeButtons.includes("วิ่งบน") ||
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
                        {/* <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all delay-100 dark:border-gray-600 peer-checked:bg-[#4400A5]"></div> */}
                        <button
                          className={`btn backnumber ${isReverseChecked ? "active" : ""
                            }`}
                          onClick={handleCheckboxChange}
                        >
                          กลับเลข
                        </button>
                      </label>
                    </div>
                    <div
                      className={`btn-con flex justify-center items-center gap-[8px]
                  ${activeButtons.includes("สองตัวล่าง") ||
                          activeButtons.includes("สองตัวบน")
                          ? ""
                          : "hidden"
                        }`}
                    >
                      <button
                        className={`btn ${activeHuy19 === "19 ประตู" ? "active" : ""
                          }`}
                        onClick={() => handleHuy19("19 ประตู", 1)}
                      >
                        19 ประตู
                      </button>
                      <button
                        className={`btn ${activeHuy19 === "รูดหน้า" ? "active" : ""
                          }`}
                        onClick={() => handleHuy19("รูดหน้า", 1)}
                      >
                        รูดหน้า
                      </button>
                      <button
                        className={`btn ${activeHuy19 === "รูดหลัง" ? "active" : ""
                          }`}
                        onClick={() => handleHuy19("รูดหลัง", 1)}
                      >
                        รูดหลัง
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <NumpadLotto
                      addCompletedNumbers={addCompletedNumbers}
                      numberOfDigits={numberOfDigits}
                      activeButtons={activeButtons}
                      onEnButtonClick={handleEnButtonClick} // Pass handleEnButtonClick function as prop
                    />
                  </div>
                </div>
              </section>
            )}
          </div>
          <div
            className={`container-putnumber ${activeButton !== "เลือกแผงเลข" ? "hidden" : ""
              } ${activeButton === "เลือกแผงเลข"
                ? "animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-linear"
                : ""
              }`}
          >
            <Title2 addCompletedNumber={addNumberFromButtonClicked} />
          </div>

          <div
            className={`container-putnumber ${activeButton !== "เลือกแบบเลขวิน" ? "hidden" : ""
              } ${activeButton === "เลือกแบบเลขวิน"
                ? "animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-linear"
                : ""
              }`}
          >
            <Title3 />
          </div>
        </div>

        <div className="list-responsive mt-auto rounded-md">
          <div className="container-bet flex gap-2 item-center justify-center">
            <h1 className="betting mt-[0.2rem]">รายการแทง</h1>
            <div className="rounded-full bg-[#4400A5] text-white px-[12px] py-[3px] mr-auto">
              {totalItems}
            </div>
          </div>
          <button
            className={`list-btn ${totalItems === 0 ? "disabled" : ""}`}
            onClick={() => {
              if (totalItems > 0) {
                setShowModal(true);
              }
            }}
            disabled={totalItems === 0}
            style={{ opacity: totalItems === 0 ? 0.3 : 1 }}
          >
            ใส่ราคา/ส่งโพย
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Play;
