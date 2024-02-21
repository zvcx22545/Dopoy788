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
    };

    const generateSimilarNumbers = (number) => {
        const similarNumbers = [];
        const numberString = number.toString().padStart(4, '0');
        for (let i = 0; i < 10000; i++) {
            const iString = i.toString().padStart(4, '0');
            let matched = true;
            // Check if the generated number is exactly the same as the input number
            if (numberString === iString) {
                matched = false;
            } else {
                for (let j = 0; j < 4; j++) {
                    if (!numberString.includes(iString[j])) {
                        matched = false;
                        break;
                    }
                }
            }
            if (matched) {
                similarNumbers.push(i);
            }
        }
        return similarNumbers;
    };
    
    const handleInputNumberChange = (e) => {
        let inputValue = e.target.value.trim(); // ลบช่องว่างที่อาจเป็นไปได้
        
        // ตรวจสอบความยาวของค่าที่ป้อนมา และไม่ให้เกิน 4 ตัว
        if (inputValue.length > 4) {
            // แสดง alert แจ้งเตือน
            swal("คำเตือน!", "กรุณากรอกเฉพาะตัวเลข 4 ตัวเท่านั้น", "warning");
            // หากเกิน 4 ตัวให้ไม่เพิ่มค่าที่ป้อนลงไป
            e.preventDefault();
        }
    
        // ตรวจสอบว่าค่าที่ป้อนมีแต่ตัวเลข
        if (!/^\d*$/.test(inputValue)) {
            // หากมีอักขระที่ไม่ใช่ตัวเลขให้เปลี่ยนเป็นค่าว่าง
            inputValue = '';
        }
    
        const number = inputValue.padStart(4, '0'); // ใส่ 0 ข้างหน้าถ้าน้อยกว่า 4 ตัว
        const similarNumbers = generateSimilarNumbers(number);
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
                <input type="text" maxLength="4" className="w-[380px] text-center border border-[#4400A5] rounded" onInput={handleInputNumberChange} max="9999"/>
            </div>
            <div className="border border-[#4400A5] rounded p-5">
                <div className="flex justify-between items-center">
                    <h1>ตัวอย่างเลข</h1>
                    <button className="add bg-[#FF8329] ">เพิ่มเลขทั้งหมด</button>
                </div>
                <div className="flex">
                    <p className="bg-[#4400A5] text-white rounded p-3">สี่ตัวบน ( {similarNumbers.length} )</p>
                </div>
                <div className="grid grid-cols-10 gap-4 my-5">
                    {similarNumbers.map((number, index) => (
                        <button key={index} className="btn w-[60px] mx-auto">{number.toString().padStart(4, '0')}</button>
                    ))}
                </div>
            </div>
            </section>
            )}

            {[1, 2].includes(activeButton) && (
                <section>
                    
                </section>
            )}
                        
        </section>
    );
}

export default Title3;
