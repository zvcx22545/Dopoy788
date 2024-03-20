import PropTypes from "prop-types";
import "./numpad.css";
import { useState, useEffect } from "react";

function NumpadLotto({ addCompletedNumbers, numberOfDigits, activeButtons, onEnButtonClick }) {
    const [numbers, setNumbers] = useState(Array(numberOfDigits).fill(""));
    const [enButtonClicked, setEnButtonClicked] = useState(false);

   
    useEffect(() => {
        setNumbers(Array(numberOfDigits).fill("")); // Reset when numberOfDigits changes
    }, [numberOfDigits]);

    useEffect(() => {
        if (numbers.every(num => num !== "") && enButtonClicked) { // Check if numbers are complete and EN button is clicked
            addCompletedNumbers(numbers.join(""), activeButtons, enButtonClicked); // Pass activeButtons and enButtonClicked to addCompletedNumbers
            setNumbers(Array(numberOfDigits).fill("")); // Reset the numbers array
            setEnButtonClicked(false); // Reset enButtonClicked to false after sending data
        }
    }, [numbers, addCompletedNumbers, numberOfDigits, activeButtons, enButtonClicked]);
    

    const handleAddNumber = (number) => {
        const index = numbers.findIndex(num => num === "");
        if (index !== -1) {
            const updatedNumbers = [...numbers];
            updatedNumbers[index] = number;
            setNumbers(updatedNumbers);
        }
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            const digit = parseInt(event.key, 10);
            if (!isNaN(digit)) {
                handleAddNumber(digit);
            }
            else if (event.key === "Enter") {
                setEnButtonClicked(true);
                }
        };

        document.addEventListener("keypress", handleKeyPress);

        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    }, [handleAddNumber]);
    
    const DelefromKeyboard = (event) => {
        if (event.key === "Backspace") {
            handleDeleteNumber();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", DelefromKeyboard);

        return () => {
            document.removeEventListener("keydown", DelefromKeyboard);
        };
    }, [numbers]);
    
    
    const handleDeleteNumber = () => {
        const index = numbers.slice().reverse().findIndex(num => num !== "");
        if (index !== -1) {
            const updatedNumbers = [...numbers];
            updatedNumbers[numbers.length - 1 - index] = "";
            setNumbers(updatedNumbers);
        }
    };

    const handleEnButtonClick = () => {
        setEnButtonClicked(true);
        console.log(enButtonClicked);
        onEnButtonClick(true); // Call the onEnButtonClick function and pass true as an argument
    };


    return (
        <div>
            <div className="numpad-con max-md:mb-[3rem]">
                <div className="tab-con">
                    <div className="tab-left-con"></div>
                </div>
                <div className="container-number flex flex-col justify-center items-center mx-auto">
                    <div className="flex items-center justify-center gap-2 py-4">
                        {numbers.slice(0, numberOfDigits).map((number, index) => (
                            <div
                                key={index}
                                className="shownumber display-number flex h-[75px] w-[79px] rounded-lg items-center justify-center p-2 text-3xl font-medium shadow-none border-solid border-[2px] border-[#4400A5]">
                                {number}
                            </div>
                        ))}
                    </div>
                    <div className="mx-auto grid max-w-[22rem] w-full grid-cols-3 gap-2 pb-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <button key={num} className="numpad min-h-[43px] py-1.5 text-xl outline-none text-white bg-[#4400A5]" type="button" onClick={() => handleAddNumber(num)}>
                                <div className="addnumber flex items-center justify-center"><span>{num}</span></div>
                            </button>

                        ))}

                        <button
                            className="numpad min-h-[43px] py-1.5 text-xl outline-none text-white bg-[#FF832970]"
                            type="button" onClick={() => handleDeleteNumber(0)}                         >
                            <div className="delete-numberflex flex items-center justify-center text-[#4400A5]">
                                <svg
                                    data-v-61516463=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6"

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                        <button className="numpad min-h-[43px] py-1.5 text-xl outline-none text-white bg-[#4400A5]" type="button" onClick={() => handleAddNumber(0, 0)}>
                            <div className="addnumber flex items-center justify-center">
                                <span>0</span>
                            </div>
                        </button>
                        <button
                            className="numpad min-h-[43px] py-1.5 text-xl outline-none text-white bg-[#FF832970]"
                            type="button"
                            onClick={handleEnButtonClick}
                            // disabled={enButtonClicked}
                        >
                            <div className="flex items-center justify-center text-[#4400A5]">
                                <span>Enter</span>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

NumpadLotto.propTypes = {
    addCompletedNumbers: PropTypes.func.isRequired,
    numberOfDigits: PropTypes.number.isRequired,
    activeButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
    onEnButtonClick: PropTypes.func.isRequired, // Define onEnButtonClick prop type
};
export default NumpadLotto;
