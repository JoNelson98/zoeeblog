import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StyledNavLink = styled(NavLink)`
  && {
    font-weight: ${({ to, location }) => (to === location ? "bold" : "normal")};
    color: ${({ to, location }) => (to === location ? "black" : "#7d878f")};
  }
`

export const NavWrap = styled.nav`
  .nav-items a:active {
    font-weight: bold;
  }
`
