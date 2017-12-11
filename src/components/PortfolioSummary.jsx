import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioDescription from './PortfolioDescription';

const PortfolioSummary = props => (
  <div className={props.className}>
    <PortfolioDescription text={props.summary} />
  </div>
);

PortfolioSummary.defaultProps = {
  summary: '',
};

PortfolioSummary.propTypes = {
  className: PropTypes.string.isRequired,
  summary: PropTypes.string,
};

export default styled(PortfolioSummary)`
  position: absolute;
/*  left: 5%;
  transform: translate(-5%, 0); */
  padding: 5%;
  top: 2em;
  opacity: 1;
  z-index: 1;
`;
