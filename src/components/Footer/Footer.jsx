import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';
import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;
  // const iframe = <iframe id='ifr' width='140' height='195' scrolling='no' style='background: url(//studio.processingtogether.com/static/img/jun09/pad/connectingbar.gif) no-repeat center 60px;' src='//studio.processingtogether.com/sp/pad/iframe/ro.9mwk7tDqcA6AO/rev.4?autostart=0'></iframe>"
  return (
    <footer
      className="footer navbar-static-bottom"
      style={{
        position: 'relative',
      }}
    >
      <Container>
        <a href="#top" aria-label="Back To Top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </a>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        {isEnabled && <GithubButtons />}
      </Container>
      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          width: '100%',
          height: '100px',
          overflow: 'hidden',
          lineHeight: '0',
          zIndex: '100',
          // transform: 'rotate(180deg)',
        }}
      >
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
          style={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100px',
            zIndex: '2',
            opacity: '0.5',
          }}
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <div />
    </footer>
  );
};

export default Footer;
