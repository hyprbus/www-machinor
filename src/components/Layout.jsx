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
import PortfolioItem from './PortfolioItem';
import LanguageBar from './LanguageBar';
import Language from './Language';
import Potato from '../images/potato.svg';
import Alien from '../images/spaceinvader.svg';
import Game from '../images/game.svg';
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

  const portfolioData = [
    { image: Potato, header: 'portfolio1', summary: 'portfolio1Desc' },
    { image: Alien, header: 'portfolio2', summary: 'portfolio2Desc' },
    { image: Game, header: 'portfolio3', summary: 'portfolio3Desc' },
  ];
  const portfolio = [];
  portfolioData.forEach((p) => {
    const SVGElement = p.image;
    portfolio.push(
      <SmallColumn>
        <PortfolioItem
          key={p.header}
          header={txt(content, p.header)}
          summary={txt(content, p.summary)}
        >
          <SVGElement
            fill={theme.accentColor}
            opacity="0.5"
          />
        </PortfolioItem>
      </SmallColumn>);
  });

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
            <Text text={txt(content, 'email')} />
          </Column>
          <Column>
            <Text text={txt(content, 'phone')} />
          </Column>
          <Column>
            <Text text={txt(content, 'company')} />
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
          {portfolio}
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
