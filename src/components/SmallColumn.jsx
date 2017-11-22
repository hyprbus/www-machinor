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
  background-color: darkcyan;
  color: white;
  margin: 2px;
  padding: 2px;
  @media screen and (min-width: 1200px) {
    min-width: 22%;
    max-width: 25%;
  }
  @media screen and (min-width: 769px) and (max-width: 1199px) {
    min-width: 30%;
    max-width: 33%;
  }
`