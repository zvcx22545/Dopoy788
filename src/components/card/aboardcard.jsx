import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import PropTypes from 'prop-types';

function Aboardcard({ displayText, aboardHuay }) {
    const [countdown, setCountdown] = useState(0);
    const [countdown2, setCountdown2] = useState(0);
    useEffect(() => {
        const countdownDate = new Date(Date.now() + 5000 * 60 * 1000); // 2 minutes from now
        const countdownDate2 = new Date(Date.now() + 350 * 60 * 1000); // 2 minutes from now

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (days > 0) {
                setCountdown(`${days} วัน ${hours}:${minutes}:${seconds}`);
            } else {
                setCountdown(`${hours}:${minutes}:${seconds}`);
            }
            if (distance < 0) {
                clearInterval(interval);
                setCountdown("EXPIRED");
            }
        }, 1000);

        const interval2 = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate2 - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (days > 0) {
                setCountdown2(`${days} days`);
            } else {
                setCountdown2(`${hours}:${minutes}:${seconds}`);
            }
            if (distance < 0) {
                clearInterval(interval2);
                setCountdown2("EXPIRED");
            }
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(interval2);
        };
    }, []);

    return (
        <div className="bg-white  ">
        <div className="flex items-center justify-start mb-4 gap-2 ">
        <img src={aboardHuay} alt="Vietnam flag" className=" h-[50px]" />
            <div className="card-body p-2 ">
                <h2 className="text-2xl font-bold text-[#4400A5]">{displayText}</h2>
                <p className="text-sm text-[#7B7B7B]">งวดวันที่ 14 ธันวาคม 2023</p>
            </div>
         </div>
    <div className="divider divider-primary "></div>

    <div className="text-center lg:text-left mb-4">
        <h1 className="text-xl">ปิดรับ : 14 / 12/ 2023</h1>
        <h1 className="text-xl">เวลา : 14.30 น.</h1>
    </div>
    
    <div className="bg-[#4400A5] rounded-lg text-white flex items-center justify-center p-3 mb-4 gap-2">
    <FaRegClock size={25} />
    <span className="countdown text-white text-2xl text-center">
        {displayText === "หวยมาเลย์" ? `${countdown2}`:displayText === "หุ้นสิงคโปร์" ? `${countdown2}` : countdown}
    </span>
    </div>
    <Link to="/play" onClick={() => {
    const chosenText = displayText;
    const chosenImage = aboardHuay;
    localStorage.setItem('displayText', chosenText);
    localStorage.setItem('chosenImage', chosenImage);
    }}>
      <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
    </Link>
    </div>
    );
}
Aboardcard.propTypes = {
    displayText: PropTypes.string.isRequired,
    aboardHuay: PropTypes.string.isRequired,
}

export default Aboardcard;
