import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const color = theme('mode', {
  techno: palette.techno.colorStandard,
});

const backgroundColor = theme('mode', {
  techno: palette.techno.backgroundStandard,
});

const font = theme('mode', {
  techno: palette.techno.textFont,
});


const PortfolioDescription = (props) => {
  const { text } = props;
  return (
    <p className={props.className}>
      {text}
    </p>
  );
};

PortfolioDescription.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(PortfolioDescription)`
  font-family: ${font};
  font-size: 1em;
  /* background-color: ${backgroundColor}; */
  color: ${color};
  margin: 1% 0 0 0;
`;
