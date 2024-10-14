import { useState } from "react";
import "./DesignSystemTab.css";

const DesignSystemTab = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className="kzui-design-system-tab">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`kzui-design-system-tab__item ${
            index === activeTab ? "kzui-design-system-tab__item--active" : ""
          } `}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default DesignSystemTab;
