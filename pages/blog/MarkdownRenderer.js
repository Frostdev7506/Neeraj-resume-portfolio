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
      children={sanitizedContent}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <DynamicSyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
            
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        }
      }}
      remarkPlugins={[remarkGfm]}
    />
  );
};

export default MarkdownRenderer;
