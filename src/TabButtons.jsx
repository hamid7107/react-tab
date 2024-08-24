import React from "react";

function TabButtons({ tabDatas, activeTab, setActiveTab }) {
  return (
    <div className="tab-header">
      {tabDatas.map((tabData, index) => (
        <li
          className={`${index === activeTab && "active"} button`}
          key={tabData.id}
          onClick={() => setActiveTab(index)}
        >
          {tabData.name}
        </li>
      ))}
    </div>
  );
}

export default TabButtons;
