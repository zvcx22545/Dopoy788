import { useState, useEffect } from "react";
import { BiGridAlt } from "react-icons/bi";
import "./Title.css";

function getPageRangeC1(currentPage, numbersPerPage) {
    const start = (currentPage - 1) * numbersPerPage;
    const end = start + numbersPerPage - 1;
    return `${start.toString().padStart(4, '0')} - ${end.toString().padStart(4, '0')}`;
}
function getPageRangeC2(currentPage, numbersPerPage) {
    const start = (currentPage - 1) * numbersPerPage;
    const end = start + numbersPerPage - 1;
    return `${start.toString().padStart(3, '0')} - ${end.toString().padStart(3, '0')}`;
}

function Title2() {
    const [activeButton, setActiveButton] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    let [numbersPerPage, setNumbersPerPage] = useState(1000); // จำนวนเลขต่อหน้า

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
                setSelectedNumbers(Array.from({ length: 9+1 }, (_, i) => i));
                setNumbersPerPage(100);
                break;
            case 6:
                setSelectedNumbers(Array.from({ length: 9+1 }, (_, i) => i));
                setNumbersPerPage(100);
                break;
            default:
                setSelectedNumbers([]);
                setNumbersPerPage(1000);
        }
    };

    const indexOfLastNumber = currentPage * numbersPerPage;
    const indexOfFirstNumber = indexOfLastNumber - numbersPerPage;
    const currentNumbers = selectedNumbers.slice(indexOfFirstNumber, indexOfLastNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(selectedNumbers.length / numbersPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (number) => {
        setCurrentPage(number);
    };

    return (
        <section>
            <div className="gap-4 w-40">
                <div className="divider divider-end text-xl">
                    เลือกประเภทการแทง
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4  max-md:grid-cols-1">
                {[0, 1, 2, 3, 4, 5, 6].map((buttonIndex) => (
                    <button
                        key={buttonIndex}
                        className={`btn ${activeButton === buttonIndex ? 'active' : ''}`}
                        onClick={() => {
                            setActiveButton(buttonIndex);
                            setCurrentPage(1);
                        }}
                    >
                        <BiGridAlt />
                        {(() => {
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
                        <div className="badge badge-primary">1,000</div>
                    </button>
                ))}
            </div>
            <div className="gap-4 w-40 p-[1.25rem]">
                <div className="divider divider-end text-xl">กดเลข</div>
            </div>

            {activeButton === 0 && (
                <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-10 gap-y-4 gap-x-5 max-md:grid-cols-5 ">
                        {pageNumbers.map(number => (
                            <button key={number} className={`btn w-[60px] mx-auto ${currentPage === number ? 'active' : ''}`} onClick={() => handleClick(number)}>
                                {number === 1 ? '0000' : ((number - 1) * 1000).toString().padStart(4, '0')}
                            </button>
                        ))}
                    </div>
                    <div className="w-full bg-[#4400A5] p-3 rounded mt-4 text-white">
                        <h1 className="flex justify-center">{getPageRangeC1(currentPage, numbersPerPage)}</h1>
                    </div>
                </div>
            )}

            {activeButton === 1 && (
                <div className="grid grid-cols-1 gap-4 ">
                    <div className="grid grid-cols-10 gap-4 max-md:grid-cols-5">
                        {pageNumbers.map(number => (
                            <button key={number} className={`btn w-[60px] mx-auto ${currentPage === number ? 'active' : ''}`} onClick={() => handleClick(number)}>
                                {number === 1 ? '000' : ((number - 1) * 100).toString().padStart(3, '0')}
                            </button>
                        ))}
                    </div>
                    <div className="w-full bg-[#4400A5] p-3 rounded mt-4 text-white">
                        <h1 className="flex justify-center">{getPageRangeC2(currentPage, numbersPerPage)}</h1>
                    </div>
                </div>
            )}

            {activeButton === 2 && (
                <div className="grid grid-cols-1 gap-4  ">
                    <div className="grid grid-cols-10 gap-4 max-md:grid-cols-5">
                        {pageNumbers.map(number => (
                            <button key={number} className={`btn w-[60px] mx-auto ${currentPage === number ? 'active' : ''}`} onClick={() => handleClick(number)}>
                                {number === 1 ? '000' : ((number - 1) * 100).toString().padStart(3, '0')}
                            </button>
                        ))}
                    </div>
                    <div className="w-full bg-[#4400A5] p-3 rounded mt-4 text-white">
                        <h1 className="flex justify-center">{getPageRangeC2(currentPage, numbersPerPage)}</h1>
                    </div>
                </div>
            )}

            {[0, 1, 2].includes(activeButton) && (
                <div className="grid grid-cols-1 gap-4 mt-10">
                    <div className="grid grid-cols-10 gap-y-4 max-md:grid-cols-5">
                        {currentNumbers.map((number) => (
                            <button key={number} className="btn w-[60px] mx-auto">
                                {number.toString().padStart(activeButton === 0 ? 4 : 3, '0')}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {[3,4].includes(activeButton) && (
                <div className="grid grid-cols-10 gap-4 p-5 max-md:grid-cols-5">
                {currentNumbers.map((number) => (
                    <button key={number} className="btn w-[60px] mx-auto">
                        {number.toString().padStart(2, '0')}
                    </button>
                ))}
            </div>
            )}      

            {[5,6].includes(activeButton) && (
                <div className="grid grid-cols-10 gap-y-4  max-md:grid-cols-5">
                    {currentNumbers.map((number) => (
                        <button key={number} className="btn w-[60px] mx-auto">
                            {number}
                        </button>
                    ))}
                </div>
            )}
            
        </section>
    );
}

export default Title2;