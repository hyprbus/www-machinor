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
  background-color: darkcyan;
  color: white;
  margin: 2px;
  padding: 2px;
`