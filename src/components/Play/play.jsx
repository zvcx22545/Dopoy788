import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Diversity1 } from '@mui/icons-material';

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
        <div className="flex flex-col w-full">
            <div className="divider divider-start h-10">ย้อนกลับ</div>
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3 ...">01</div>
            <div class="col-span-2 ...">02</div>
            <div class="row-span-2 col-span-2 ...">03</div>
        </div>
        </section>    
    );
}

export default Play;
