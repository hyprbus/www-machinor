// props:
//
// visible=true/false
// header=text
// children = child component(s)
// confirmationText = confirm button label
// cancelModal() = cancel modal callback
// approveModal() = approve modal callback

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import Button from './Button';
import PortfolioHeader from './PortfolioHeader';
import Text from './Text';
import LinkElement from './LinkElement';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.props.cancelModal();
  }

  render() {
    console.log(this.props.animateModal);
    if (!this.props.visible && this.props.animateModal === '') {
      return null;
    }
    const appSite = this.props.site.length > 0 ?
      <LinkElement label={this.props.siteLabel} link={this.props.site} /> :
      null;
    const sourceSite = this.props.sourceCode.length > 0 ?
      <LinkElement label={this.props.sourceCodeLabel} link={this.props.sourceCode} /> :
      null;
    return (
      <div className={this.props.className} >
        <ModalWindow>
          <PortfolioHeader text={this.props.header} center />
          <Text text={this.props.text} />
          <div>{appSite}</div>
          <div>{sourceSite}</div>
          <Button text="Close" click={this.handleCancel} />
        </ModalWindow>
      </div>
    );
  }
}

const ModalWindow = styled.div`
  background-color: ${props => props.theme.backgroundColorA};
  width: 80%;
  height: 70%;
  margin: 5% auto 0 auto;
  padding: 2% 5% 2% 5%;
`;

Modal.defaultProps = {
  header: 'Modal Header',
  text: 'Description Text',
};

Modal.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  cancelModal: PropTypes.func.isRequired,
  site: PropTypes.string.isRequired,
  siteLabel: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  sourceCodeLabel: PropTypes.string.isRequired,
};

const enterAnimation = keyframes`
from {
  transform: scale(0);
}

to {
  transform: scale(1);
}
`;

const exitAnimation = keyframes`
from {
  transform: scale(1);
}

to {
  transform: scale(0);
}
`;

export default styled(Modal)`
  font-family: ${props => props.theme.textFont}, ${props => props.theme.fallbackFont};
  font-size: 1em;
  color: ${props => props.theme.mainColor};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  margin: 0 auto;
  ${props => props.animateModal === 'in' && css`
    animation: ${enterAnimation} .2s ease-in forwards;;
  `}
  ${props => props.animateModal === 'out' && css`
  animation: ${exitAnimation} .2s ease-in forwards;
  `}
`;
