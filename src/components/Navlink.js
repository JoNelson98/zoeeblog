import React from "react"
import { Link } from "react-router-dom"
import { StyledNavLink } from "./Styles.js/Navlink.styled"

export default function Navlink({ children, context, props }) {
  const isActive = context.router.route.location.pathname === props.to
  const className = isActive ? "active" : ""
  return (
    <Link
      style={{
        fontWeight: isActive ? "bold" : "normal",
      }}
      isActive={isActive}
      className={className}
    >
      {children}
    </Link>
  )
}
