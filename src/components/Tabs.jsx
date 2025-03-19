import { useState } from "react";
import close from '../assets/images/close.svg';
import plus from '../assets/images/plus.svg';

function Tabs({ tabs, activeTabId, onContentChange, setActiveTabId, setTabs }) {
  const handleAddTab = () => {
    const newId = tabs.length + 1;
    const newTab = { id: newId, title: "Document", content: "" };
    setTabs([...tabs, newTab]);
    setActiveTabId(newId);
  };

  const handleDeleteTab = (id) => {
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);
    if (activeTabId === id && updatedTabs.length > 0) {
      const nextActiveTab = updatedTabs[0];
      setActiveTabId(nextActiveTab.id);
    }
  };

  const handleTabChange = (id) => {
    setActiveTabId(id);
  };

  return (
    <div className="flex items-center justify-between flex-grow">
      <div className="tabs-container w-2xs flex gap-2 flex-grow mx-2 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex p-1.5 text-sm bg-[#37436F] rounded-xs ${
              activeTabId === tab.id
                ? "text-[#dce0ff] border-b-2 border-[#687AFB]"
                : "text-[#FFFFFFE3]"
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            <span className="truncate">{tab.title}</span>
            <img
              src={close}
              className="ml-2 w-3 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTab(tab.id);
              }}
            />
          </button>
        ))}
      </div>

      <button
        className="px-4 flex py-1 text-sm text-[#687AFB] font-semibold hover:underline pl-4"
        onClick={handleAddTab}
      >
        <img src={plus} className="w-8" />
        New Tab
      </button>
    </div>
  );
}

export default Tabs;


