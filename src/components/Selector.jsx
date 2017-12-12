import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const selectedColor = theme('mode', {
  techno: palette.techno.colorStandard,
  mono: palette.mono.colorComplement,
});

const selectedBackgroundColor = theme('mode', {
  techno: palette.techno.backgroundStandard,
  mono: palette.mono.backgroundComplement,
});

const font = theme('mode', {
  techno: palette.techno.textFont,
  mono: palette.mono.textFont,
});

const fontSize = theme('mode', {
  techno: palette.techno.textSize,
  mono: palette.mono.textSize,
});

class Selector extends Component {
  constructor(props) {
    super(props);
    this.changeSelector = this.changeSelector.bind(this);
  }

  changeSelector() {
    this.props.changeSelector(this.props.selectorId);
  }

  render() {
    return (
      <div className={this.props.className} onClick={this.changeSelector}>
        {this.props.label}
      </div>
    );
  }
}

Selector.propTypes = {
  label: PropTypes.string.isRequired,
  selectorId: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  changeSelector: PropTypes.func.isRequired,
};

export default styled(Selector)`
  color: ${selectedBackgroundColor};
  display: inline;
  &:hover {
    text-decoration: underline;
  }
  padding: .25em 1em .25em 1em;
  cursor: pointer;
  user-select: none;
  font-size: ${fontSize};
  font-family: ${font};
  ${props => props.selectorId === props.selected && css`
    color: ${selectedColor};
    background-color: ${selectedBackgroundColor};
  `}
`;
