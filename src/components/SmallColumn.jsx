// layout column, has width max and min limitations for different screens

import React from 'react'
import styled from 'styled-components'

const SmallColumn = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default styled(SmallColumn)`
  flex: 1;
  background-color: ${props => props.theme.backgroundColorB};
  color: ${props => props.theme.mainColor};
  margin: ${props => props.theme.columnMargin};
  padding: ${props => props.theme.columnPadding};
  @media screen and (min-width: 1200px) {
    min-width: 22%;
    max-width: 25%;
  }
  @media screen and (min-width: 769px) and (max-width: 1199px) {
    min-width: 30%;
    max-width: 33%;
  }
`