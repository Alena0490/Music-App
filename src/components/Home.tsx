import Title from "./Title"
import { useState } from "react"
import styled from 'styled-components'
import { SPACING, RADIUS } from '../constants/styles'
import ThumbnailImg from "../img/tunes.webp"

const Page = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${SPACING.small} 0 0;
`

const Thumbnail = styled.img`
  max-width: 450px;
  border-radius: ${RADIUS.rdlarge};
  margin: ${SPACING.small} auto 0;
`

const Home = () => {

    const [title] = useState("Welcome to the Sound")

    return (
        <Page>
            <Title>{title}</Title>
            <Thumbnail src={ThumbnailImg} alt="abstract background with headphones" />
        </Page>
    )
}

export default Home