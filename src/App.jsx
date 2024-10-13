import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import DesignSystem from "./pages/designSystem/DesignSystem";
import Integration from "./pages/integration/Integration";
import General from "./pages/General/General";
import Tabs from "./components/tabs/Tabs";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const tabComponents = [<General />, <DesignSystem />, <Integration />];

  return (
    <>
      <Navbar />

      <h5 className="">Setting</h5>
      <div className="container">
        <div className="left-container">
          <Tabs
            tabs={["General", "DesignSystem", "Integration"]}
            onTabChange={setActiveTab}
          />
        </div>

        <div className="right-container">{tabComponents[activeTab]}</div>
      </div>
    </>
  );
}

export default App;
