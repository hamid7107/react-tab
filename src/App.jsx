import { useState } from "react";
import TabButtons from "./TabButtons";
import TabContent from "./TabContent";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const tabDatas = [
    {
      id: 1,
      name: "Tab 1",
      text: "Lorem 1 ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem.",
      title: "Cantent 1",
    },
    {
      id: 2,
      name: "Tab 2",
      text: "Lorem 2 ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem.",
      title: "Cantent 2",
    },
    {
      id: 3,
      name: "Tab 3",
      text: "Lorem 3 ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem.",
      title: "Cantent 3",
    },
    {
      id: 4,
      name: "Tab 4",
      text: "Lorem 4 ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem.",
      title: "Cantent 4",
    },
  ];
  return (
    <div className="main-container">
      <h1>Tab Component with React</h1>
      <TabButtons
        tabDatas={tabDatas}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent tabDatas={tabDatas} activeTab={activeTab} />
    </div>
  );
}

export default App;
