import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './play.css';
import { IoIosBackspace } from "react-icons/io";
import { BiGridAlt } from "react-icons/bi";
import { Diversity1 } from '@mui/icons-material';
import NumpadLotto from './NumpadLotto';

function Play() {
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        const countdownDate = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes from now
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCountdown(`${hours}:${minutes}:${seconds}`);
            if (distance < 0) {
                clearInterval(interval);
                setCountdown("EXPIRED");
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section>
        <Navbar/>
        <div className="flex flex-col p-5 pr-20 pl-20">
            <div className="divider divider-start text-4xl pb-8"><IoIosBackspace />ย้อนกลับ</div>
            <div className="footer px-10 py-4">
            <aside className="items-center grid-flow-col gap-4">
            <img src="https://placehold.co/50x50" alt="Vietnam flag" className="w-15 h-15 rounded-full" />
                <p className="text-[#4400A5] text-3xl">หวยไทย <br/><p className="text-[#000] text-xl">งวดวันที่ 14 ธันวาคม 2023</p></p>
            </aside> 
            <nav className="md:place-self-center md:justify-self-end bg-primary rounded-full drop-shadow-lg">
                <div className="grid grid-flow-col gap-4">
                <div className="stat text-center">
                <div className=" text-white text-xl min-w-48">20วัน {countdown}</div>
                </div>
                </div>
            </nav>
            </div>
        </div>
        
        <div class="grid grid-rows-3 grid-flow-col gap-4 p-5 pr-20 pl-20">
            <div class="row-span-3 ...">01</div>
            <div class="col-span-2 ...">02</div>
            <div class="row-span-2 col-span-2 ...">
                <NumpadLotto/>
            </div>
        </div>
        {/* <Poy/> */}
        <Footer/>
        </section>    
    );
}

export default Play;
