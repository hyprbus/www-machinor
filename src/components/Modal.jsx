import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import Button from './Button';
import PortfolioHeader from './PortfolioHeader';
import Text from './Text';
import LinkElement from './LinkElement';
import { palette } from './appSettings';

const color = theme('mode', {
  techno: palette.techno.colorStandard,
});
const backgroundColor = theme('mode', {
  techno: palette.techno.backgroundStandard,
});
const font = theme('mode', {
  techno: palette.techno.textFont,
});

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel() {
    this.props.cancelModal();
  }

  render() {
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
          <ModalTop>
            <PortfolioHeader
              text={this.props.header}
              center
            />
          </ModalTop>
          <ModalCenter>
            <Text text={this.props.text} />
            <div>{appSite}</div>
            <div>{sourceSite}</div>
          </ModalCenter>
          <ModalBottom>
            <Button text="Close" click={this.handleCancel} />
          </ModalBottom>
        </ModalWindow>
      </div>
    );
  }
}

const enterAnimation = keyframes`
  0% { transform: scale(0); }
  75% { transform: scale(1); }
  76% { background-color: rgba(0, 0, 0, 0); }
  100% { background-color: rgba(0, 0, 0, .7); }
}
`;

const exitAnimation = keyframes`
0% { background-color: rgba(0, 0, 0, .7); }
24% { background-color: rgba(0, 0, 0, 0); }
25% { transform: scale(1); }
100% { transform: scale(0); }
`;

const ModalTop = styled.div`
  /* align-self: flex-start; */
  width: 100%;
`;
const ModalCenter = styled.div`
  width: 90%;
  padding: 0 0 10px 0;
`;
const ModalBottom = styled.div`
  /* align-self: flex-end; */
  width: 90%;
  padding: 20px 0 20px 0;
`;

const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColor};
  width: 80%;
  max-width: 896px;
  margin: 2% auto 2% auto;
  padding: 0 0 10px 0;
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
  animateModal: PropTypes.oneOf(['', 'in', 'out']).isRequired,
  cancelModal: PropTypes.func.isRequired,
  site: PropTypes.string.isRequired,
  siteLabel: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  sourceCodeLabel: PropTypes.string.isRequired,
};

export default styled(Modal)`
  font-family: ${font};
  font-size: 1em;
  color: ${color};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100
  %; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  margin: 0 auto;
  ${props => props.animateModal === 'in' && css`
    animation: ${enterAnimation} .25s ease-in forwards;
`}
  ${props => props.animateModal === 'out' && css`
    animation: ${exitAnimation} .25s ease-in forwards;
  `}
`;
