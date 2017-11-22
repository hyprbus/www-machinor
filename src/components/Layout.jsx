import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row.jsx'
import Column from './Column.jsx'
import SmallColumn from './SmallColumn.jsx'
import Logo from './Logo.js'
import Ingress from './Ingress.js'
import Heading from './Heading.jsx'
import Text from './Text.jsx'
import { theme } from './appSettings.js'
import {ThemeProvider} from 'styled-components'

const Layout = (props) => {
  const { content } = props
  if (content.length === 0) { return null }
  else {
  return (
    
    <ThemeProvider theme={theme}>
      <div>
        <Row>
          <SmallColumn>
            <Logo color="#dddddd" />
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
          <SmallColumn><Text text="Example 1" /></SmallColumn>
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
  content: PropTypes.array.isRequired
}

function txt(objArray, id) { return objArray.find(element => element.id === id).text }

export default Layout
