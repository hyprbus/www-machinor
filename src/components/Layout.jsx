import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Page from './Page';
import Row from './Row';
import Column from './Column';
import SmallColumn from './SmallColumn';
import Logo from './Logo';
import Invader from './Invader';
import Heading from './Heading';
import Text from './Text';
import LanguageBar from './LanguageBar';
import Language from './Language';
import { theme } from './appSettings';
import txt from '../functions/txt';

const Layout = (props) => {
  injectGlobal`
    body {
      margin: 0;
      background-color: ${theme.bodyColor};
    }
  `;
  const { content } = props;
  if (content.length === 0) { return null; }

  const lang = [{ label: 'EN', langCode: 'en' }, { label: 'FI', langCode: 'fi' }, { label: 'SV', langCode: 'sv' }];
  const languages = [];
  lang.forEach(l =>
    languages.push(<Language
      key={l.langCode}
      label={l.label}
      langCode={l.langCode}
      selected={props.language}
      changeLanguage={props.changeLanguage}
    />));
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Row>
          <SmallColumn>
            <Logo color={theme.accentColor} />
            <LanguageBar>
              {languages}
            </LanguageBar>
          </SmallColumn>
          <Column>
            <Invader color={theme.mainColor} />
          </Column>
        </Row>
        <Row>
          <Column>
            <Heading text={txt(content, 'aboutHeader')} />
            <Text text={txt(content, 'aboutTxt1')} />
            <Text text={txt(content, 'aboutTxt2')} />
            <Text text={txt(content, 'aboutTxt3')} />
            <Heading text={txt(content, 'techSkillsHeader')} />
            <Text text={txt(content, 'techSkills')} />
            <Heading text={txt(content, 'educationHeader')} />
            <Text text={txt(content, 'educationText')} />
            <Heading text={txt(content, 'langSkillsHeader')} />
            <Text text={txt(content, 'langSkills')} />
            <Heading text={txt(content, 'otherSkillsHeader')} />
            <Text text={txt(content, 'otherSkills1')} />
            <Text text={txt(content, 'otherSkills2')} />
            <Text text={txt(content, 'otherSkills3')} />
          </Column>
        </Row>
        <Row>
          <Heading text={txt(content, 'portfolioHeader')} />
        </Row>
        <Row>
          <SmallColumn><Text text={txt(content, 'portfolio1')} /></SmallColumn>
          <SmallColumn><Text text="Example 2" /></SmallColumn>
          <SmallColumn><Text text="Example 3" /></SmallColumn>
          <SmallColumn><Text text="Example 4" /></SmallColumn>
          <SmallColumn><Text text="Example 5" /></SmallColumn>
        </Row>
        <Row>
          <Column>
            <Text text={txt(content, 'email')} />
          </Column>
          <Column>
            <Text text={txt(content, 'phone')} />
          </Column>
          <Column>
            <Text text={txt(content, 'company')} />
          </Column>
        </Row>
      </Page>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  content: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default Layout;
