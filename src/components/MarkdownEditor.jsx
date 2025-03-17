import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css"; // Manteniendo los estilos de markdown-body

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("");

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="flex h-[calc(100vh-5rem)]">
      {/* Área para escribir */}
      <textarea
        value={markdown}
        onChange={handleInputChange}
        className="w-1/2 h-full p-8 text-base resize-none border-none outline-none"
        placeholder="Escribe tu Markdown aquí..."
      />

      {/* Vista previa */}
      <div
        className={`markdown-body w-1/2 p-8 overflow-y-auto`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
