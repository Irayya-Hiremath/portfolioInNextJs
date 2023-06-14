import React from "react";
import Head from "next/head";

function Heads({ title }) {
  return (
    <Head>
      <title>{title} | Irayya Hiremath</title>
      <meta name="description" content="Irayya Hiremath " />
      <meta
        name="description"
        content="Front-end Development
React.js Development
Next.js Development
HTML5
CSS3
Responsive Web Design
Component-Based Development
Web Application Development
Single-Page Applications (SPA)
CSS Frameworks
Tailwind CSS
Material UI
"
      />
      <link
        name="Irayya hiremath"
        content="Front-end developer skilled in React.js, Next.js, HTML, CSS, Tailwind CSS, and Material UI."
      />
      <link
        name="Irayya"
        content="Front-end development, React.js, Next.js, HTML, CSS, Tailwind CSS, Material UI"
      />
      <link name="Irayya Hiremath" content="irayya hiremath" />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="./images/icon-192x192.png"
      />
    </Head>
  );
}

export default Heads;
