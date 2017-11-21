import React from 'react'
import Logo from './Logo.js'
import Ingress from './Ingress.js'
import Heading from './Heading.jsx'
import theme from './appSettings'
import {ThemeProvider} from 'styled-components'

function Site () {
  const ingress = `I build tiny machines out of bits: web applications that run in the cloud.
  My main interest is achieving superior usability with speed and visualisation. In practice, this means super-fast user interfaces implemented with React and using vector graphics (SVG) for visualisation and interaction.
  Technologies and tools I use: React, Node.js, Webpack, Git, Azure, Docker
  `
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Logo color="#dddddd" />
        <Heading text="About" />
        <Ingress text={ingress} />
        <div>Hello Machinor lovers! Love your code!</div>
      </div>
    </ThemeProvider>
  )
}
export default Site