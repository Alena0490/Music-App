import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import { COLORS, SPACING, RADIUS } from '../constants/styles'

const Navigate = styled.nav`
  display: flex;
  gap: ${SPACING.large};
  justify-content: center;
  align-items: center;
  background: ${COLORS.surfaceTransparent};
`

const StyledNavLink = styled(NavLink)`
  color: ${COLORS.textSecondary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: ${SPACING.small} ${SPACING.medium};
  border-radius: ${RADIUS.rdsmall};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${COLORS.primary};
    background: ${COLORS.surfaceLight};
  }
  
  &.active {
    color: ${COLORS.primary};
    background: rgba(153, 255, 204, 0.1);
  }
`

const Navigation = () => {
  return (
    <Navigate>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/tunes">Tunes</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
    </Navigate>
  )
}

export default Navigation