import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioSummary from './PortfolioSummary';

const PortfolioItem = props => (
  <div id="portfolioitem" className={props.className}>
    <PortfolioSummary header={props.header} summary={props.summary} />
    {props.children}
  </div>
);

PortfolioItem.defaultProps = {
  children: null,
};

PortfolioItem.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default styled(PortfolioItem)`
  position: relative;
`;
