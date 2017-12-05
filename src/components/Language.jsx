import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { palette } from './appSettings';

const color = theme('mode', {
  techno: palette.techno.backgroundColorB,
});

const backgroundColor = theme('mode', {
  techno: palette.techno.mainColor,
});

const font = theme('mode', {
  techno: palette.techno.textFont,
});

class Language extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    this.props.changeLanguage(this.props.langCode);
  }

  render() {
    return (
      <div className={this.props.className} onClick={this.changeLanguage}>
        {this.props.label}
      </div>
    );
  }
}

Language.propTypes = {
  label: PropTypes.string.isRequired,
  langCode: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default styled(Language)`
  display: inline;
  &:hover {
    text-decoration: underline;
  }
  padding: .25em 1em .25em 1em;
  cursor: pointer;
  user-select: none;
  font-size: 0.8em;
  font-family: ${font};
  ${props => props.langCode === props.selected && css`
    color: ${color};
    background-color: ${backgroundColor};
  `}
`;
