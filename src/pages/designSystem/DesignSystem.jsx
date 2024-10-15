import { useState } from "react";
import "./DesignSystem.css";
import DesignSystemTab from "../../components/designSystem/tabs/DesignSystemTab";
import ColorSetting from "../../components/designSystem/colorSetting/ColorSetting";
import { IoIosSearch } from "react-icons/io";

const DesignSystem = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabComponents = [
    { key: "color", component: <ColorSetting /> },
    { key: "typography", component: <div>Typography Settings</div> },
    { key: "shadow", component: <div>Shadow Settings</div> },
  ];

  return (
    <div className="kzui-design-system">
      <h4 className="kzui-design-system__title">Design System</h4>

      <div className="kzui-design-system__tabs">
        <DesignSystemTab
          tabs={["Color", "Typography", "Shadow"]}
          onTabChange={setActiveTab}
        />

        <div className="kzui-design-system__search-wrapper">
          <IoIosSearch className="kzui-design-system__search-icon" />
          <input
            className="kzui-design-system__search-input"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      <div className="kzui-design-system__content">
        {tabComponents.map((tab, index) =>
          index === activeTab ? <div key={tab.key}>{tab.component}</div> : null
        )}
      </div>
    </div>
  );
};

export default DesignSystem;
