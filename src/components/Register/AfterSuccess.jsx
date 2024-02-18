
function AfterSuccess() {
  return (
    <div className="container-success bg-[#4400A5]">
    <div className="-warp">
      <div className="title text-white text-center mt-[1rem]">การสมัครสมาชิกของคุณได้รับการอนุมัติ</div>
    </div>
    <div className="container-icon">
      <div className="icon w-[60%] h-[20%] mx-auto flex justify-center items-center">
        <img src="/public/image/correct-icon.png" alt=""  className="w-full mx-auto bg-white"/>
      </div>
    </div>
    <div className="text-white text-center">
      กำลังกลับไปที่หน้า แทงหวย
    </div>
    <div id="closeSuccess" className="mt-[2rem] flex justify-center text-white">
          ภายใน 2 วินาที
            </div>


    </div>
  )
}

export default AfterSuccess