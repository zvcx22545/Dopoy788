import React, { useState } from "react";

function CardBlog(){
    const [showModal, setShowModal] = useState(false);
    return(
        <section>
            {/* Modal */}
                {showModal && (
                    <div className="mo2">
                        <div className="modal-content">
                            <div className="flex justify-between items-center">
                                <div className=""></div>
                                <div className="flex items-center gap-2">
                                    <p className="text-[#4400A5] text-[1.25rem]">บทความ</p>
                                </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 duration-300 ease-in-out transition delay-150 hover:rotate-180" onClick={() => setShowModal(false)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                            <div className="">
                                <img src="/public/tailer.png" className="rounded mx-auto mt-5 w-[50%] max-lg:w-[70%] max-md:w-[90%]" alt="" />
                            </div>
                            <div className="p-5 mt-5 grid gap-3">
                                <h1 className="text-[#4400A5] text-[1.25rem] rounded font-[600] max-md:text-[1rem]">เปิดสถิติหวยออกประจำปี 2566</h1>
                                <p>เปิดปี 2566 คอหวยจะไม่เช็กสถิติหวยกันได้ยังไง สลากกินแบ่งรัฐบาลยังเป็นความหวังที่หล่อเลี้ยงหัวใจให้เรา ได้ลุ้น ได้เสี่ยงดวง ในทุกวันที่ 1 กับ 16 ของทุกเดือน ซึ่งในปี 2565 ที่ผ่านมารัฐฯ มีการจัดสลากในรูปแบบดิจิทัล หรือที่เรียกว่า "สลากดิจิทัล" ราคาแสนดีตรงตามปก 80 บาท ซื้อผ่านแอปเป๋าตัง แถมถ้าใครถูกรางวัล มีบริการโอนเงินรางวัลเข้าบัญชีภายใน 2 ชั่วโมงเท่านั้น</p>
                            </div>
                        </div>
                    </div>
                )}

            <div className="w-[100%] bg-white flex flex-col p-5">
                    <div className="mb-3">
                        <img src="/public/tailer.png" className="rounded mx-auto" alt="" />
                    </div>
                    <div className="mb-5 grid gap-3">
                        <h1 className="text-[#4400A5] text-[1.25rem] font-[600] max-md:text-[1rem]">เปิดสถิติหวยออกประจำปี 2566</h1>
                        <p className="max-lg:truncate">รวมสถิติหวยออกประจำปี 2566 ย้อนดูเลขเด็ด เลขดัง เลขไหนออกซ้ำ เช็กรายละเอียดได้ที่นี่</p>
                    </div>
                    <button className="bg-[#4400A5] text-white border border-[#4400A5] hover:bg-white hover:text-[#4400A5] mt-auto rounded p-2 flex justify-center items-center" onClick={() => setShowModal(true)}>Read More</button>

            </div>
        </section>
    )
}
export default CardBlog