import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DesignSystem from "./pages/designSystem/DesignSystem";
import Integration from "./pages/integration/Integration";
import General from "./pages/General/General";
import Tabs from "./components/tabs/Tabs";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const tabComponents = [
    { key: "general", component: <General /> },
    { key: "designSystem", component: <DesignSystem /> },
    { key: "integration", component: <Integration /> },
  ];

  return (
    <>
      <Navbar />

      <div className="kzui-block">
        <h5 className="kzui-title">Setting</h5>

        <div className="kzui-container">
          <div className="kzui-container__left-container">
            <Tabs
              tabs={["General", "DesignSystem", "Integration"]}
              onTabChange={setActiveTab}
            />
          </div>

          <div className="kzui-container__right-container">
            {tabComponents.map((tab, index) =>
              index === activeTab ? (
                <div key={tab.key}>{tab.component}</div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
