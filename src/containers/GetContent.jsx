// Container that reads text content from a json file, filters it based on language
// and passes it to child components for rendering

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import readFile from '../functions/readFile.js'
import Layout from '../components/Layout.jsx'

export default class GetContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: []
    }
    this.getTextContent = this.getTextContent.bind(this)
  }

  getTextContent(source, language) {
    readFile(source, (data) => {
      let filteredContent = data.filter(text => text.language === language)
      this.setState({
        content: filteredContent
      })
    })
  }

  componentDidMount() {
    this.getTextContent(this.props.source, this.props.language)
  }
  render() {
    return (
      <Layout content={this.state.content} />
    )
  }
}

GetContent.propTypes = {
  source: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}
