import './Poy.css'

// icon
const Lefticon = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
);

function Poy(){

    return(
        <div className="p-5">
            <div className="flex justify-center items-start ">
                <div className="w-[25%] px-3 py-5 max-lg:hidden">
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

                <div className="w-[70%] h-[660px] px-3 py-8">
                    <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 mb-3">
                        <div className="menu-poy">
                            <button className="menu-poy">เลือกกดเอง</button>
                        </div>
                        <div className="menu-poy">
                            <button className="menu-poy">เลือกแผงเลข</button>
                        </div>
                        <div className="menu-poy">
                            <button className="menu-poy">เลือกแบบเลขวิน</button>
                        </div>
                    </div>
                    <div className="flex font-bold mb-3">
                        <h1>- เลือกประเภท</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
                        <div className="menu-poy">
                            <button>4 ตัวบน</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                        <div className="menu-poy">
                            <button>3 ตัวโต๊ด</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                        <div className="menu-poy">
                            <button>2 ตัวล่าง</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                        <div className="menu-poy">
                            <button>4 ตัวโต๊ด</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                        <div className="menu-poy">
                            <button>3 ตัวล่าง</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                        <div className="menu-poy">
                            <button>วิ่งบน</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                        <div className="menu-poy">
                            <button>3 ตัวบน</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                        <div className="menu-poy">
                            <button>2 ตัวบน</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                        <div className="menu-poy">
                            <button>วิ่งล่าง</button>
                            <p className="bonus">1,000.00</p>
                        </div>
                    </div>

                    <div className="flex font-bold mb-3">
                        <h1>- กดเลข</h1>
                    </div>
                    <div className="list-responsive mt-auto">
                        <h1>รายการแทง</h1>
                        <button className="list-btn">ใส่ราคา/ส่งโพย</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Poy