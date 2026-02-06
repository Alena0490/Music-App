import Title from "./Title"
import styled from 'styled-components'
import { SPACING, COLORS } from '../constants/styles'

const Page = styled.section`
    max-width: 1200px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin:  -2rem auto 0;
    background-color: ${COLORS.backgroundTransparent};
    padding: ${SPACING.xlarge};
`

const Content = styled.div`
  max-width: 600px;
  text-align: center;
  margin-top: ${SPACING.large};
  
  p {
    color: ${COLORS.text};
    font-size: 1.375rem;
    line-height: 1.6;
    margin-bottom: ${SPACING.medium};
  }
`

const About = () => {
  return (
    <Page>
      <Title>About</Title>
      <Content>
        <p>
          This is a music search application built with React and TypeScript, 
          powered by the iTunes API.
        </p>
        <p>
          Search for your favorite songs, discover new music, and preview tracks 
          directly in your browser.
        </p>
      </Content>
    </Page>
  )
}

export default About