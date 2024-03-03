import { useState } from 'react';
import Tab from '../Tab/Tab';
import Card from '../card/card';

function ParentComponent() {
  const [displayText, setDisplayText] = useState("หวยไทย");
  const imghuy = {
    Huaythais: "https://kosinstudio.com/wp-content/uploads/2018/07/02_Logo-Thailand-National-Football-Team-1932-2002.jpg",
    HuayLao: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/250px-Flag_of_Laos.svg.png",
    Huayhanoi: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/225px-Flag_of_Vietnam.svg.png",
    Huayyiki: "https://mhandee888.com/wp-content/uploads/2022/06/%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%B5.png"
  };


  
  const handleButtonChange = (text) => {
    setDisplayText(text);
  };

  return (
    <div>
        <Tab onButtonChange={handleButtonChange} />
        <Card displayText={displayText} imghuy={imghuy} />
    </div>
  );
}

export default ParentComponent;
