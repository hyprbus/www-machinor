// layout column, takes as much space of the row as it can

import React from 'react'
import styled from 'styled-components'

const Column = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default styled(Column)`
  flex: 1;
  background-color: ${props => props.theme.backgroundColorA};
  color: ${props => props.theme.mainColor};
  margin: ${props => props.theme.columnMargin};
  padding: ${props => props.theme.columnPadding};
`