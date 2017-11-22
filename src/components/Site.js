import React from 'react'
import GetContent from '../containers/GetContent.jsx'
import { contentSource } from './appSettings.js'

function Site () {
  return (
      <GetContent source={contentSource} language="en" />
  )
}

export default Site
