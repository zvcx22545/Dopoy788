import { useState } from 'react';
import Tab from '../Tab/Tab';
import Card from '../card/card';
import Cardyeekee from '../card/Cardyiki';

function ParentComponent() {
  const [displayText, setDisplayText] = useState("หวยไทย");
  const imghuy = {
    Huaythais: "https://kosinstudio.com/wp-content/uploads/2018/07/02_Logo-Thailand-National-Football-Team-1932-2002.jpg",
    HuayLao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/250px-Flag_of_Laos.svg.png",
    Huayhanoi: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/225px-Flag_of_Vietnam.svg.png",
    Huayyiki: "https://www.fox888.vip/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyeekee.d984ba60.png&w=128&q=75"
  };
  // https://www.fox888.vip/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyeekee.d984ba60.png&w=128&q=75
  // "https://fast88.club/lotto-vi-logo.png"


  
  const handleButtonChange = (text) => {
    setDisplayText(text);
  };

  return (
    <div>
        <Tab onButtonChange={handleButtonChange} />
        {displayText != 'หวยยี่กีวิเดียว'&& <Card displayText={displayText} imghuy={imghuy} />}
        {displayText === 'หวยยี่กีวิเดียว' && <Cardyeekee displayText={displayText} imghuy={imghuy} />}
    </div>
  );
}

export default ParentComponent;
