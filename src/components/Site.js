import React from 'react'
import GetContent from '../containers/GetContent.jsx'
import { CONTENTSOURCE } from './appSettings.js'

function Site () {
  return (
      <GetContent source={CONTENTSOURCE} language="en" />
  )
}

export default Site
