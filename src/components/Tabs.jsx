import { useRef } from "react"; 
import close from "../assets/icons/close.svg";
import file from "../assets/icons/file-earmark-plus.svg";

function Tabs({ tabs, activeTabId, onContentChange, setActiveTabId, setTabs }) {
  const tabsContainerRef = useRef(null); 
  const lastTabRef = useRef(null); 

  const handleAddTab = () => {
    const newId = tabs.length + 1;
    const newTab = { id: newId, title: "Document", content: "" };
    setTabs([...tabs, newTab]);
    setActiveTabId(newId);

    setTimeout(() => {
      lastTabRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 0);
  };

  const handleDeleteTab = (id) => {
    if (tabs.length === 1) {
      const newTab = { id: 1, title: "Document", content: "" };
      setTabs([newTab]);
      setActiveTabId(1);
    } else {
      const updatedTabs = tabs.filter((tab) => tab.id !== id);
      setTabs(updatedTabs);

      if (activeTabId === id && updatedTabs.length > 0) {
        const nextActiveTab = updatedTabs[0];
        setActiveTabId(nextActiveTab.id);
      }
    }
  };

  const handleTabChange = (id) => {
    setActiveTabId(id);
  };

  return (
    <section
      ref={tabsContainerRef}
      className="flex items-center justify-between flex-grow bg-[#232e59] px-2 sm:px-5" 
    >
      <button
        className="flex items-center gap-1 text-sm text-[#f6f7ff] font-semibold hover:underline pl-1 cursor-pointer"
        onClick={handleAddTab}
      >
        <img src={file} className="w-5" alt="Add tab icon" />
        <span className="hidden sm:block">New Tab</span> 
      </button>

      <article className="tabs-container w-2xs flex gap-3 flex-grow mx-2 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={index === tabs.length - 1 ? lastTabRef : null} 
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
      </article>
    </section>
  );
}

export default Tabs;

