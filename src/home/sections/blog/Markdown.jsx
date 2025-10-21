import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';



export function MarkdownRenderer({ children: markdown }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');

          return !inline && match ? (
            <SyntaxHighlighter style={dracula} PreTag="div" language={match[1]} {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        a({ node, children, ...props }) {
          return (
            <a
              {...props}
              style={{
                color: '#1976d2',
                textDecoration: 'underline',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#1565c0';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#1976d2';
              }}
            >
              {children}
            </a>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}