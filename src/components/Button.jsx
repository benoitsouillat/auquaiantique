import React from 'react'

const Button = ({label, type}) => {
  return (
    <button className='button' type={type}>
        {label}
    </button>
  )
}

export default Button
