import React from 'react'
import PropTypes from 'prop-types'

const Logo = (props) => {
  return (
    <div>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 100" enableBackground="new 0 0 940 100">
        <g fill={props.color}>
          <path d="M0,0v100h140V0H0z M120,40v40h-20V40H80v40H60V40H40v40H20V40V20h20h20h20h20h20V40z"/>
          <path d="M160,0v100h100V0H160z M240,60v20h-20V60h-20v20h-20V60V20h20h20h20V60z"/>
          <path d="M280,0v100h100V0H280z M360,40h-40v20h40v20h-40h-20V60V40V20h20h40V40z"/>
          <path d="M400,0v100h100V0H400z M480,40v20v20h-20V60h-20v20h-20V60V40V20h20v20h20V20h20V40z"/>
          <path d="M520,0v100h60V0H520z M560,80h-20V20h20V80z"/>
          <path d="M600,0v100h100V0H600z M680,40v40h-20V40h-20v40h-20V40V20h20h20h20V40z"/>
          <rect x="760" y="40" width="20" height="20"/>
          <path d="M720,0v100h100V0H720z M800,40v20v20h-20h-20h-20V60V40V20h20h20h20V40z"/>
          <path d="M840,0v100h60V60h40V0H840z M920,40h-40v40h-20V40V20h20h40V40z"/>
        </g>
      </svg>  
    </div>
  )
}

Logo.propTypes = {
  color: PropTypes.string
}

export default Logo



