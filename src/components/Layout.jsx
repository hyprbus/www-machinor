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
import SelectorGroup from './SelectorGroup';
import Contact from './Contact';
import txt from '../functions/txt';

const Layout = (props) => {
  const { siteStyle } = props;
  const { content } = props;
  if (content.length === 0) {
    return null;
  }
  const translate = tag => txt(content, tag);
  return (
    <ThemeProvider
      theme={{
        mode: siteStyle,
        responsivity: 'responsivityA',
        spacing: 'normal',
      }}
    >
      <Page>
        <Row>
          <Column small kind="complement">
            <Logo />
          </Column>
          <Column kind="complement" center>
            <Contact contactType="mail" contact={translate('email')}>
              <Text compact text={translate('email')} align="center" />
            </Contact>
          </Column>
          <Column kind="complement" center>
            <Contact contactType="phone" contact={translate('phone')}>
              <Text compact text={translate('phone')} align="center" />
            </Contact>
          </Column>
          <Column kind="complement" center>
            <Text compact text={translate('company')} align="center" />
          </Column>
        </Row>
        <Row>
          <Column tablet kind="complement">
            <Heading text={translate('slogan')} extraLarge />
            <SelectorGroup
              id="languageSelector"
              selectors={props.langSelectors}
              selected={props.language}
              changeSelector={props.changeLanguage}
            />
            <SelectorGroup
              id="styleSelector"
              selectors={props.styleSelectors}
              selected={props.siteStyle}
              changeSelector={props.changeStyle}
            />
          </Column>
          <Column kind="fx">
            <Heading text={translate('aboutHeader')} />
            <Text text={translate('aboutTxt1')} />
            <Text text={translate('aboutTxt2')} />
          </Column>
          <Column kind="default">
            <Heading text={translate('techSkillsHeader')} />
            <Text text={translate('techSkills')} />
            <Text text={translate('aboutTxt3')} />
          </Column>
          <Column kind="default">
            <Heading text={translate('langSkillsHeader')} />
            <Text text={translate('langSkills')} />
            <Heading text={translate('educationHeader')} />
            <Text text={translate('educationText')} />
            <Heading text={translate('otherSkillsHeader')} />
            <Text text={translate('otherSkills1')} />
            <Text text={translate('otherSkills2')} />
            <Text text={translate('otherSkills3')} />
          </Column>
        </Row>
        <Row>
          <Column kind="complement">
            <Heading
              text={translate('portfolioHeader')}
              align="center"
              large
            />
          </Column>
        </Row>
        <Portfolio content={content} showModal={props.showModal} />
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
  langSelectors: PropTypes.arrayOf(Object).isRequired,
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
  siteStyle: PropTypes.string.isRequired,
  styleSelectors: PropTypes.arrayOf(Object).isRequired,
  changeStyle: PropTypes.func.isRequired,
};

export default Layout;
