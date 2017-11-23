import React from 'react'
import styled from 'styled-components'

const LanguageBar = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default styled(LanguageBar)`

`
