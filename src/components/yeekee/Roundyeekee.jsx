import { useState, useEffect } from "react";
import './yeekeecard.css';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

export default function Roundyeekee() {
    const [countdownTimes, setCountdownTimes] = useState([]);
    const [displayText, setDisplayText] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(false);

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
            const newCountdownTimes = [...Array(90)].map((_, index) => {
                const cardTime = new Date();
                cardTime.setHours(4, 30 + index * 15, 0); // Starting time changed to 4:30 AM
                
                const differenceInSeconds = (cardTime - now) / 1000;
                if (differenceInSeconds < 0) {
                    return "EXPIRED";
                } else {
                    const hours = Math.floor(differenceInSeconds / 3600).toString().padStart(2, '0');
                    const minutes = Math.floor((differenceInSeconds % 3600) / 60).toString().padStart(2, '0');
                    const seconds = Math.floor(differenceInSeconds % 60).toString().padStart(2, '0');
                    return `${hours}:${minutes}:${seconds}`;
                }
            });
            setCountdownTimes(newCountdownTimes);
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
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
                            {[...Array(90)].map((_, index) => {
                                const cardStartTime = new Date();
                                cardStartTime.setHours(4);
                                cardStartTime.setMinutes(30 + index * 15); // Increment by 15 minutes for each card
                                return (
                                    <div key={index} className="card bg-white mt-[1rem] ">
                                        <div className="flex items-center justify-start mb-4 gap-2 w-full">
                                            <div className="round-con flex items-center bg-[#4400A5] justify-center text-center top-0 h-12 w-12 drop-shadow-md border boder-solid rounded-full ">
                                                <div className="round text-[16px] text-white">{index + 1}</div>
                                            </div>
                                            <div className="card-body p-2 ">
                                                <h2 className="text-2xl font-bold text-[#4400A5]">{displayText}</h2>
                                                <p className="text-sm text-[#7B7B7B]">งวดวันที่ 14 ธันวาคม 2023</p>
                                            </div>
                                        </div>
                                        <div className="divider divider-primary "></div>

                                        <div className="text-center lg:text-left mb-4">
                                            <h1 className="text-xl">ปิดรับ : {cardStartTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</h1>
                                        </div>

                                        <div className="bg-[#4400A5] rounded-lg text-white flex items-center justify-center p-3 mb-4 gap-2">
                                            <FaRegClock size={25} />
                                            <span className="countdown text-white text-2xl text-center">
                                                {countdownTimes[index]}
                                            </span>
                                        </div>
                                        <Link to="/yeekee/playyeekee">
                                            <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">
                                                {countdownTimes[index] === "EXPIRED" ? "ปิดรับ" : "ใส่เลขแทง"}
                                            </button>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-base-300 w-[90%] my-[2rem] m-auto">
                    <input type="checkbox" className="peer flex m-auto" id="collapse-input" />
                    <div className="collapse-title text-xl font-medium text-center text-white bg-[#4400A5]" onClick={handleCollapse}>
                        ปิดรับ
                    </div>
                    <div className={`collapse-content ${isCollapsed ? 'animate-fade-down animate-once animate-duration-700 animate-delay-[200ms] animate-ease-out' : 'animate-fade-down animate-once animate-duration-300 animate-delay-100 animate-ease-out'}`}>
                        <div className="grid grid-cols-5 gap-2">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
