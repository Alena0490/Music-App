import { IoSearch } from "react-icons/io5"
import styled from 'styled-components'
import { COLORS, RADIUS, SPACING } from '../../constants/styles'

interface Props {
  query: string
  onChange: (value: string) => void
  searchForMusic: () => void
}

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  width: min(520px, 100%);
  margin: 0 auto ${SPACING.large};
`

const SearchIcon = styled(IoSearch)`
  position: absolute;
  left: ${SPACING.medium};
  top: 50%;
  transform: translateY(-50%);
  color: ${COLORS.primary};
  opacity: 0.9;
  pointer-events: none;
  font-size: 1.2rem;
  z-index: 2;
`

const Input = styled.input`
  width: 100%;
  border-radius: ${RADIUS.rdsmall};
  background: ${COLORS.backdropMedium};
  border: 1px solid ${COLORS.borderLight};
  backdrop-filter: blur(10px);
  outline: none;
  padding: ${SPACING.small} ${SPACING.medium} ${SPACING.small} 40px;
  color: ${COLORS.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${COLORS.textMuted};
  }

  &:focus {
    border-color: ${COLORS.primary};
    background: rgba(20, 40, 30, 0.8);
    box-shadow: 0 0 0 3px ${COLORS.borderLight};
  }
`

const TunesSearchForm = ({ query, onChange, searchForMusic }: Props) => {
  return (
    <SearchForm onSubmit={(e) => {
      e.preventDefault()
      searchForMusic()
    }}>
      <SearchIcon />
      <Input 
        type="text" 
        value={query} 
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for songs..."
      />
    </SearchForm>
  )
}

export default TunesSearchForm