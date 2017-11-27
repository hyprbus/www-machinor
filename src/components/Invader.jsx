import React from 'react';
import PropTypes from 'prop-types';

const Invader = props => (
  <div>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 110">
      <g fill={props.color}>
        <polygon points="370,30 370,40 370,50 370,60 370,70 380,70 380,60 380,50 380,40 380,30 380,20 370,20 	"/>
        <polygon points="390,30 390,40 390,50 390,60 390,70 400,70 400,60 400,50 400,40 400,30 400,20 390,20 	"/>
        <polygon points="410,20 410,30 410,40 410,50 410,60 410,70 420,70 420,60 420,50 420,40 420,30 420,20 	"/>
        <rect x="370" y="80" width="10" height="10"/>
        <rect x="390" y="80" width="10" height="10"/>
        <rect x="410" y="80" width="10" height="10"/>
        <polygon points="150,50 140,50 140,40 140,30 130,30 130,40 130,50 120,50 110,50 110,60 120,60 130,60 130,70 130,80 140,80 140,70 140,60 150,60 160,60 160,50 "/>
        <polygon points="330,60 320,60 310,60 300,60 300,70 310,70 320,70 330,70 340,70 350,70 350,60 340,60 	"/>
        <polygon points="340,40 330,40 320,40 310,40 300,40 300,50 310,50 320,50 330,50 340,50 350,50 350,40 	"/>
        <rect x="250" y="80" width="10" height="10"/>
        <rect x="250" y="10" width="10" height="10"/>
        <rect x="260" y="90" width="10" height="10"/>
        <rect x="200" y="10" width="10" height="10"/>
        <rect x="190" y="90" width="10" height="10"/>
        <rect x="200" y="80" width="10" height="10"/>
        <path d="M270,50V40h-10V30h-10V20h-10v10h-10h-10V20h-10v10h-10v10h-10v10h-10v10v10h10V60h10v10h10v10h10h10h10h10V70h10V60h10v10h10V60V50H270z M250,40v10h-10V40H250z M220,40v10h-10V40H220z"/>
        <rect x="10" y="10" width="10" height="10"/>
        <rect x="10" y="90" width="10" height="10"/>
        <polygon points="40,10 50,10 60,10 70,10 70,0 60,0 50,0 40,0 30,0 20,0 20,10 30,10 	"/>
        <rect x="70" y="10" width="10" height="10"/>
        <polygon points="50,50 40,50 30,50 20,50 20,60 30,60 40,60 50,60 60,60 70,60 70,50 60,50 	"/>
        <polygon points="50,100 40,100 30,100 20,100 20,110 30,110 40,110 50,110 60,110 70,110 70,100 60,100 	"/>
        <polygon points="80,20 80,30 80,40 70,40 70,50 80,50 80,60 80,70 80,80 80,90 90,90 90,80 90,70 90,60 90,50 90,40 90,30 90,20"/>
        <rect x="70" y="90" width="10" height="10"/>
        <polygon points="10,70 10,60 10,50 20,50 20,40 10,40 10,30 10,20 0,20 0,30 0,40 0,50 0,60 0,70 0,80 0,90 10,90 10,80 	"/>
      </g>
    </svg>
  </div>
);

Invader.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Invader;
