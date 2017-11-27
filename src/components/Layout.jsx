import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, injectGlobal } from 'styled-components'
import Page from './Page.jsx'
import Row from './Row.jsx'
import Column from './Column.jsx'
import SmallColumn from './SmallColumn.jsx'
import Logo from './Logo.jsx'
import Invader from './Invader.jsx'
import Ingress from './Ingress.js'
import Heading from './Heading.jsx'
import Text from './Text.jsx'
import LanguageBar from './LanguageBar.jsx'
import Language from './Language.jsx'
import { theme } from './appSettings.js'
import txt from '../functions/txt.js'

const Layout = (props) => {
  injectGlobal`
    body {
      margin: 0;
      background-color: ${theme.bodyColor};
    }
  `
  const { content } = props
  if (content.length === 0) { return null }
  else {
  let lang = [{label: "EN", langCode: "en"}, {label: "FI", langCode: "fi"}, {label: "SV", langCode: "sv"}]
  let languages = []
  lang.forEach((l, i) =>
    languages.push( 
      <Language 
        key={"lang" + i}
        label={l.label} 
        langCode={l.langCode} 
        selected={props.language} 
        changeLanguage={props.changeLanguage} 
      />
    )
  )
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
            <Heading text={txt(content, "aboutHeader")} />
            <Text text={txt(content, "aboutTxt1")} />
            <Text text={txt(content, "aboutTxt2")} />
            <Text text={txt(content, "aboutTxt3")} />
            <Heading text={txt(content, "techSkillsHeader")} />
            <Text text={txt(content, "techSkills")} />
            <Heading text={txt(content, "educationHeader")} />
            <Text text={txt(content, "educationText")} />
            <Heading text={txt(content, "langSkillsHeader")} />
            <Text text={txt(content, "langSkills")} />
            <Heading text={txt(content, "otherSkillsHeader")} />
            <Text text={txt(content, "otherSkills1")} />
            <Text text={txt(content, "otherSkills2")} />
            <Text text={txt(content, "otherSkills3")} />
          </Column>
        </Row>
        <Row>
          <Heading text={txt(content, "portfolioHeader")} />
        </Row>
        <Row>
          <SmallColumn><Text text={txt(content, "portfolio1")} /></SmallColumn>
          <SmallColumn><Text text="Example 2" /></SmallColumn>
          <SmallColumn><Text text="Example 3" /></SmallColumn>
          <SmallColumn><Text text="Example 4" /></SmallColumn>
          <SmallColumn><Text text="Example 5" /></SmallColumn>
        </Row>
        <Row>
          <Column>
            <Text text="sebastian.nyberg@machinor.fi" />
          </Column>
          <Column>
            <Text text="+ 358 40 706 6006" />
          </Column>
          <Column>
            <Text text="Helsinki | Finland" />
          </Column>
        </Row>
      </Page>
    </ThemeProvider>
  )}
}

Layout.propTypes = {
  content: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired
}

export default Layout
