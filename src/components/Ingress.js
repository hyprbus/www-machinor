import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import settings from './appSettings.js'

const Ingress = (props) => {
  const { text } = props
  return (
    <div>
      {text + settings.accentColor}
    </div>
  )
}

Ingress.propTypes = {
  text: PropTypes.string.isRequired
}

export default styled(Ingress)`
font-size: 1em;
`
