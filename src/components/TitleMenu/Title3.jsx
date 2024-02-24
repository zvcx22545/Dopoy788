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

    // Function to generate similar numbers for 4 digits
    const generateSimilarNumbers4Digits = (number, inputNumber) => {
        console.log("Input Number:", inputNumber); // แสดงค่าที่รับมาจาก input
        const similarNumbers = new Set(); // เพื่อไม่ให้มีเลขซ้ำ
        const numberArray = number.toString().split(''); // Convert number to array of digits
        
        // Recursive function to generate permutations for 4 digits
        const generatePermutations = (arr, currentIndex) => {
            if (currentIndex === 4) { // Stop when we have 4 digits
                similarNumbers.add(parseInt(arr.join('')));
                return;
            }

            for (let i = currentIndex; i < 4; i++) {
                [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]]; // Swap elements
                generatePermutations(arr.slice(), currentIndex + 1);
                [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]]; // Swap back for next iteration
            }
        };

        generatePermutations(numberArray, 0);
        similarNumbers.delete(parseInt(number)); // Remove the original number
        similarNumbers.add(parseInt(inputNumber)); // Add the input number
        return Array.from(similarNumbers);
    };

    // Function to generate similar numbers for 3 digits
    const generateSimilarNumbers3Digits = (number, inputNumber) => {
        console.log("Input Number:", inputNumber); // แสดงค่าที่รับมาจาก input
        const similarNumbers = new Set(); // เพื่อไม่ให้มีเลขซ้ำ
        const numberArray = number.toString().split(''); // Convert number to array of digits
        
        // Recursive function to generate permutations for 3 digits
        const generatePermutations = (arr, currentIndex) => {
            if (currentIndex === 3) { // Stop when we have 3 digits
                similarNumbers.add(parseInt(arr.join('')));
                return;
            }

            for (let i = currentIndex; i < 3; i++) {
                [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]]; // Swap elements
                generatePermutations(arr.slice(), currentIndex + 1);
                [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]]; // Swap back for next iteration
            }
        };

        generatePermutations(numberArray, 0);
        similarNumbers.delete(parseInt(number)); // Remove the original number
        similarNumbers.add(parseInt(inputNumber)); // Add the input number
        return Array.from(similarNumbers);
    };

    // Function to generate similar numbers for 3 digits
    const generateSimilarNumbers2Digits = (number, inputNumber) => {
        console.log("Input Number:", inputNumber); // แสดงค่าที่รับมาจาก input
        const similarNumbers = new Set(); // เพื่อไม่ให้มีเลขซ้ำ
        const numberArray = number.toString().split(''); // Convert number to array of digits
        
        // Recursive function to generate permutations for 3 digits
        const generatePermutations = (arr, currentIndex) => {
            if (currentIndex === 2) { // Stop when we have 3 digits
                similarNumbers.add(parseInt(arr.join('')));
                return;
            }

            for (let i = currentIndex; i < 2; i++) {
                [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]]; // Swap elements
                generatePermutations(arr.slice(), currentIndex + 1);
                [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]]; // Swap back for next iteration
            }
        };

        generatePermutations(numberArray, 0);
        similarNumbers.delete(parseInt(number)); // Remove the original number
        similarNumbers.add(parseInt(inputNumber)); // Add the input number
        return Array.from(similarNumbers);
    };

    // Handle input change for 4 digits
    const handleInputNumberChange4Digits = (e) => {
        let inputValue = e.target.value.trim(); // ลบช่องว่างที่อาจเป็นไปได้
    
        // ตรวจสอบว่าค่าที่ป้อนมีแต่ตัวเลข
        if (!/^\d*$/.test(inputValue)) {
            // หากมีอักขระที่ไม่ใช่ตัวเลขให้เปลี่ยนเป็นค่าว่าง
            inputValue = '';
        }
    
        // ตรวจสอบความยาวของค่าที่ป้อนมา และไม่ให้เกิน 4 ตัว
        if (inputValue.length > 4) {
            // แสดง alert แจ้งเตือน
            swal("คำเตือน!", "กรุณากรอกเฉพาะตัวเลข 4 ตัวเท่านั้น", "warning");
            // หากเกิน 4 ตัวให้ไม่เพิ่มค่าที่ป้อนลงไป
            return; // เพื่อไม่ให้ทำงานของโค้ดด้านล่างต่อ
        }
    
        const number = parseInt(inputValue); // แปลงค่า input เป็นตัวเลข
        if (isNaN(number)) { // ตรวจสอบว่าค่าที่แปลงมาเป็น NaN หรือไม่
            // ถ้าค่าที่แปลงมาเป็น NaN ให้กำหนด similarNumbers เป็นรายการว่าง
            setSimilarNumbers([]);
            return; // หยุดการทำงานของฟังก์ชันที่นี่
        }
    
        const similarNumbers = generateSimilarNumbers4Digits(number, inputValue);
        setSimilarNumbers(similarNumbers);
    };

    // Handle input change for 3 digits
    const handleInputNumberChange3Digits = (e) => {
        let inputValue = e.target.value.trim(); // ลบช่องว่างที่อาจเป็นไปได้
    
        // ตรวจสอบว่าค่าที่ป้อนมีแต่ตัวเลข
        if (!/^\d*$/.test(inputValue)) {
            // หากมีอักขระที่ไม่ใช่ตัวเลขให้เปลี่ยนเป็นค่าว่าง
            inputValue = '';
        }
    
        // ตรวจสอบความยาวของค่าที่ป้อนมา และไม่ให้เกิน 3 ตัว
        if (inputValue.length > 3) {
            // แสดง alert แจ้งเตือน
            swal("คำเตือน!", "กรุณากรอกเฉพาะตัวเลข 3 ตัวเท่านั้น", "warning");
            // หากเกิน 2 ตัวให้ไม่เพิ่มค่าที่ป้อนลงไป
            return; // เพื่อไม่ให้ทำงานของโค้ดด้านล่างต่อ
        }
    
        const number = parseInt(inputValue); // แปลงค่า input เป็นตัวเลข
        if (isNaN(number)) { // ตรวจสอบว่าค่าที่แปลงมาเป็น NaN หรือไม่
            // ถ้าค่าที่แปลงมาเป็น NaN ให้กำหนด similarNumbers เป็นรายการว่าง
            setSimilarNumbers([]);
            return; // หยุดการทำงานของฟังก์ชันที่นี่
        }
    
        const similarNumbers = generateSimilarNumbers3Digits(number, inputValue);
        setSimilarNumbers(similarNumbers);
    };

    // Handle input change for 3 digits
    const handleInputNumberChange2Digits = (e) => {
        let inputValue = e.target.value.trim(); // ลบช่องว่างที่อาจเป็นไปได้
    
        // ตรวจสอบว่าค่าที่ป้อนมีแต่ตัวเลข
        if (!/^\d*$/.test(inputValue)) {
            // หากมีอักขระที่ไม่ใช่ตัวเลขให้เปลี่ยนเป็นค่าว่าง
            inputValue = '';
        }
    
        // ตรวจสอบความยาวของค่าที่ป้อนมา และไม่ให้เกิน 2 ตัว
        if (inputValue.length > 2) {
            // แสดง alert แจ้งเตือน
            swal("คำเตือน!", "กรุณากรอกเฉพาะตัวเลข 2 ตัวเท่านั้น", "warning");
            // หากเกิน 2 ตัวให้ไม่เพิ่มค่าที่ป้อนลงไป
            return; // เพื่อไม่ให้ทำงานของโค้ดด้านล่างต่อ
        }
    
        const number = parseInt(inputValue); // แปลงค่า input เป็นตัวเลข
        if (isNaN(number)) { // ตรวจสอบว่าค่าที่แปลงมาเป็น NaN หรือไม่
            // ถ้าค่าที่แปลงมาเป็น NaN ให้กำหนด similarNumbers เป็นรายการว่าง
            setSimilarNumbers([]);
            return; // หยุดการทำงานของฟังก์ชันที่นี่
        }
    
        const similarNumbers = generateSimilarNumbers2Digits(number, inputValue);
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
                                    return "สี่ตัวบน";
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
                        })()}
                        <div className="badge badge-primary">1,000</div>
                    </button>
                ))}
            </div>
            <div className="gap-4 w-40 p-[1.25rem]">
                <div className="divider divider-end text-xl">กรอกเลขวิน</div>
            </div>
            

            {activeButton === 0 && (
                <section>
                    <div className="flex justify-center mb-10">
                        <input type="number" className="w-[380px] text-center border border-[#4400A5] rounded" onChange={handleInputNumberChange4Digits} max="9999" min="0" maxLength={4}/>
                    </div>
                    <div className="border border-[#4400A5] rounded p-5">
                        <div className="flex justify-between items-center">
                            <h1>ตัวอย่างเลข</h1>
                            <button className="add bg-[#FF8329] ">เพิ่มเลขทั้งหมด</button>
                        </div>
                        <div className="flex">
                            <p className="bg-[#4400A5] text-white rounded p-3">สี่ตัวบน ( {similarNumbers.length} )</p>
                        </div>
                        {activeButton === 0 && similarNumbers.length > 1 && (
                            <div className="grid grid-cols-10 gap-4 my-5">
                                {similarNumbers.map((number, index) => (
                                    <button key={index} className="btn w-[60px] mx-auto">{number.toString().padStart(4, '0')}</button>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}

            {activeButton === 1 && (
                <section>
                    <div className="flex justify-center mb-10">
                        <input type="number" className="w-[380px] text-center border border-[#4400A5] rounded" onChange={handleInputNumberChange3Digits} max="999" min="0" maxLength={3}/>
                    </div>
                    <div className="border border-[#4400A5] rounded p-5">
                        <div className="flex justify-between items-center">
                            <h1>ตัวอย่างเลข</h1>
                            <button className="add bg-[#FF8329] ">เพิ่มเลขทั้งหมด</button>
                        </div>
                        <div className="flex">
                            <p className="bg-[#4400A5] text-white rounded p-3">สามตัวบน ( {similarNumbers.length} )</p>
                        </div>
                        {activeButton === 1 && similarNumbers.length > 0 && (
                        <div className="grid grid-cols-10 gap-4 my-5">
                            {similarNumbers.map((number, index) => (
                                <button key={index} className="btn w-[60px] mx-auto">{number.toString().padStart(3, '0')}</button>
                            ))}
                        </div>
                        )}
                    </div>
                </section>
            )}

            {activeButton === 2 && (
                <section>
                    <div className="flex justify-center mb-10">
                        <input type="number" className="w-[380px] text-center border border-[#4400A5] rounded" onChange={handleInputNumberChange3Digits} max="999" min="0" maxLength={3}/>
                    </div>
                    <div className="border border-[#4400A5] rounded p-5">
                        <div className="flex justify-between items-center">
                            <h1>ตัวอย่างเลข</h1>
                            <button className="add bg-[#FF8329] ">เพิ่มเลขทั้งหมด</button>
                        </div>
                        <div className="flex">
                            <p className="bg-[#4400A5] text-white rounded p-3">สามตัวล่าง ( {similarNumbers.length} )</p>
                        </div>
                        {activeButton === 2 && similarNumbers.length > 0 && (
                        <div className="grid grid-cols-10 gap-4 my-5">
                            {similarNumbers.map((number, index) => (
                                <button key={index} className="btn w-[60px] mx-auto">{number.toString().padStart(3, '0')}</button>
                            ))}
                        </div>
                        )}
                    </div>
                </section>
            )}

            {activeButton === 3 && (
                <section>
                    <div className="flex justify-center mb-10">
                        <input type="number" className="w-[380px] text-center border border-[#4400A5] rounded" onChange={handleInputNumberChange2Digits} max="99" min="0" maxLength={2}/>
                    </div>
                    <div className="border border-[#4400A5] rounded p-5">
                        <div className="flex justify-between items-center">
                            <h1>ตัวอย่างเลข</h1>
                            <button className="add bg-[#FF8329] ">เพิ่มเลขทั้งหมด</button>
                        </div>
                        <div className="flex">
                            <p className="bg-[#4400A5] text-white rounded p-3">สองตัวบน ( {similarNumbers.length} )</p>
                        </div>
                        {activeButton === 3 && similarNumbers.length > 0 && (
                        <div className="grid grid-cols-10 gap-4 my-5">
                            {similarNumbers.map((number, index) => (
                                <button key={index} className="btn w-[60px] mx-auto">{number.toString().padStart(2, '0')}</button>
                            ))}
                        </div>
                        )}
                    </div>
                </section>
            )}

            {activeButton === 4 && (
                <section>
                    <div className="flex justify-center mb-10">
                        <input type="number" className="w-[380px] text-center border border-[#4400A5] rounded" onChange={handleInputNumberChange2Digits} max="99" min="0" maxLength={2}/>
                    </div>
                    <div className="border border-[#4400A5] rounded p-5">
                        <div className="flex justify-between items-center">
                            <h1>ตัวอย่างเลข</h1>
                            <button className="add bg-[#FF8329] ">เพิ่มเลขทั้งหมด</button>
                        </div>
                        <div className="flex">
                            <p className="bg-[#4400A5] text-white rounded p-3">สองตัวล่าง ( {similarNumbers.length} )</p>
                        </div>
                        {activeButton === 4 && similarNumbers.length > 0 && (
                        <div className="grid grid-cols-10 gap-4 my-5">
                            {similarNumbers.map((number, index) => (
                                <button key={index} className="btn w-[60px] mx-auto">{number.toString().padStart(2, '0')}</button>
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
