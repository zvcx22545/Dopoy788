import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './play.css';
import Footer from '../Footer/Footer';
import { IoIosBackspace } from "react-icons/io";
import { BiGridAlt } from "react-icons/bi";
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
        
        <div className="grid grid-rows-3 grid-flow-col gap-4 p-5 pr-20 pl-20">
            <div className="row-span-3 w-full px-3 py-5 max-lg:hidden">
                    <div className="flex justify-center items-center font-bold text-white text-[1.25rem] h-[60px] w-full bg-[#FF8329] rounded-lg mb-6">
                        <h1>ดึงโพย</h1>
                    </div>
                    <div className="list w-full rounded-lg text-center p-2">
                            <h1>รายการแทง</h1>
                        <hr className='my-2' />
                        <div className="list-menuorder py-2">
                            <h1>list....</h1>
                        </div>
                        <div className="menu-btn grid gap-2">
                            <button className='custom'>ใส่ราคา/ส่งโพย</button>
                            <button className='delete'>ลบทั้งหมด</button>
                        </div>
                    </div>
                </div>
            <div className="col-span-2">
            <div className='playbtn'>
                <div className="grid gap-4 p-5 grid-cols-3">
                <button className="btn"><BiGridAlt/> เลือกกดเอง</button>
                <button className="btn"><BiGridAlt/> เลือกแผงเลข</button>
                <button className="btn"><BiGridAlt/> เลือกแบบเลขวิน</button>
                </div>
                <div className="gap-4 w-40">
                <div className="divider divider-end text-xl">เลือกประเภทการแทง</div>
                </div>
                <div className="grid gap-4 p-5 grid-cols-3">
                <button className="btn"><BiGridAlt/> สี่ตัวบน<div className="badge badge-primary">1,000</div></button>
                <button className="btn"><BiGridAlt/> สี่ตัวโต๊ด<div className="badge badge-primary">1,000</div></button>
                <button className="btn"><BiGridAlt/> สามตัวบน<div className="badge badge-primary">1,000</div></button>
                <button className="btn"><BiGridAlt/> สามตัวโต๊ด<div className="badge badge-primary">1,000</div></button>
                <button className="btn"><BiGridAlt/> สามตัวล่าง<div className="badge badge-primary">1,000</div></button>
                <button className="btn"><BiGridAlt/> สองตัวบน<div className="badge badge-primary">1,000</div></button>
                <button className="btn"><BiGridAlt/> สองตัวล่าง<div className="badge badge-primary">1,000</div></button>
                <button className="btn"><BiGridAlt/> วิ่งบน<div className="badge badge-primary">1,000</div></button>
                <button className="btn"><BiGridAlt/> วิ่งล่าง<div className="badge badge-primary">1,000</div></button>
                </div>
                <div className="gap-4 w-40">
                <div className="divider divider-end text-xl">กดเอง</div>
                </div>
            </div>
            </div>
            <div class="row-span-2 col-span-2 ...">
                <NumpadLotto/>
            </div>
            <div className="list-responsive mt-auto">
                <h1>รายการแทง</h1>
                <button className="list-btn">ใส่ราคา/ส่งโพย</button>
        </div>
        </div>
        
        <Footer/>
        </section>    
    );
}

export default Play;
