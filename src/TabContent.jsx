import React from "react";

function TabContent({ tabDatas, activeTab }) {
  return (
    <div className="tab-container ">
      <div className="tab-content">
        <h2>{tabDatas[activeTab].title}</h2>
        <p>{tabDatas[activeTab].text}</p>
      </div>
    </div>
  );
}

export default TabContent;
