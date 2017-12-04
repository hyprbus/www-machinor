import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
  font-family: ${props => props.theme.textFont};
  ${props => props.langCode === props.selected && css`
    color: ${props => props.theme.backgroundColorB};
    background-color: ${props => props.theme.mainColor};
  `}
`;
