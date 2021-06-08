import React from "react"
import { Link } from "gatsby"

const Button = ({ children, hrefTo, linkTo, title, className }) => {
  return (
    <>
      {hrefTo ? (
        <a href={hrefTo} rel="noopener noreferrer" target="_blank">
          <button title={title} className={className}>
            {children}
          </button>
        </a>
      ) : (
        <Link to={linkTo}>
          <button title={title} className={className}>
            {children}
          </button>
        </Link>
      )}
    </>
  )
}

export default Button
