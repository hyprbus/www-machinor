// layout row

import React from 'react'
import styled from 'styled-components'

const Row = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default styled(Row)`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    display: block;
}
`
