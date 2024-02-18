import { useState, useEffect } from 'react';

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
        <div>
            <div className="bar-back d-flex justify-content-between align-items-center">
                <div id="top"></div>
                <a href="../yeekee" className="mr-auto" id="yingying" onClick={() => removecc('../yeekee')}>
                    <i className="fas fa-chevron-left"></i> ย้อนกลับ
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm mr-1 text-dark" data-toggle="modal" data-target="#rule-yeekee">
                    กติกา
                </a>
                <a href="#" className="btn btn-danger btn-sm btn-numpage" data-id="numpage_2" onClick={() => yingying('#')}>
                    <i className="fas fa-calculator"></i> ยิงเลข
                </a>
                <a href="#" className="btn btn-dark btn-sm btn-numpage d-none active" data-id="numpage_1" onClick={() => yingying('../yeekee')}>
                    <i className="fas fa-calculator"></i> แทงเลข
                </a>
            </div>
            <div className="p-md-2 w-100 bg-light main-content align-self-stretch d-flex flex-column align-items-stretch" style={{ minHeight: 'calc((100vh - 150px) - 50px)' }}>
                <div className="bgwhitealpha text-secondary shadow-sm rounded p-2 px-2 xtarget col-lotto d-flex flex-row mb-0 pb-0">
                    <div className="d-flex justify-content-between align-items-center mb-0 flex-fill lotto-title">
                        <h4 className="tanghuay-h4">
                            หวยยี่กี<span className="badge badge-pill badge-danger font-weight-light"><small>รอบที่ </small></span>
                        </h4>
                        <div className="tanghuay-time">
                            <i className="sn-icon sn-icon--daily2"></i>
                            <span className="countdown" data-finaldate={countdown}>
                                {countdown}
                            </span>
                        </div>
                    </div>
                </div>
                {/* Rest of your content */}
            </div>
        </div>
    );
}

export default Play;
