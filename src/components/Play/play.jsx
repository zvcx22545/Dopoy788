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
            <div className="w-full md:max-w-[14rem]">
                <button id="poi-save-dialog-btn" className="mb-2 w-full" type="button">
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path>
                        </svg>
                        ดึงโพย
                    </div>
                </button>
                <div className="bet-list card hidden divide-y md:block">
                    <div className="card-text flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                                </svg>
                                รายการแทง
                                <div className="bet-count chip gap-1 overflow-hidden rounded-full">
                                    <span className="animate-slide-left font-semibold">2</span> รายการ
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto h-96 rounded-none">
                        <table className="relative">
                            <thead className="header-table border-t first:border-t-0">
                                <tr>
                                    <th className="py-1 w-full">
                                        <div className="flex items-center gap-1">
                                            สามตัวบน
                                            <div className="v-popper v-popper--theme-tooltip">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4 cursor-pointer">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="py-1 text-right text-sm">2/120</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="cursor-pointer">
                                    <td>
                                        <div className="flex items-center gap-1">592</div>
                                    </td>
                                    <td className="py-1 text-right">
                                        <button className="icon text error" type="button">
                                            <div className="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="cursor-pointer">
                                    <td>
                                        <div className="flex items-center gap-1">874</div>
                                    </td>
                                    <td className="py-1 text-right">
                                        <button className="icon text error" type="button">
                                            <div className="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-actions">
                        <button id="buy-list-dialog-btn" className="w-full" type="button">
                            <div className="flex items-center justify-center">ใส่ราคา/ส่งโพย</div>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                        </svg>
                        <button id="buy-list-remove-btn" className="w-full bg-error/10 text-error" type="button">
                            <div className="flex items-center justify-center">ลบทั้งหมด</div>
                        </button>
                    </div>
                </div>
                <div className="bet-list-mobile card fixed bottom-8 right-2 left-2 z-[1] animate-slide-y-reverse md:hidden">
                    <div className="card-text flex items-center justify-between gap-1 py-2">
                        <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                            </svg>
                            รายการแทง
                            <div className="chip min-w-[2rem] gap-1 overflow-hidden rounded-full border border-primary">
                                <span className="bet-count animate-slide-left font-semibold">2</span>
                            </div>
                        </div>
                        <button id="buy-list-dialog-btn" className="h-10 text-lg" type="button">
                            <div className="flex items-center justify-center">ใส่ราคา/ส่งโพย</div>
                        </button>
                    </div>
                </div>
            </div>
        
    );
}

export default Play;
