import React, { useState } from 'react';
import Tab from '../Tab/Tab';
import Card from '../card/card';

function ParentComponent() {
  const [displayText, setDisplayText] = useState("หวยไทย");

  const handleButtonChange = (text) => {
    setDisplayText(text);
  };

  return (
    <div>
        <Tab onButtonChange={handleButtonChange} />
        <Card displayText={displayText} />
    </div>
  );
}

export default ParentComponent;
