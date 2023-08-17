import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'


const MarkdownRenderer = ({ content }) => {
  const sanitizedContent = content.replace(/\r\n/g, '\n');
  console.log("sanitizedContent",sanitizedContent);
  return <ReactMarkdown className="custom-markdown" remarkPlugins={[remarkGfm]}>{sanitizedContent}</ReactMarkdown>;
};

export default MarkdownRenderer;
