import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = (props) => {
  const { text } = props
  return (
    <p className={props.className}>
      {text}
    </p>
  )
}

Text.propTypes = {
  text: PropTypes.string.isRequired
}

export default styled(Text)`
  font-family: ${props => props.theme.textFont}, ${props => props.theme.fallbackFont};
  font-size: 1em;
`