// import React, { useState, useEffect } from 'react';
// import { run } from '@mdx-js/mdx';

// const MdxRenderer = ({ content }) => {
//   const [mdxComponent, setMdxComponent] = useState(null);

//   useEffect(() => {
//     const loadMdxComponent = async () => {
//       const mdxModule = await run(content, { outputFormat: 'function-body' });
//       const Component = new Function('React', ...Object.keys(mdxModule), mdxModule['default']);
//       setMdxComponent(Component);
//     };

//     loadMdxComponent();
//   }, [content]);

//   if (!mdxComponent) {
//     return <div>Loading...</div>;
//   }

//   return React.createElement(mdxComponent, {});
// };

// export default MdxRenderer;
