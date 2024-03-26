import { useState, useEffect } from "react";
import './card.css';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";
import Aboardcard from "./aboardcard";
export default function Card({ displayText,imghuy }) {

    const imgSrc =
    displayText === "หวยไทย" || displayText === "หวยหุ้นไทย"
      ? imghuy.Huaythais
      : displayText === "หวยลาว"
      ? imghuy.HuayLao
      : displayText === "หวยฮานอย"
      ? imghuy.Huayhanoi
      : "https://placehold.co/50x50";

    const bankname = {
        BAAC:"https://s.isanook.com/mn/0/ud/175/877323/fack.jpg",
        GSB:"https://www.gsb.or.th/gsb-theme/images/Sharing_Default.jpg",
        GVM:"https://news.mthai.com/app/uploads/2019/01/dfsg.png"
    }
    const aboardHuay ={
        china: "https://t4.ftcdn.net/jpg/00/42/09/99/360_F_42099910_vtsWg2oz6uFviZQyQ3Z8iqepex9SfRuR.jpg",
        korea:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png",
        USA:"https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
        ENG:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
        Singapore:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png",
        Taiwan:"https://cdn.britannica.com/62/4562-004-C04E54C5/Flag-Taiwan.jpg",
        Eygypt:"https://www.shutterstock.com/image-vector/flag-egypt-egyptian-illustration-official-260nw-2263393185.jpg",
        Malaysia:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/2560px-Flag_of_Malaysia.svg.png",
        Japn:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    }

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
    <div className="card ">
        <div className="grid grid-cols-3">
            {/* <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                    <img src={imgSrc} alt="Vietnam flag" className=" h-[50px] w-[70px]" />

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
            
            <div className="bg-[#4400A5] rounded-lg text-white flex items-center justify-center p-3 mb-4 gap-2">
            <FaRegClock size={25} />
                <span className="countdown text-white text-2xl text-center">
                    {countdown}
                </span>
            </div>
            <Link to="/play"><button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button></Link>
            </div> */}
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                    <img src={displayText === "หวยไทย" ? bankname.GVM : displayText === "หวยหุ้นต่างประเทศ" ? aboardHuay.USA: imgSrc} alt="Vietnam flag" className=" h-[50px] w-[70px]" />

                    <div className="card-body p-2 ">
                        <h2 className="text-3xl font-bold text-[#4400A5]">
                        {displayText === "หวยไทย" ? "กองสลากรัฐบาล"
                         : displayText === "หวยหุ้นต่างประเทศ" ? "หุ้นดาวโจนส์"
                         : displayText}</h2>
                        <p className="text-lg text-[#7B7B7B]">งวดวันที่ 14 ธันวาคม 2023</p>
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
            <Link to="/play" onClick={() => {
            const chosenText = displayText === "หวยไทย" ? "กองสลากรัฐบาล" : displayText === "หวยหุ้นต่างประเทศ" ? "หุ้นดาวโจนส์" : displayText;
            const chosenImage = displayText === "หวยไทย" ? bankname.GVM : displayText === "หวยหุ้นต่างประเทศ" ? aboardHuay.USA : imgSrc;
            localStorage.setItem('displayText', chosenText);
            localStorage.setItem('chosenImage', chosenImage);
            }}>
              <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </Link>
            </div>

            
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                    <img src={displayText === "หวยไทย" ? bankname.GSB : displayText === "หวยหุ้นต่างประเทศ" ? aboardHuay.china: imgSrc} alt="Vietnam flag" className=" h-[50px] w-[70px]" />

                    <div className="card-body p-2 ">
                        <h2 className="text-3xl font-bold text-[#4400A5]"> {displayText === "หวยไทย" ? "หวย ออมสิน" : displayText === "หวยหุ้นต่างประเทศ" ? "หุ้นจีน": displayText}</h2>
                        <p className="text-lg text-[#7B7B7B]">งวดวันที่ 14 ธันวาคม 2023</p>
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
                    {countdown}
                </span>
            </div>
            <Link to="/play" onClick={() => {
            const chosenText = displayText === "หวยไทย" ? "หวย ออมสิน" : displayText === "หวยหุ้นต่างประเทศ" ? "หุ้นจีน": displayText;
            const chosenImage = displayText === "หวยไทย" ? bankname.GSB : displayText === "หวยหุ้นต่างประเทศ" ? aboardHuay.china: imgSrc;
            localStorage.setItem('displayText', chosenText);
            localStorage.setItem('chosenImage', chosenImage);
            }}>
              <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </Link>
            </div>
            
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                <img src={displayText === "หวยไทย" ? bankname.BAAC : displayText === "หวยหุ้นต่างประเทศ" ? aboardHuay.korea: imgSrc} alt="Vietnam flag" className=" h-[50px] w-[70px]" />
                    <div className="card-body p-2 ">
                        <h2 className="text-3xl font-bold text-[#4400A5]">{displayText === "หวยไทย" ? "หวย ธกส" : displayText === "หวยหุ้นต่างประเทศ" ? "หุ้นเกาหลี": displayText}</h2>
                        <p className="text-lg text-[#7B7B7B]">งวดวันที่ 14 ธันวาคม 2023</p>
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
            <Link to="/play" onClick={() => {
            const chosenText = displayText === "หวยไทย" ? "หวย ธกส" : displayText === "หวยหุ้นต่างประเทศ" ? "หุ้นเกาหลี": displayText;
            const chosenImage = displayText === "หวยไทย" ? bankname.BAAC : displayText === "หวยหุ้นต่างประเทศ" ? aboardHuay.korea: imgSrc;
            localStorage.setItem('displayText', chosenText);
            localStorage.setItem('chosenImage', chosenImage);
            }}>
              <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </Link>
            </div>

            {displayText === "หวยหุ้นต่างประเทศ" && (
                <Aboardcard displayText={"หุ้นอังกฤษ"} aboardHuay={aboardHuay.ENG}/>
            )}
            {displayText === "หวยหุ้นต่างประเทศ" && (
                <Aboardcard displayText={"หุ้นสิงคโปร์"} aboardHuay={aboardHuay.Singapore}/>
            )}
            {displayText === "หวยหุ้นต่างประเทศ" && (
                <Aboardcard displayText={"หุ้นไต้หวัน"} aboardHuay={aboardHuay.Taiwan}/>
            )}
            {displayText === "หวยหุ้นต่างประเทศ" && (
                <Aboardcard displayText={"หุ้นอียิปต์"} aboardHuay={aboardHuay.Eygypt}/>
            )}
            {displayText === "หวยหุ้นต่างประเทศ" && (
                <Aboardcard displayText={"หวยมาเลย์"} aboardHuay={aboardHuay.Malaysia}/>
            )}
            {displayText === "หวยหุ้นต่างประเทศ" && (
                <Aboardcard displayText={"หุ้นญี่ปุ่น"} aboardHuay={aboardHuay.Japn}/>
            )}

        </div>  
    </div>
    
  );

}
Card.propTypes = {
    displayText: PropTypes.string.isRequired,
    imghuy: PropTypes.shape({
      Huaythais: PropTypes.string.isRequired,
      HuayLao: PropTypes.string.isRequired,
      Huayhanoi: PropTypes.string.isRequired,
      Huayyiki: PropTypes.string.isRequired
    }).isRequired
  };
