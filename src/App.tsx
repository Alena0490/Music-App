import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Tunes from "./components/Tunes"
import About from "./components/About"
import styled from 'styled-components'
import { COLORS, SPACING } from './constants/styles'
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  background: ${COLORS.surface};
  color: ${COLORS.text};
  padding: ${SPACING.xlarge} ${SPACING.large};
  border-bottom: 1px solid ${COLORS.border};
`

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${SPACING.large};
  background-image: radial-gradient(
    ellipse at center 9rem,
    #1a4d3a 5%,
    #11291c 35%,
    ${COLORS.background} 70%,
    #000
  );
  min-height: 100vh;
`

const Footer = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background: ${COLORS.surface};
  color: ${COLORS.textSecondary};
  padding: ${SPACING.medium} ${SPACING.large} ${SPACING.small};
`

const Socials = styled.div`
  display: flex;
  gap: ${SPACING.medium};

  a {
    display: inline-flex;
    align-items: flex-end;
    color: ${COLORS.textSecondary};
    font-size: 1.75rem;
    transition: color 0.3s ease, transform 0.3s ease;
    
    &:hover {
      color: ${COLORS.primary};
      transform: translateY(-3px);
    }
  }
`

const Copy = styled.p`
  font-size: 0.9rem;
  color: ${COLORS.textMuted};
  margin: 0;
`

const App = () => {

  return (
    <BrowserRouter basename="/Music-App">
      <Header>
        <Navigation/>
      </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tunes" element={<Tunes />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </Main>
        <Footer>
          <Socials>
            <a 
              href="https://www.linkedin.com/in/alena-pumprova/details/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://www.facebook.com/alena.pumprova/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookSquare/>
            </a>
            <a 
              href="https://github.com/Alena0490" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithubSquare />
            </a>
          </Socials>
          <Copy>
            © 2025 Alena Pumprová
          </Copy>
        </Footer>
    </BrowserRouter>
  )
}

export default App