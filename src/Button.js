import React from 'react'
import PropTypes from 'prop-types'


Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.string,
}

export default function Button({ onClick, color = 'hotpink', children }) {
    return (
      <button onClick={onClick} style={{ background: color }}>
        {children}
      </button>
    )
  }
