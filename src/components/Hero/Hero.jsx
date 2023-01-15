/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron slide header">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      {/* <div className="nightstars" /> */}
      {/* <div className="nightstars1" />
      <div className="nightstars2" /> */}
      {/* <div className="nightshooting-stars" /> */}
      <div className="clouds-container ">
        <div className="clouds-1" />
        <div className="clouds-2 " />
        <div className="clouds-3" />

        {/* <div
                        className="clouds-4"
                    />
                    <div
                        className="clouds-5 "
                    />
                    <div
                        className="clouds-6"
                    /> */}
      </div>
      <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <Container
          id="title"
          className=" slide header"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '10px',
            padding: '20px',
            width: '100%',
            // display: 'flex',
          }}
        >
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title drop-shadow-outline  ">
              {'Hi, my name is '}
              <span className="text-color-main">Anthony</span>,
              <br />
              <div className="typewriter" style={{ width: '100%' }}>
                I&apos;m a Full-stack Dev...
              </div>
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <a
                className="cta-btn cta-btn--hero"
                href="#about"
                style={{
                  marginLeft: '10px',
                }}
              >
                {cta || 'Learn more?'}
                {/* down arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-down"
                  viewBox="0 0 16 16"
                  width={30}
                  style={{ marginLeft: '10px' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4.5a.5.5 0 0 1 .5.5v6.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 11.293V4.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </a>
            </p>
          </Fade>
        </Container>
      </Fade>
    </section>
  );
};

export default Header;
