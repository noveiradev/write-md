import { useState } from "react";
import Header from "./components/Header.jsx";
import MarkdownEditor from "./components/MarkdownEditor.jsx";

function App() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Welcome", content: "# Bienvenido a WriteMD\n\n¡Empieza escribiendo Markdown aquí!" },
  ]);
  const [activeTabId, setActiveTabId] = useState(1);

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
  return (
    <div className="flex flex-col h-screen">
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
    </div>
  );
}

export default App;


