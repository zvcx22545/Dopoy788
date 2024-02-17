
function Navlogin() {
    return(
        <div className="mb-5 text-white ">
            <div className="navLogin flex items-center gap-[8%] justify-center bg-[#4400A5] py-10 max-lg:flex-col ">
    <div className="max-lg:text-center">
        <p>เข้าสู่ระบบกับ</p>
        <h1 className="max-lg:ml-0 ml-5 text-[2rem] font-bold">ดูโพย 788</h1>
    </div>
    <div className="flex justify-center items-center mt-5 sm:justify-center max-lg:flex-col sm:items-start sm:gap-[10%]">
        <div className="grid gap-2 items-start">
            <label>ชื่อผู้ใช้</label>
            <input type="text" placeholder="Username" className="bg-white text-black border rounded-[5px] p-1" />
        </div>
        <div className="grid gap-2 items-start max-md:my-5">
            <label>รหัสผ่าน</label>
            <input type="password" placeholder="Password" className="bg-white text-black border rounded-[5px] p-1" />
            <button className="text-right mt-2">ลืมรหัสผ่าน</button>
        </div>
    </div>
    <div className="mt-3">
        <button className="btn text-white bg-[#FF8329]">ยืนยัน</button>
    </div>
</div>

        </div>
    )
}

export default Navlogin