import styled from "styled-components"
import { COLORS, SPACING } from '../constants/styles'

const StyledTitle = styled.h1`
  color: ${COLORS.text};
  text-align: center;
  margin-bottom: ${SPACING.large};
  font-size: 2.5rem;
`

type TitleProps = {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export default Title