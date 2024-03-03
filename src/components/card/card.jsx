import React, { useState, useEffect } from "react";
import './card.css';
import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";

export default function Card({ displayText }) {
    const [countdown, setCountdown] = useState(0);
    const [countdown2, setCountdown2] = useState(0);
    useEffect(() => {
        const countdownDate = new Date(Date.now() + 500 * 60 * 1000); // 2 minutes from now
        const countdownDate2 = new Date(Date.now() + 350 * 60 * 1000); // 2 minutes from now

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCountdown(`${hours}:${minutes}:${seconds}`);
            if (distance < 0) {
                clearInterval(interval);
                setCountdown("EXPIRED");
            }
        }, 1000);

        const interval2 = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate2 - now;
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCountdown2(`${hours}:${minutes}:${seconds}`);
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
    <div className="card ">
        <div className="grid grid-cols-4 ">
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                        <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-10 h-10 rounded-full" />
                    <div className="card-body p-2 ">
                        <h2 className="text-2xl font-bold text-[#4400A5]"> {displayText}</h2>
                        <p className="text-sm text-[#7B7B7B]">งวดวันที่ 14 ธันวาคม 2023</p>
                    </div>
                 </div>
            <div className="divider divider-primary "></div>

            <div className="text-center lg:text-left mb-4">
                <h1 className="text-xl">ปิดรับ : 14 / 12/ 2023</h1>
                <h1 className="text-xl">เวลา : 14.30 น.</h1>
            </div>
            
            <div className="bg-[#4400A5] rounded-lg text-white flex items-center justify-center p-3 mb-4">
            <FaRegClock size={25} />
                <span className="countdown text-white text-2xl text-center">
                    {countdown}
                </span>
            </div>
            <Link to="/play"><button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button></Link>
            </div>
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                        <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-10 h-10 rounded-full" />
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
            
            <div className="bg-[#4400A5] rounded-lg text-white flex items-center justify-center p-3 mb-4">
            <FaRegClock size={25} />
                <span className="countdown text-white text-2xl text-center">
                    {countdown2}
                </span>
            </div>
            <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </div>
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                        <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-10 h-10 rounded-full" />
                    <div className="card-body p-2 ">
                        <h2 className="text-2xl font-bold text-[#4400A5]"> {displayText}</h2>
                        <p className="text-sm text-[#7B7B7B]">งวดวันที่ 14 ธันวาคม 2023</p>
                    </div>
                 </div>
            <div className="divider divider-primary "></div>

            <div className="text-center lg:text-left mb-4">
                <h1 className="text-xl">ปิดรับ : 14 / 12/ 2023</h1>
                <h1 className="text-xl">เวลา : 14.30 น.</h1>
            </div>
            
            <div className="bg-[#4400A5] rounded-lg text-white flex items-center justify-center p-3 mb-4">
            <FaRegClock size={25} />
                <span className="countdown text-white text-2xl text-center">
                    {countdown}
                </span>
            </div>
                <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </div>
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                        <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-10 h-10 rounded-full" />
                    <div className="card-body p-2 ">
                        <h2 className="text-2xl font-bold text-[#4400A5]"> {displayText}</h2>
                        <p className="text-sm text-[#7B7B7B]">งวดวันที่ 14 ธันวาคม 2023</p>
                    </div>
                 </div>
            <div className="divider divider-primary "></div>

            <div className="text-center lg:text-left mb-4">
                <h1 className="text-xl">ปิดรับ : 14 / 12/ 2023</h1>
                <h1 className="text-xl">เวลา : 14.30 น.</h1>
            </div>
            

            <div className="bg-[#4400A5] rounded-lg text-white flex items-center justify-center p-3 mb-4">
            <FaRegClock size={25} />
                <span className="countdown text-white text-2xl text-center">
                    {countdown2}
                </span>
            </div>
                <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </div>
        </div>  
    </div>
  );
}
