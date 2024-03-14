import { useState, useEffect } from "react";
import './yeekeecard.css';
import { Link } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

export default function Roundyeekee() {
    const [activeCards, setActiveCards] = useState([]);
    const [expiredCards, setExpiredCards] = useState([]);
    const [displayText, setDisplayText] = useState('หวยยี่กี่วิเดียว');
    const [isCollapsed, setIsCollapsed] = useState(false);
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
        const storedDisplayText = localStorage.getItem('displayText');
        if (storedDisplayText) {
            setDisplayText(storedDisplayText);
            localStorage.removeItem('displayText');
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const newActiveCards = [];
            const newExpiredCards = [];
            
            [...Array(90)].forEach((_, index) => {
                const cardTime = new Date();
                cardTime.setHours(4, 30 + index * 15, 0); // Starting time changed to 4:30 AM
                
                const differenceInSeconds = (cardTime - now) / 1000;
                const card = {
                    index: index,
                    countdown: '',
                };
                if (differenceInSeconds < 0) {
                    card.countdown = "ปิดรับแทง";
                    newExpiredCards.push(card);
                } else {
                    const hours = Math.floor(differenceInSeconds / 3600).toString().padStart(2, '0');
                    const minutes = Math.floor((differenceInSeconds % 3600) / 60).toString().padStart(2, '0');
                    const seconds = Math.floor(differenceInSeconds % 60).toString().padStart(2, '0');
                    card.countdown = `${hours}:${minutes}:${seconds}`;
                    newActiveCards.push(card);
                }
            });
    
            setActiveCards(newActiveCards);
            setExpiredCards(newExpiredCards);
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const renderCard = (card) => {
        const cardStartTime = new Date();
        cardStartTime.setHours(4);
        cardStartTime.setMinutes(30 + card.index * 15); // Increment by 15 minutes for each card
    
        // Define the background color based on the countdown
        let cardClass = "";
        let numcard = "";
        let countdowncard = "";
        let countdowncon = "";
        let TextTitle = "";
        let TextsubTitle = "";
        let Animate = "";
        if (card.countdown === "ปิดรับแทง") {
            cardClass = "bg-white";
            numcard = "text-white drop-shadow-md";
        } else {
            const countdownParts = card.countdown.split(":");
            let remainingMinutes = parseInt(countdownParts[0]) * 60 + parseInt(countdownParts[1]);
            if (remainingMinutes < 15) {
                cardClass = "bg-[#4400A5] card-active";
                numcard = "drop-shadow-md bg-[#fff] rounded-full text-[#4400A5]"
                countdowncard = "text-white"
                countdowncon = "bg-black"
                TextTitle = "text-white";
                TextsubTitle = "text-white";
                // Animate = "animate-bounce animate-infinite animate-duration-[800ms] animate-delay-100 animate-ease-linear";

            } else {
                cardClass = "bg-white";
                numcard = "text-white drop-shadow-md";
                TextTitle = "text-[#4400A5]";
                TextsubTitle = "text-[#7B7B7B]";
            }
        }

        return (
            <div key={card.index} className={`card ${cardClass} mt-[1rem] ${Animate}`}>
                <div className="flex items-center justify-start mb-4 gap-2 w-full">
                    <div className={`round-con flex items-center bg-[#4400A5] justify-center text-center top-0 h-12 w-12 drop-shadow-md border boder-solid rounded-full ${numcard}`}>
                        <div className="round text-[16px] ">{card.index + 1}</div>
                    </div>
                    <div className="card-body p-2">
                        <h2 className={`text-2xl font-bold ${TextTitle}`}>{displayText}</h2>
                        <p className={`text-sm  ${TextsubTitle}`}>งวดวันที่ {currentDate}</p>
                    </div>
                </div>
                <div className="divider divider-primary"></div>
                <div className={`text-center lg:text-left mb-4 ${countdowncard}`}>
                    <h1 className="text-xl">ปิดรับ : {cardStartTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</h1>
                </div>
                <div className={`bg-[#4400A5] rounded-lg text-white flex items-center justify-center p-3 mb-4 gap-2 ${countdowncon}`}>
                    <FaRegClock size={25} />
                    <span className="countdown text-white text-2xl text-center">
                        {card.countdown}
                    </span>
                </div>
                <Link to="/yeekee/playyeekee">
                    <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">
                        {card.countdown === "ปิดรับแทง" ? "ปิดรับ" : "ใส่เลขแทง"}
                    </button>
                </Link>
            </div>
        );
    };

    return (
        <section className="yeekee-con">
            <Navbar />
            <div className="card-con">
                <div className="collapse collapse-arrow border border-base-300 w-[90%] my-[2rem] m-auto">
                    <input type="checkbox" className="peer flex m-auto" id="collapse-input" />
                    <div className="collapse-title text-xl font-medium text-center text-white bg-[#4400A5]" onClick={handleCollapse}>
                        เปิดรับ
                    </div>
                    <div className={`collapse-content ${isCollapsed ? 'animate-fade-down animate-once animate-duration-700 animate-delay-[200ms] animate-ease-out' : 'animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-out'}`}>
                        <div className="grid grid-cols-5 gap-2">
                            {activeCards.map(renderCard)}
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 w-[90%] my-[2rem] m-auto">
                    <input type="checkbox" className="peer flex m-auto" id="collapse-input-2" />
                    <div className="collapse-title text-xl font-medium text-center text-white bg-[#4400A5]" onClick={handleCollapse}>
                        ปิดรับ
                    </div>
                    <div className={`collapse-content ${isCollapsed ? 'animate-fade-down animate-once animate-duration-700 animate-delay-[200ms] animate-ease-out' : 'animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-out'}`}>
                        <div className="grid grid-cols-5 gap-2">
                            {expiredCards.map(renderCard)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}