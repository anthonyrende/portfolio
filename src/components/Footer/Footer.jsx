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
    <footer className="footer navbar-static-bottom">
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
      <div />
    </footer>
  );
};

export default Footer;
