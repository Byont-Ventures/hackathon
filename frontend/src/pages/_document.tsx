import { Html, Head, Main, NextScript } from 'next/document';

const Document = (): JSX.Element => {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body className="overflow-x-hidden antialiased dark:text-white dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
