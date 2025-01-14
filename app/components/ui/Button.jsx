import React, { Children } from 'react'

const button = ({type ,className="", children, onClick}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{children}</button>
  )
}

export default button