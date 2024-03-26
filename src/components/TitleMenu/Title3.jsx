import { BiGridAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import swal from 'sweetalert';
import "./Title.css";

function Title3() {
    const [activeButton, setActiveButton] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    let [numbersPerPage, setNumbersPerPage] = useState(1000);
    const [similarNumbers, setSimilarNumbers] = useState([]);

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
            case 2:
                setSelectedNumbers(Array.from({ length: 1000 }, (_, i) => i));
                setNumbersPerPage(100);
                break;
            case 3:
            case 4:
                setSelectedNumbers(Array.from({ length: 99 + 1 }, (_, i) => i));
                setNumbersPerPage(100);
                break;
            default:
                setSelectedNumbers([]);
                setNumbersPerPage(1000);
        }
    };

    const handleButtonClick = (index) => {
        setActiveButton(index);
        setInputValue(''); // เซ็ตค่า input เป็นค่าว่างเมื่อเปลี่ยน case
    };

    // Function to generate similar numbers
    const generateSimilarNumbers = (number, inputNumber, numDigits) => {
        console.log("Input Number:", inputNumber); // แสดงค่าที่รับมาจาก input
        const similarNumbers = new Set(); // เพื่อไม่ให้มีเลขซ้ำ
        const permutations = reverseNumbers(inputNumber, numDigits); // Get permutations
        permutations.forEach(perm => {
            similarNumbers.add(parseInt(perm));
        });
        similarNumbers.delete(parseInt(number)); // Remove the original number
        similarNumbers.add(parseInt(inputNumber)); // Add the input number
        return Array.from(similarNumbers);
    };

    // Function to generate permutations
    const reverseNumbers = (number, numDigits) => {
        const strNumber = number.toString();
        const permutations = [];
        generatePermutations(strNumber, "", permutations, numDigits);
        return permutations;
    };

    const generatePermutations = (strNumber, currentPerm, permutations, numDigits) => {
        if (currentPerm.length === numDigits) {
            permutations.push(currentPerm);
        } else {
            const used = new Set();
            for (let i = 0; i < strNumber.length; i++) {
                if (!used.has(strNumber[i])) {
                    used.add(strNumber[i]);
                    const remainingDigits = strNumber.slice(0, i) + strNumber.slice(i + 1);
                    generatePermutations(remainingDigits, currentPerm + strNumber[i], permutations, numDigits);
                }
            }
        }
    };

    // Handle input change
    const handleInputNumberChange = (e, numDigits) => {
        let inputValue = e.target.value.trim(); // ลบช่องว่างที่อาจเป็นไปได้
    
        // ตรวจสอบว่าค่าที่ป้อนมีแต่ตัวเลข
        if (!/^\d*$/.test(inputValue)) {
            // หากมีอักขระที่ไม่ใช่ตัวเลขให้เปลี่ยนเป็นค่าว่าง
            inputValue = '';
        }
    
        // ตรวจสอบความยาวของค่าที่ป้อนมา และไม่ให้เกินจำนวนตัวเลขที่กำหนด
        if (inputValue.length > numDigits) {
            // แสดง alert แจ้งเตือน
            swal("คำเตือน!", `กรุณากรอกเฉพาะตัวเลข ${numDigits} ตัวเท่านั้น`, "warning");
            // หากเกินจำนวนตัวเลขที่กำหนดให้ไม่เพิ่มค่าที่ป้อนลงไป
            return;
        }
    
        const number = parseInt(inputValue); // แปลงค่า input เป็นตัวเลข
        if (isNaN(number)) { // ตรวจสอบว่าค่าที่แปลงมาเป็น NaN หรือไม่
            // ถ้าค่าที่แปลงมาเป็น NaN ให้กำหนด similarNumbers เป็นรายการว่าง
            setSimilarNumbers([]);
            return; // หยุดการทำงานของฟังก์ชันที่นี่
        }
    
        const similarNumbers = generateSimilarNumbers(number, inputValue, numDigits);
        setSimilarNumbers(similarNumbers);
    };

    return (
        <section>
            <div className="gap-4 w-40">
                <div className="divider divider-end text-xl">
                    เลือกประเภทการแทง
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
                {[0, 1, 2, 3, 4].map((buttonIndex) => (
                    <button
                        key={buttonIndex}
                        className={`btn ${activeButton === buttonIndex ? 'active' : ''}`}
                        onClick={() => handleButtonClick(buttonIndex)}
                    >
                        <BiGridAlt />
                        {(() => {
                            switch (buttonIndex) {
                                case 0:
                                    return "4 ตัวบน";
                                case 1:
                                    return "3 ตัวบน";
                                case 2:
                                    return "3 ตัวล่าง";
                                case 3:
                                    return "2 ตัวบน";
                                case 4:
                                    return "2 ตัวล่าง";
                                default:
                                    return "";
                            }
                        })()}
                        <div className="badge badge-primary">1,000</div>
                    </button>
                ))}
            </div>
            <div className="gap-4 w-40 p-[1.25rem]">
                <div className="divider divider-end text-xl">กรอกเลขวิน</div>
            </div>
            

            {activeButton >= 0 && activeButton <= 4 && (
                <section className="max-md:mb-[5rem]">
                    <div className="flex justify-center mb-10">
                        <input type="number" className="w-[380px] text-center border border-[#4400A5] rounded" onChange={(e) => handleInputNumberChange(e, [4, 3, 3, 2, 2][activeButton])} max={Array.from({length: [9999, 999, 999, 99, 99][activeButton]}, (_, i) => i + 1).reverse()[0]} min="0" maxLength={activeButton >= 0 && activeButton <= 2 ? 4 : 2}/>
                    </div>
                    <div className="border border-[#4400A5] rounded p-5">
                        <div className="flex justify-between items-center">
                            <h1>ตัวอย่างเลข</h1>
                            <button className="add bg-[#FF8329] ">เพิ่มเลขทั้งหมด</button>
                        </div>
                        <div className="flex">
                            <p className="bg-[#4400A5] text-white rounded p-3">
                                {(() => {
                                    switch (activeButton) {
                                        case 0:
                                            return "4 ตัวบน";
                                        case 1:
                                            return "สามตัวบน";
                                        case 2:
                                            return "สามตัวล่าง";
                                        case 3:
                                            return "สองตัวบน";
                                        case 4:
                                            return "สองตัวล่าง";
                                        default:
                                            return "";
                                    }
                                })()} ( {similarNumbers.length} )
                            </p>
                        </div>
                        {activeButton >= 0 && similarNumbers.length > 0 && (
                            <div className="grid grid-cols-10 gap-4 my-5">
                                {similarNumbers.map((number, index) => (
                                    <button key={index} className="btn w-[60px] mx-auto">{number.toString().padStart([4, 3, 3, 2, 2][activeButton], '0')}</button>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

        </section>
    );
}

export default Title3;
