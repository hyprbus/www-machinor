import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioHeader from './PortfolioHeader';
import PortfolioDescription from './PortfolioDescription';

const PortfolioSummary = props => (
  <div className={props.className}>
    <PortfolioHeader text={props.header} center />
    <PortfolioDescription text={props.summary} />
  </div>
);

PortfolioSummary.defaultProps = {
  summary: '',
  header: '',
};

PortfolioSummary.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string,
  summary: PropTypes.string,
};

export default styled(PortfolioSummary)`
  position: absolute;
  width: 90%;
  padding: 0 5% 5% 5%;
  top: .5em;
  opacity: 1;
  z-index: 1;
`;
