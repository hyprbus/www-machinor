import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const color = theme('mode', {
  techno: palette.techno.colorStandard,
});

const headerFont = theme('mode', {
  techno: palette.techno.headerFont,
});

const PortfolioHeader = (props) => {
  const { text } = props;
  return (
    <p className={props.className}>
      {text}
    </p>
  );
};

PortfolioHeader.defaultProps = {
  center: false,
};

PortfolioHeader.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

export default styled(PortfolioHeader)`
  font-family: ${headerFont};
  font-size: 1.5em;
  text-align: center;
  color: ${color};
  margin: 0 0 .5em 0;
  ${props => !props.center && css`
    text-align: left;
  `}
`;
