import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import MarkdownEditor from "./components/MarkdownEditor.jsx";
import welcomeContent from "./welcomeContent.js";

function App() {
  const [tabs, setTabs] = useState(() => {
    const savedTabs = localStorage.getItem("tabs");
    return savedTabs ? JSON.parse(savedTabs) : [
      { id: 1, title: "Welcome to WriteMD", content: welcomeContent },
    ];
  });

  const [activeTabId, setActiveTabId] = useState(() => {
    const savedActiveTabId = localStorage.getItem("activeTabId");
    return savedActiveTabId ? JSON.parse(savedActiveTabId) : 1;
  });

  const activeTabContent = tabs.find((tab) => tab.id === activeTabId)?.content || "";

  const handleContentChange = (newContent) => {
    const updatedTabs = tabs.map((tab) =>
      tab.id === activeTabId
        ? { ...tab, content: newContent, title: getTabTitleFromContent(newContent) }
        : tab
    );
    setTabs(updatedTabs);
  };

  const getTabTitleFromContent = (content) => {
    const firstLine = content.split("\n")[0].trim();
    const cleanText = firstLine.replace(/[#*\-_>`[\]]/g, "").trim();
    const words = cleanText.split(/\s+/);
    if (words.length > 0 && words[0] !== "") {
      const title = words.slice(0, 3).join(" ");
      return title.length > 20 ? `${title.substring(0, 20)}...` : title;
    }
    return "Document";
  };

  // Guardar en localStorage cuando las pestañas cambien
  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
    localStorage.setItem("activeTabId", JSON.stringify(activeTabId));
  }, [tabs, activeTabId]);

  return (
    <section className="flex flex-col h-screen">
      <Header
        tabs={tabs}
        activeTabId={activeTabId}
        onContentChange={handleContentChange}
        setActiveTabId={setActiveTabId}
        setTabs={setTabs}
      />
      <MarkdownEditor
        markdown={activeTabContent}
        onContentChange={handleContentChange}
      />
    </section>
  );
}

export default App;


