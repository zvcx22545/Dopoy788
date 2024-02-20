import { BiGridAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import "./Title.css"

function Title2(){
    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {
        // ทำให้ปุ่มแรกถูกเลือกไว้เมื่อโหลดเสร็จสิ้น
        setActiveButton(0);
    }, []);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };
    return(
        <section>
            <div className="gap-4 w-40">
              <div className="divider divider-end text-xl">
                เลือกประเภทการแทง
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-5 max-md:grid-cols-1">
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                    <button
                        key={index}
                        className={`btn ${activeButton === index ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        <BiGridAlt />
                        {(() => {
                            switch (index) {
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
                        <div className="badge badge-primary">1,000</div>
                    </button>
                ))}
            
            </div>
            <div className="gap-4 w-40 ">
                <div className="divider divider-end text-xl">กดเลข</div>
              </div>
        </section>
    )
}
export default Title2