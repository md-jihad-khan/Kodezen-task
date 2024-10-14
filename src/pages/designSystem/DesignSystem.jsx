import { useState } from "react";
import "./DesignSystem.css";
import DesignSystemTab from "../../components/designSystem/tabs/DesignSystemTab";

const DesignSystem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabComponents = [
    { key: "color", component: <div>Color Settings</div> },
    { key: "typography", component: <div>Typography Settings</div> },
    { key: "shadow", component: <div>Shadow Settings</div> },
  ];

  return (
    <div>
      <h4 className="page-title">Design System</h4>

      <div className="design-tabs">
        <DesignSystemTab
          tabs={["Color", "Typography", "Shadow"]}
          onTabChange={setActiveTab}
        />
        <input className="search-input" type="text" placeholder="Search" />
      </div>

      <div className="">
        {tabComponents.map((tab, index) =>
          index === activeTab ? <div key={tab.key}>{tab.component}</div> : null
        )}
      </div>
    </div>
  );
};

export default DesignSystem;
