import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import dynamic from 'next/dynamic';

import { useDarkMode } from '../../context/DarkModeContext';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { paraisoLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';







const DynamicSyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter'),
  { ssr: false }
);

const MarkdownRenderer = ({ content }) => {

  const { darkMode, setDarkMode } = useDarkMode();
  

 

  if (!content) {
    return null; 
  }

  const sanitizedContent = content.replace(/\r\n/g, '\n');
  const markdown = `# **Just** a link:[ https://reactjs.com](https://reactjs.com).`;

  return (
    <div >
  
    <ReactMarkdown
      className="custom-markdown"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          if (!inline && match) {
            return (
              
              <div className="syntax-highlighter-wrapper">
              
               
                <SyntaxHighlighter
                  language={match[1]}
                  style={darkMode ? stackoverflowDark : stackoverflowLight}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>

                

              </div>
            );
          } else {
            return (
              <code {...props} className={className}>
                {children}
              </code>
            );
          }
        },
      }}
      remarkPlugins={[remarkGfm]}
    >
      {sanitizedContent}
    </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
