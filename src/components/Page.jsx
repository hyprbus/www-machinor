import React from 'react'
import styled from 'styled-components'

const Page = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default styled(Page)`
  max-width: 1200px;
  margin: auto;
  background-color: ${props => props.theme.backgroundColorA};
`
