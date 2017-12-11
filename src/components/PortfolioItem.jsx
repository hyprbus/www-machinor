import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';
import PortfolioSummary from './PortfolioSummary';

const backgroundColor = theme('mode', {
  techno: palette.techno.backgroundStandard,
  mono: palette.mono.backgroundStandard,
});

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.showAll = this.showAll.bind(this);
  }

  showAll() {
    this.props.showModal(
      true,
      this.props.header,
      this.props.text,
      this.props.site,
      this.props.siteLabel,
      this.props.sourceCode,
      this.props.sourceCodeLabel,
    );
  }

  render() {
    return (
      <div
        id={this.props.portfolioId}
        className={this.props.className}
        onClick={this.showAll}
      >
        <PortfolioSummary summary={this.props.summary} center header={this.props.header} />
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
  site: PropTypes.string.isRequired,
  siteLabel: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  sourceCodeLabel: PropTypes.string.isRequired,
};

export default styled(PortfolioItem)`
  position: relative;
  cursor: pointer;
  background: ${backgroundColor};
  height: 240px;
`;
