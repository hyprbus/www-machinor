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
      content: [],
      language: "en"
    }
    this.getTextContent = this.getTextContent.bind(this)
  }

  getTextContent(source, language) {
    readFile(source, (data) => {
      let filteredContent = []
      for (let i = 0; i < data.length; i++ ) {
        let langObj = {}
        langObj.id = data[i].id
        langObj.text = data[i][language]
        filteredContent.push(langObj)
      }
      this.setState({
        content: filteredContent,
        language: language
      })
    })
  }

  componentDidMount() {
    this.getTextContent(this.props.source, this.props.language)
  }
  render() {
    return (
      <Layout 
        content={this.state.content}
        language={this.state.language}
        changeLanguage={this.getTextContent.bind(this, this.props.source)}  
      />
    )
  }
}

GetContent.propTypes = {
  source: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}
