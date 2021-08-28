import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
// import portfolioImg from "../../src/images/portfolio.png"

export default () => {
  const { title, lang, description, image } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        <meta name="image" property="og:image" content={image} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anthonyrende.com/" />
        <meta property="og:title" content="Hi, my name is Anthony,I'm a Software Developer." />
        <meta property="og:description" content="Welcome to my portoflio" />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://anthonyrende.com/" />
        <meta property="twitter:title" content="Hi, my name is Anthony,I'm a Software Developer." />
        <meta property="twitter:description" content="Welcome to my portoflio" />
        <meta property="twitter:image" content={image} />
      </Helmet>
      <App />
    </>
  );
};
