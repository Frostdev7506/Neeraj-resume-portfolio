import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
  if (!content) {
    return null; // or some fallback content if needed
  }

  const sanitizedContent = content.replace(/\r\n/g, '\n');
  console.log("sanitizedContent", sanitizedContent);

  return (
    <ReactMarkdown
      className="custom-markdown"
      components={{}} 
      remarkPlugins={[remarkGfm]}
    >
      {sanitizedContent}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
