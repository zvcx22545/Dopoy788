import { useState } from 'react';
import './tab.css';
import PropTypes from 'prop-types';

function Tab({ onButtonChange }) {
  const [activeTab, setActiveTab] = useState("หวยไทย");

  const handleButtonClick = (text) => {
    setActiveTab(text);
    onButtonChange(text); // เรียกใช้งาน callback function เพื่อส่งค่า text ไปยัง parent component
  };

  return (
    <div className='tabbtn'>
      <div className="grid gap-2 grid-cols-6">
        <button className={`btn ${activeTab === "หวยไทย" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยไทย")}>หวยไทย</button>
        <button className={`btn ${activeTab === "หวยลาว" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยลาว")}>หวยลาว</button>
        <button className={`btn ${activeTab === "หวยฮานอย" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยฮานอย")}>หวยฮานอย</button>
        <button className={`btn ${activeTab === "หวยหุ้นไทย" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยหุ้นไทย")}>หวยหุ้นไทย</button>
        <button className={`btn ${activeTab === "หวยหุ้นต่างประเทศ" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยหุ้นต่างประเทศ")}>หวยหุ้นต่างประเทศ</button>
        <button className={`btn ${activeTab === "หวยยี่กีวิเดียว" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยยี่กีวิเดียว")}>หวยยี่กีวิเดียว</button>
      </div>
    </div>
  );
}
Tab.propTypes = {
  onButtonChange: PropTypes.func.isRequired,
};
export default Tab;
