import { useState, useEffect } from "react";
import './yeekeecard.css';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

export default function Roundyeekee(){
    const [countdown, setCountdown] = useState(0);
    const [countdown2, setCountdown2] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [chosenImage, setChosenImage] = useState('');


    useEffect(() => {
        const storedDisplayText = localStorage.getItem('displayText');
        if (storedDisplayText) {
          setDisplayText(storedDisplayText);
          // Optionally, clear the stored value after retrieving it
          localStorage.removeItem('displayText');
        }
      
        const storedChosenImage = localStorage.getItem('chosenImage');
        if (storedChosenImage) {
          setChosenImage(storedChosenImage);
          // Optionally, clear the stored value after retrieving it
          localStorage.removeItem('chosenImage');
        }
      }, []);
      
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
    return(
        <section className="yeekee-con">
        <Navbar/>
                <div className="card-con">
                <div className="grid grid-cols-6 gap-2">
                <div className="card bg-white mt-[5rem] ms-[1rem] ">
                <div className="flex items-center justify-start mb-4 gap-2 w-full">
                <div className="round-con flex items-center bg-[#4400A5] justify-center text-center top-0 h-12 w-12 drop-shadow-md border boder-solid rounded-full ">
                    <div className="round text-[16px] text-white">1</div>
                </div>
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
                    {countdown2}
                </span>
            </div>
            <Link to="/yeekee/playyeekee" onClick={() => {
        const chosenText = displayText === "หวยไทย" ? "หวย ธกส" : displayText === "หวยหุ้นต่างประเทศ" ? "หุ้นเกาหลี" : displayText;
        const chosenImage = displayText === "หวยไทย" ? imghuy.Huaythais : displayText === "หวยหุ้นต่างประเทศ" ? imghuy.HuayLao : imghuy.Huayyiki;
        localStorage.setItem('displayText', chosenText);
        localStorage.setItem('chosenImage', chosenImage);
      }}>
        <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
      </Link>
            </div>
                </div>
                </div>
        </section>
    )
}