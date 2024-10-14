import { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className="kzui-tabs">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`kzui-tabs__tab ${
            activeTab === index ? "kzui-tabs__tab--active" : ""
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
