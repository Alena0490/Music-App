// src/components/Button.tsx
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { COLORS, SPACING, RADIUS } from '../constants/styles'

const buttonStyles = css`
  display: inline-block;
  background: ${COLORS.primary};
  color: ${COLORS.background};
  padding: ${SPACING.small} ${SPACING.medium};
  margin-top: ${SPACING.large};
  border-radius: ${RADIUS.rdmedium};
  text-decoration: none;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${COLORS.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(153, 255, 204, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
  opacity: 0.5;
    background-color: ${COLORS.surfaceLight};
    color: ${COLORS.textMuted};
    cursor: not-allowed;
    pointer-events: none;
    transform: none;
}
`

const StyledButton = styled(Link)`
  ${buttonStyles}
`

const StyledRegularButton = styled.button`
  ${buttonStyles}
`

type ButtonProps = {
  to?: string
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

const Button = ({ to, onClick, disabled, children }: ButtonProps) => {
  if (to) {
    return <StyledButton to={to}>{children}</StyledButton>
  }

  return (
    <StyledRegularButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledRegularButton>
  )
}

export default Button