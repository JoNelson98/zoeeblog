import React from "react"
import "../styles/navigation.css"
import zoee from "../assets/images/logos.svg"
import notifications from "../assets/images/notifications.svg"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Avatar } from "@chakra-ui/react"
import user from "../data/user"
import { StyledNavLink } from "./Styles.js/Navlink.styled"
import Navlink from "./Navlink"

const Nav = () => {
  const location = useLocation()
  console.log("location:", location)
  return (
    <div className="nav-bar">
      <div className="nav-inner">
        <img src={zoee} alt="" />
        <div className="nav-items">
          <StyledNavLink location={location.pathname} to="/">
            Home
          </StyledNavLink>
          <StyledNavLink location={location.pathname} to="/contacts">
            Contacts
          </StyledNavLink>
        </div>
        <div className="nav-right">
          <img src={notifications} alt="notifications" />
          <Avatar boxSize="1.8em" bg="yellow.500" name={user.first_name} />
        </div>
      </div>
    </div>
  )
}

export default Nav
