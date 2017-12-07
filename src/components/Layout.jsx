import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Page from './Page';
import Row from './Row';
import Column from './Column';
import Modal from './Modal';
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
import { palette } from './appSettings';
import txt from '../functions/txt';

const Layout = (props) => {
  injectGlobal`
    body {
      margin: 0;
      background-color: ${palette.techno.bodyColor};
    }
  `;

  const { content } = props;
  if (content.length === 0) { return null; }

  const portfolioData = [
    {
      image: Potato,
      header: 'portfolio1',
      summary: 'portfolio1Desc',
      description: 'portfolio1FullText',
      site: 'http://fatvegan.azurewebsites.net',
      sourceCode: 'https://github.com/hyprbus/fatvegan',
    },
    {
      image: Alien,
      header: 'portfolio2',
      summary: 'portfolio2Desc',
      description: 'portfolio2FullText',
      site: '',
      sourceCode: 'https://github.com/hyprbus/www-machinor',
    },
    {
      image: Game,
      header: 'portfolio3',
      summary: 'portfolio3Desc',
      description: 'portfolio3FullText',
      site: 'http://pandapropaganda.com/work/afrika_game/afrika.html',
      sourceCode: '',
    },
  ];
  const portfolio = [];
  portfolioData.forEach((p) => {
    const SVGElement = p.image;
    portfolio.push(
      <Column small key={p.header} kind="default">
        <PortfolioItem
          header={txt(content, p.header)}
          summary={txt(content, p.summary)}
          text={txt(content, p.description)}
          showModal={props.showModal}
          portfolioId={p.header}
          site={p.site}
          siteLabel={txt(content, 'portfolioLink')}
          sourceCode={p.sourceCode}
          sourceCodeLabel={txt(content, 'portfolioSourceCode')}
        >
          <SVGElement
            fill={palette.techno.accentStandard}
            opacity="0.5"
          />
        </PortfolioItem>
      </Column>);
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
    <ThemeProvider theme={{ mode: 'techno', responsivity: 'responsivityA', spacing: 'none' }}>
      <Page>
        <Row>
          <Column small kind="complement" >
            <Logo color={palette.techno.accentComplement} />
          </Column>
          <Column kind="default">
            <Invader color={palette.techno.colorStandard} />
          </Column>
        </Row>
        <Row>
          <Column kind="fx">
            <LanguageBar>
              {languages}
            </LanguageBar>
          </Column>
          <Column kind="default">
            <Text text={txt(content, 'email')} />
          </Column>
          <Column kind="default">
            <Text text={txt(content, 'phone')} />
          </Column>
          <Column kind="default">
            <Text text={txt(content, 'company')} />
          </Column>
        </Row>
        <Row>
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
        </Row>
        <Row>
          <Column kind="default">
            <Heading text={txt(content, 'langSkillsHeader')} />
            <Text text={txt(content, 'langSkills')} />
            <Heading text={txt(content, 'educationHeader')} />
            <Text text={txt(content, 'educationText')} />
          </Column>
          <Column kind="default">
            <Heading text={txt(content, 'otherSkillsHeader')} />
            <Text text={txt(content, 'otherSkills1')} />
            <Text text={txt(content, 'otherSkills2')} />
            <Text text={txt(content, 'otherSkills3')} />
          </Column>
        </Row>
        <Row>
          <Column kind="default">
            <Heading text={txt(content, 'portfolioHeader')} />
          </Column>
        </Row>
        <Row>
          {portfolio}
        </Row>
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
