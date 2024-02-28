import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

function AfterSuccess({ onTimeout }) { // onTimeout is a callback for when the countdown finishes
  const [countdown, setCountdown] = useState(3); // Start the countdown at 2 seconds

  useEffect(() => {
    // If countdown is greater than 0, set a timeout to decrement it
    if (countdown > 0) {
      const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timerId); // Cleanup the timeout on component unmount
    } else {
      // When countdown reaches 0, execute the callback function
      onTimeout();
    }
  }, [countdown, onTimeout]);
  return (
    <div className="container-success bg-[#4400A5] mt-[1.5rem] w-[30%]">
    <div className="-warp">
      <div className="title text-white text-center mt-[1.5rem]">การสมัครสมาชิกของคุณได้รับการอนุมัติ</div>
    </div>
    <div className="container-icon">
      <div className="icon-container w-[50%] h-[20%] mx-auto flex justify-center items-center bg-white">
        <img src="/public/image/correct-icon.png" alt=""  className="w-[50%] mx-auto  animate-bounce animate-infinite animate-duration-700 animate-delay-100 m-5 icon"/>
      </div>
    </div>
    <div className="text-white text-center mt-2 comeback">
      กำลังกลับไปที่หน้า แทงหวย
    </div>
    <div id="closeSuccess" className="mt-[0.5rem] flex justify-center text-white mb-[1.5rem] countdowns">
          ภายใน {countdown} วินาที
            </div>


    </div>
  )
}

AfterSuccess.propTypes ={
  onTimeout: PropTypes.number.isRequired,
};
export default AfterSuccess