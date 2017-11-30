import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioSummary from './PortfolioSummary';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.showAll = this.showAll.bind(this);
  }

  showAll() {
    this.props.showModal(true, this.props.header, this.props.text);
  }

  render() {
    return (
      <div
        id={this.props.portfolioId}
        className={this.props.className}
        onClick={this.showAll}
      >
        <PortfolioSummary header={this.props.header} summary={this.props.summary} />
        {this.props.children}
      </div>
    );
  }
}

PortfolioItem.defaultProps = {
  children: null,
};

PortfolioItem.propTypes = {
  className: PropTypes.string.isRequired,
  portfolioId: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default styled(PortfolioItem)`
  position: relative;
  cursor: pointer;
`;
