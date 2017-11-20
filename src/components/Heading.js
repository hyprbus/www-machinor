import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import settings from './appSettings.js'

const Heading = (props) => {
  return (
    <h1 className={props.className}>
      {props.text}
    </h1>
  )
}

Heading.propTypes = {
  text: PropTypes.string.isRequired
}

export default styled(Heading)`
  color: ${settings.accentColor};
  font-size: 2em;
`