import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = (props) => {
  return (
    <h1 className={props.className}>
      [ {props.text} ]
    </h1>
  )
}

Heading.propTypes = {
  text: PropTypes.string.isRequired
}

export default styled(Heading)`
  font-family: ${props => props.theme.headerFont};
  color: ${props => props.theme.accentColor};
  font-size: 1em;
  font-weight: bold;
`
