import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Page from './Page';
import Portfolio from '../containers/Portfolio';
import Row from './Row';
import Column from './Column';
import Modal from './Modal';
import Logo from './Logo';
import Heading from './Heading';
import Text from './Text';
import LanguageBar from './LanguageBar';
import { palette } from './appSettings';
import txt from '../functions/txt';

const Layout = (props) => {
  const { content } = props;
  if (content.length === 0) { return null; }
  return (
    <ThemeProvider theme={{ mode: 'techno', responsivity: 'responsivityA', spacing: 'none' }}>
      <Page>
        <Row>
          <Column small kind="fx" >
            <Logo color={palette.techno.colorStandard} />
          </Column>
          <Column kind="fx" center>
            <Text text={txt(content, 'email')} align="center" />
          </Column>
          <Column kind="fx" center>
            <Text text={txt(content, 'phone')} align="center" />
          </Column>
          <Column kind="fx" center>
            <Text text={txt(content, 'company')} align="center" />
          </Column>
        </Row>
        <Row>
          <Column tablet kind="fx">
            <LanguageBar
              selected={props.language}
              changeLanguage={props.changeLanguage}
            />
          </Column>
          <Column kind="default">
            <Heading text={txt(content, 'aboutHeader')} />
            <Text text={txt(content, 'aboutTxt1')} />
            <Text text={txt(content, 'aboutTxt2')} />
            <Text text={txt(content, 'aboutTxt3')} />
          </Column>
          <Column kind="default">
            <Heading text={txt(content, 'techSkillsHeader')} />
            <Text text={txt(content, 'techSkills')} />
          </Column>
          <Column kind="default">
            <Heading text={txt(content, 'langSkillsHeader')} />
            <Text text={txt(content, 'langSkills')} />
            <Heading text={txt(content, 'educationHeader')} />
            <Text text={txt(content, 'educationText')} />
            <Heading text={txt(content, 'otherSkillsHeader')} />
            <Text text={txt(content, 'otherSkills1')} />
            <Text text={txt(content, 'otherSkills2')} />
            <Text text={txt(content, 'otherSkills3')} />
          </Column>
        </Row>
        <Row>
          <Column kind="fx">
            <Heading
              text={txt(content, 'portfolioHeader')}
              align="center"
            />
          </Column>
        </Row>
        <Portfolio
          content={content}
          showModal={props.showModal}
        />
        <Modal
          visible={props.modalVisible}
          header={props.modalHeader}
          text={props.modalText}
          cancelModal={props.hideModal}
          animateModal={props.animateModal}
          site={props.site}
          siteLabel={props.siteLabel}
          sourceCode={props.sourceCode}
          sourceCodeLabel={props.sourceCodeLabel}
        />
      </Page>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  content: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  modalHeader: PropTypes.string.isRequired,
  modalText: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  animateModal: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  siteLabel: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  sourceCodeLabel: PropTypes.string.isRequired,
};

export default Layout;
