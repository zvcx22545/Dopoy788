import { useState, useEffect } from "react";
import { BiGridAlt } from "react-icons/bi";
import "./Title.css";
import PropTypes from "prop-types";

function getPageRangeC1(currentPage, numbersPerPage) {
  const start = (currentPage - 1) * numbersPerPage;
  const end = start + numbersPerPage - 1;
  return `${start.toString().padStart(4, "0")} - ${end
    .toString()
    .padStart(4, "0")}`;
}
function getPageRangeC2(currentPage, numbersPerPage) {
  const start = (currentPage - 1) * numbersPerPage;
  const end = start + numbersPerPage - 1;
  return `${start.toString().padStart(3, "0")} - ${end
    .toString()
    .padStart(3, "0")}`;
}

const TitleButton = ({ isActive, onClick, label, badge }) => (
  <button
    className={`btn ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    <BiGridAlt />
    {label}
    <div className="badge badge-primary">{badge}</div>
  </button>
);

const Title2 = ({ addCompletedNumber }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [numbersPerPage, setNumbersPerPage] = useState(1000);
  const [isReverseChecked, setIsReverseChecked] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState([]);

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
  
  const handleCheckboxChange = () => {
    setIsReverseChecked(!isReverseChecked); // Toggle the value
  };
  useEffect(() => {
    setActiveButton(0);
    paginateNumbers();
  }, []);

  useEffect(() => {
    paginateNumbers();
  }, [activeButton, currentPage]);

  const paginateNumbers = () => {
    switch (activeButton) {
      case 0:
        setSelectedNumbers(Array.from({ length: 10000 }, (_, i) => i));
        setNumbersPerPage(1000);
        break;
      case 1:
        setSelectedNumbers(Array.from({ length: 1000 }, (_, i) => i));
        setNumbersPerPage(100);
        break;
      case 2:
        setSelectedNumbers(Array.from({ length: 1000 }, (_, i) => i));
        setNumbersPerPage(100);
        break;
      case 3:
        setSelectedNumbers(Array.from({ length: 99 + 1 }, (_, i) => i));
        setNumbersPerPage(100);
        break;
      case 4:
        setSelectedNumbers(Array.from({ length: 99 + 1 }, (_, i) => i));
        setNumbersPerPage(100);
        break;
      case 5:
        setSelectedNumbers(Array.from({ length: 9 + 1 }, (_, i) => i));
        setNumbersPerPage(100);
        break;
      case 6:
        setSelectedNumbers(Array.from({ length: 9 + 1 }, (_, i) => i));
        setNumbersPerPage(100);
        break;
      default:
        setSelectedNumbers([]);
        setNumbersPerPage(1000);
    }
  };

  const indexOfLastNumber = currentPage * numbersPerPage;
  const indexOfFirstNumber = indexOfLastNumber - numbersPerPage;
  const currentNumbers = selectedNumbers.slice(
    indexOfFirstNumber,
    indexOfLastNumber
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(selectedNumbers.length / numbersPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <section>
      <div className="gap-4 w-40">
        <div className="divider divider-end text-xl">เลือกประเภทการแทง</div>
      </div>
      <div className="grid grid-cols-3 gap-4  max-md:grid-cols-1">
        {[0, 1, 2, 3, 4, 5, 6].map((buttonIndex) => (
          <TitleButton
            key={buttonIndex}
            isActive={activeButton === buttonIndex}
            onClick={() => {
              setActiveButton(buttonIndex);
              setCurrentPage(1);
            }}
            label={(() => {
              switch (buttonIndex) {
                case 0:
                  return "สี่ตัวบน";
                case 1:
                  return "สามตัวโต๊ด";
                case 2:
                  return "สามตัวล่าง";
                case 3:
                  return "สองตัวบน";
                case 4:
                  return "สองตัวล่าง";
                case 5:
                  return "วิ่งบน";
                case 6:
                  return "วิ่งล่าง";
                default:
                  return "";
              }
            })()}
            badge="1,000"
          />
        ))}
      </div>
      <div className="gap-4 w-full flex justify-between">
        <div className="right-container w-[10.45%]">
          <div className="divider divider-end text-xl flex-shrink-0">กดเลข</div>
        </div>

        <div
          className={`left-content flex flex-col justify-center items-center ${
            [5, 6].includes(activeButton) ||
            activeButton === 5 || // เปลี่ยนจาก activeButton.includes("วิ่งบน") เป็น activeButton === 5
            activeButton === 6 // เปลี่ยนจาก activeButton.includes("วิ่งล่าง") เป็น activeButton === 6
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

      {activeButton === 0 && (
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-10 gap-y-4 gap-x-5 max-md:grid-cols-5 ">
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`btn w-[60px] mx-auto ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => handleClick(number)}
              >
                {number === 1
                  ? "0000"
                  : ((number - 1) * 1000).toString().padStart(4, "0")}
              </button>
            ))}
          </div>
          <div className="w-full bg-[#4400A5] p-3 rounded mt-4 text-white">
            <h1 className="flex justify-center">
              {getPageRangeC1(currentPage, numbersPerPage)}
            </h1>
          </div>
        </div>
      )}

      {activeButton === 1 && (
        <div className="grid grid-cols-1 gap-4 ">
          <div className="grid grid-cols-10 gap-4 max-md:grid-cols-5">
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`btn w-[60px] mx-auto ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => handleClick(number)}
              >
                {number === 1
                  ? "000"
                  : ((number - 1) * 100).toString().padStart(3, "0")}
              </button>
            ))}
          </div>
          <div className="w-full bg-[#4400A5] p-3 rounded mt-4 text-white">
            <h1 className="flex justify-center">
              {getPageRangeC2(currentPage, numbersPerPage)}
            </h1>
          </div>
        </div>
      )}

      {activeButton === 2 && (
        <div className="grid grid-cols-1 gap-4  ">
          <div className="grid grid-cols-10 gap-4 max-md:grid-cols-5">
            {pageNumbers.map((number) => (
              <button
                key={number}
                className={`btn w-[60px] mx-auto ${
                  currentPage === number ? "active" : ""
                }`}
                onClick={() => handleClick(number)}
              >
                {number === 1
                  ? "000"
                  : ((number - 1) * 100).toString().padStart(3, "0")}
              </button>
            ))}
          </div>
          <div className="w-full bg-[#4400A5] p-3 rounded mt-4 text-white">
            <h1 className="flex justify-center">
              {getPageRangeC2(currentPage, numbersPerPage)}
            </h1>
          </div>
        </div>
      )}

      {[0, 1, 2].includes(activeButton) && (
  <div className="grid grid-cols-1 gap-4 mt-10">
    <div className="grid grid-cols-10 gap-y-4 max-md:grid-cols-5">
      {currentNumbers.map((number) => (
        <button
  key={number}
  className="btn w-[60px] mx-auto"
  onClick={() => {
    // Check if the checkbox is checked
    if (isReverseChecked) {
      // If checked, generate reversed numbers for this number and send them
      const reversedNumbers = reverseNumbers(
        activeButton === 0
          ? number.toString().padStart(4, "0")
          : number.toString().padStart(3, "0")
      );
      reversedNumbers.forEach((reversedNumber) => addCompletedNumber(reversedNumber, activeButton));
    } else {
      // If not checked, just send the current number
      addCompletedNumber(
        activeButton === 0
          ? number.toString().padStart(4, "0")
          : number.toString().padStart(3, "0"),
        activeButton
      );
    }
  }}
>
  {activeButton === 0
    ? number.toString().padStart(4, "0")
    : number.toString().padStart(3, "0")}
</button>
      ))}
    </div>
  </div>
)}

      {[3, 4].includes(activeButton) && (
        <div className="grid grid-cols-10 gap-4 p-5 max-md:grid-cols-5">
          {currentNumbers.map((number) => (
            <button
              key={number}
              className="btn w-[60px] mx-auto"
              onClick={() => {
                // Check if the checkbox is checked
                if (isReverseChecked) {
                  // If checked, generate reversed numbers for this number and send them
                  const reversedNumbers = reverseNumbers(
                    activeButton === 0
                      ? number.toString().padStart(2, "0")
                      : number.toString().padStart(2, "0")
                  );
                  reversedNumbers.forEach((reversedNumber) => addCompletedNumber(reversedNumber,activeButton));
                } else {
                  // If not checked, just send the current number
                  addCompletedNumber(
                    activeButton === 0
                      ? number.toString().padStart(2, "0")
                      : number.toString().padStart(2, "0")
                      ,activeButton
                  );
                }
              }}
            >
              {number === 0 ? "00" : number.toString().padStart(2, "0")}
            </button>
          ))}
        </div>
      )}

{[5, 6].includes(activeButton) && (
  <div className="grid grid-cols-10 gap-y-4  max-md:grid-cols-5">
    {currentNumbers.map((number) => (
      <button
        key={number}
        className="btn w-[60px] mx-auto"
        onClick={() => {
          // Check if the checkbox is checked
          if (isReverseChecked) {
            addCompletedNumber(number,activeButton);
          } else {
            // If not checked, just send the current number
            addCompletedNumber(number,activeButton);
          }
        }}
      >
        {number}
      </button>
    ))}
  </div>
)}
    </section>
  );
}

TitleButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  badge: PropTypes.string.isRequired,
};

Title2.propTypes = {
  addCompletedNumber: PropTypes.func.isRequired,
};
export default Title2;
