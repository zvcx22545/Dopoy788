import { useState } from 'react';
import Tab from '../Tab/Tab';
import CardLogin from '../card/Cardlogin';

function ParentComponentLogin() {
  const [displayText, setDisplayText] = useState("หวยไทย");
  const imghuy = {
    Huaythais: "https://kosinstudio.com/wp-content/uploads/2018/07/02_Logo-Thailand-National-Football-Team-1932-2002.jpg",
    HuayLao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/250px-Flag_of_Laos.svg.png",
    Huayhanoi: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/225px-Flag_of_Vietnam.svg.png",
    Huayyiki: "https://fast88.club/lotto-vi-logo.png"
  };


  
  const handleButtonChange = (text) => {
    setDisplayText(text);
  };

  return (
    <div>
        <Tab onButtonChange={handleButtonChange} />
        <CardLogin displayText={displayText} imghuy={imghuy} />
    </div>
  );
}

export default ParentComponentLogin;
