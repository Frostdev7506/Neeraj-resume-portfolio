import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import dynamic from 'next/dynamic';



const DynamicSyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter'),
  { ssr: false }
);

const MarkdownRenderer = ({ content }) => {
  if (!content) {
    return null; // or some fallback content if needed
  }

  const sanitizedContent = content.replace(/\r\n/g, '\n');
  const markdown = `# **Just** a link:[ https://reactjs.com](https://reactjs.com).`;

  return (
    <ReactMarkdown
      className="custom-markdown"
  
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          if (!inline && match) {
            return (
              <DynamicSyntaxHighlighter
                {...props}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </DynamicSyntaxHighlighter>
            );
          } else {
            return (
              <code {...props} className={className}>
                {children}
              </code>
            );
          }
        }
      }}
      
      remarkPlugins={[remarkGfm]}
    >
      {sanitizedContent}
      </ReactMarkdown>
  );
};

export default MarkdownRenderer;
