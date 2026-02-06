import type { Song } from "../../constants/types"
import styled from 'styled-components'
import { SPACING } from '../../constants/styles'
import TunesSong from "./TunesSong"

type Props = {
  songs: Song[]
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto ${SPACING.large};
  width: min(1100px, 100%);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${SPACING.large};
`

const TunesList = ({ songs }: Props) => {

  return (
    <List>
        {songs.map(song => (
          <TunesSong key={song.id} song={song}/>
        ))}
    </List>
  )
}

export default TunesList
