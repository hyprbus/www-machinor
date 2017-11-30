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
import styled from 'styled-components';
import Button from './Button';
import PortfolioHeader from './PortfolioHeader';
import Text from './Text';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.props.cancelModal();
  }

  render() {
    if (!this.props.visible) {
      return null;
    }
    return (
      <div className={this.props.className} >
        <ModalWindow>
          <PortfolioHeader text={this.props.header} center />
          <Text text={this.props.text} />
          <div id="portfolioLinks">
            Links
          </div>
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
  links: [],
};

Modal.propTypes = {
  className: PropTypes.string.isRequired,
  header: PropTypes.string,
  text: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  visible: PropTypes.bool.isRequired,
  cancelModal: PropTypes.func.isRequired,
};

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
`;
