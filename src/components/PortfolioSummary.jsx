import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioHeader from './PortfolioHeader';
import PortfolioDescription from './PortfolioDescription';
import { theme } from './appSettings';

const PortfolioSummary = props => (
  <div id="pSummaryTest" className={props.className}>
    <PortfolioHeader text={props.header} center backgroundColor={theme.backgroundColorA} />
    <PortfolioDescription text={props.summary} />
  </div>
);

PortfolioSummary.defaultProps = {
  summary: '',
};

PortfolioSummary.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  summary: PropTypes.string,
};

export default styled(PortfolioSummary)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 1em;
  opacity: 1;
  z-index: 1;
`;
