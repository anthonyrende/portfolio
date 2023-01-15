import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import GameOfLifeGIF from '../../images/game-of-life-optimized.gif';
// import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume, url, icon } = about;
  // ^ add in:img,
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
  // <AboutImg alt="profile picture" style={{"width":"20%"}} filename={img} />
  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <a
                  href={url || '#!'}
                  target="_blank"
                  aria-label="Project Link"
                  rel="noopener noreferrer"
                >
                  <Tilt
                    options={{
                      reverse: false,
                      max: 8,
                      perspective: 1000,
                      scale: 1,
                      speed: 300,
                      transition: true,
                      axis: null,
                      reset: true,
                      easing: 'cubic-bezier(.03,.98,.52,.99)',
                    }}
                  >
                    <div data-tilt className="thumbnail rounded">
                      <img
                        src={GameOfLifeGIF}
                        href={url}
                        target="_blank"
                        alt="Conway's Game of Life"
                      />
                    </div>
                  </Tilt>
                </a>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div
                className="about-wrapper__info"
                style={{
                  color: 'black',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    // flex row
                    flexDirection: 'row',
                  }}
                >
                  <img
                    src={icon}
                    alt="right-arrow icon"
                    width={20}
                    height={20}
                    style={{
                      marginRight: '20px',
                      // center vertically
                      // alignSelf: 'center',
                      marginTop: '10px',
                    }}
                  />
                  <p className="about-wrapper__info-text">
                    {paragraphOne ||
                      "I'm a Brooklyn based Software Developer with experience on *both* ends of the stack, focused on shipping meaningful, genuine contributions to colleagues, stakeholders, and end-users"}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    // flex row
                    flexDirection: 'row',
                  }}
                >
                  <img
                    src={icon}
                    alt="right-arrow icon"
                    width={20}
                    height={20}
                    style={{
                      marginRight: '20px',
                      // center vertically
                      // alignSelf: 'center',
                      marginTop: '10px',
                    }}
                  />
                  <p className="about-wrapper__info-text">
                    {paragraphTwo ||
                      'Experienced in building products in a team setting with daily collaboration in software development, testing, and deployment'}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    // flex row
                    flexDirection: 'row',
                  }}
                >
                  <img
                    src={icon}
                    alt="right-arrow icon"
                    width={20}
                    height={20}
                    style={{
                      marginRight: '20px',
                      // center vertically
                      // alignSelf: 'center',
                      marginTop: '10px',
                    }}
                  />
                  <p className="about-wrapper__info-skills">
                    {paragraphThree ||
                      'My main skills are TypeScript, React, Tailwind, Node/Express, REST & GraphQL, Apollo, Python, PostgreSQL, Linux and other tools in the JAM stack'}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    // flex row
                    flexDirection: 'row',
                  }}
                >
                  <img
                    src={icon}
                    alt="right-arrow icon"
                    width={20}
                    height={20}
                    style={{
                      marginRight: '20px',
                      // center vertically
                      // alignSelf: 'center',
                      marginTop: '10px',
                    }}
                  />
                  <p className="about-wrapper__info-text ">
                    {paragraphFour ||
                      'In the unlikely event that Im not hunched over a computer, I love to practice yoga, play video games, consume sci-fi, sharpen my guitar skills, or catch a show around NYC ^_^'}
                  </p>
                </div>
                {resume && (
                  <span className="d-flex mt-3 ">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                      style={{ width: '100%', borderRadius: '5px' }}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
