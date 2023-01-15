import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, className }) => (
  <Fade
    bottom
    duration={1000}
    delay={300}
    distance="0px"
    style={{
      // backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: '10px',
      background:
        'linear-gradient(0deg, rgba(11,62,95,1) 3%, rgba(12,65,98,1) 81%, rgba(23,106,144,1) 94%) no-repeat border-box, radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%)',
    }}
  >
    <h2
      className={`${className} section-title drop-shadow-outline-small`}
      style={{
        // backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '10px',
        padding: '20px',
        width: '50%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto',
        marginBottom: '3%',
        paddingTop: '3%',
        fontSize: '3.5rem',
      }}
    >
      {title}
    </h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
