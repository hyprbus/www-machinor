import React from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'
import Row from './Row.jsx'
import Column from './Column.jsx'
import SmallColumn from './SmallColumn.jsx'
import Logo from './Logo.js'
import Ingress from './Ingress.js'
import Heading from './Heading.jsx'
import Text from './Text.jsx'
import LanguageBar from './LanguageBar.jsx'
import Language from './Language.jsx'
import { theme } from './appSettings.js'
import txt from '../functions/txt.js'

const Layout = (props) => {
  const { content } = props
  if (content.length === 0) { return null }
  else {
  return (
    
    <ThemeProvider theme={theme}>
      <div>
        <Row>
          <SmallColumn>
            <Logo color={theme.accentColor} />
            <LanguageBar>
              <Language label="EN" langCode="en" selected={props.language} changeLanguage={props.changeLanguage} />
              <Language label="FI" langCode="fi" selected={props.language} changeLanguage={props.changeLanguage} />
              <Language label="SV" langCode="sv" selected={props.language} changeLanguage={props.changeLanguage} />
            </LanguageBar>
            </SmallColumn>
          <Column>
            <Ingress text={txt(content, "1")} />
          </Column>
        </Row>
        <Row>
          <Column>
            <Heading text={txt(content, "2")} />
            <Text
              text={txt(content, "3")}
            />
          </Column>
        </Row>
        <Row>
          <SmallColumn><Text text={txt(content, "4")} /></SmallColumn>
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
      </div>
    </ThemeProvider>
  )}
}

Layout.propTypes = {
  content: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired
}

export default Layout
