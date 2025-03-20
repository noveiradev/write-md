import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";

function MarkdownEditor({ markdown, onContentChange }) {
  const handleInputChange = (event) => {
    onContentChange(event.target.value);
  };

  return (
    <section className="flex h-[calc(100vh-5rem)] flex-col justify-center sm:flex-row">
      <textarea
        value={markdown}
        onChange={handleInputChange}
        className="w-full h-1/2 p-4 text-base resize-none border-none outline-none bg-[#090c10] text-[#fff] sm:w-1/2 sm:h-full avr"
        placeholder="Typing Markdown here..."
      />
      <article className="markdown-body w-full h-1/2 p-4 pb-10 overflow-y-auto sm:w-1/2 sm:h-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </section>
  );
}

export default MarkdownEditor;

