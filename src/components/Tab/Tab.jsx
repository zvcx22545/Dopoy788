import React from 'react';
import { connect } from 'react-redux';
import { setActiveTab } from '../redux/actions'; // นำเข้า action

import './tab.css';

function Tab({ activeTab, setActiveTab }) {
  const handleButtonClick = (text) => {
    setActiveTab(text); // เรียกใช้ action เพื่อส่งค่า text ไปยัง Redux store
  };

  return (
    <div className='tabbtn'>
      <div className="grid gap-2 grid-cols-6">
        <button className={`btn ${activeTab === "หวยไทย" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยไทย")}>หวยไทย</button>
        <button className={`btn ${activeTab === "หวยลาว" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยลาว")}>หวยลาว</button>
        <button className={`btn ${activeTab === "หวยฮานอย" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยฮานอย")}>หวยฮานอย</button>
        <button className={`btn ${activeTab === "หวยหุ้นไทย" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยหุ้นไทย")}>หวยหุ้นไทย</button>
        <button className={`btn ${activeTab === "หวยหุ้นไทย" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยหุ้นไทย")}>หวยหุ้นไทย</button>
        <button className={`btn ${activeTab === "หวยยี่กีวิเดียว" ? 'active' : ''}`} onClick={() => handleButtonClick("หวยยี่กีวิเดียว")}>หวยยี่กีวิเดียว</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab
});

const mapDispatchToProps = {
  setActiveTab
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
