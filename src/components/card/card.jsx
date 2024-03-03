import './card.css';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";

export default function Card({ displayText,imghuy }) {

    const imgSrc =
    displayText === "หวยไทย" || displayText === "หวยหุ้นไทย"
      ? imghuy.Huaythais
      : displayText === "หวยลาว"
      ? imghuy.HuayLao
      : displayText === "หวยฮานอย"
      ? imghuy.Huayhanoi
      : displayText === "หวยยี่กีวิเดียว"
      ? imghuy.Huayyiki
      : "https://placehold.co/50x50";
  

  return (
    <div className="card ">
        <div className="grid grid-cols-4 ">
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                    <img src={imgSrc} alt="Vietnam flag" className="w-[20%]" />

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
                     <span className="countdown text-white  text-2xl text-center">
                        <span style={{"--value":10}}></span>:
                        <span style={{"--value":24}}></span>:
                        <span style={{"--value":54}}></span>
                    </span>
            </div>
            <Link to="/play"><button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button></Link>
            </div>
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                        <img src={imgSrc} alt="Vietnam flag" className="w-[20%]" />
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
                     <span className="countdown text-white  text-2xl text-center">
                        <span style={{"--value":10}}></span>:
                        <span style={{"--value":24}}></span>:
                        <span style={{"--value":54}}></span>
                    </span>
            </div>
            <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </div>
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                    <img src={imgSrc} alt="Vietnam flag" className="w-[20%]" />

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
                     <span className="countdown text-white  text-2xl text-center">
                        <span style={{"--value":10}}></span>:
                        <span style={{"--value":24}}></span>:
                        <span style={{"--value":54}}></span>
                    </span>
            </div>
                <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </div>
            <div className="bg-white  ">
                <div className="flex items-center justify-start mb-4 gap-2 ">
                    <img src={imgSrc} alt="Vietnam flag" className="w-[20%]" />

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
                     <span className="countdown text-white  text-2xl text-center">
                        <span style={{"--value":10}}></span>:
                        <span style={{"--value":24}}></span>:
                        <span style={{"--value":54}}></span>
                    </span>
            </div>
                <button className="bg-[#FF8329] text-white text-2xl w-full py-2 rounded-lg">ใส่เลขแทง</button>
            </div>
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
