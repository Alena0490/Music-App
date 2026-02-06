import styled from 'styled-components'
import { COLORS, RADIUS, SPACING } from '../../constants/styles'
import type { Song } from '../../constants/types'

type Props = {
  song: Song
}

const shorten = (str: string, maxLen: number = 50): string => {
  if (str.length <= maxLen) return str
  return str.slice(0, maxLen) + '...'
}

const SongContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: visible;
    background: linear-gradient(
        135deg,
        ${COLORS.gradientStart} 0%,
        ${COLORS.gradientMid} 100%
    );
    border: 1px solid ${COLORS.borderLight};
    backdrop-filter: blur(12px);
    border-radius: ${RADIUS.rdmedium};
    padding: ${SPACING.large} ${SPACING.small};
    box-shadow: 0 12px 28px rgba(0,0,0,0.45);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 36px rgba(0,0,0,0.6);
    }
  
  animation: reveal 160ms ease-out both;

  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Cover = styled.img`
position: relative;
  width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: ${RADIUS.rdsmall};
  margin-bottom: ${SPACING.medium};
  transition: transform 0.25s ease;
  cursor: pointer;

  ${SongContainer}:hover & {
    transform: scale(1.04);
  }
`

const SongTitle = styled.h2`
  font-weight: 700;
  font-size: 1.1rem;
  color: ${COLORS.text};
  margin-bottom: ${SPACING.small};
  text-align: center;
`

const ArtistName = styled.span`
  font-weight: 600;
  color: ${COLORS.textSecondary};
  margin-bottom: ${SPACING.small};
`

const AlbumName = styled.span`
  font-size: 0.9rem;
  color: ${COLORS.textMuted};
  font-style: italic;
  margin-bottom: ${SPACING.medium};
`

const Audio = styled.audio`
  width: 92%;
  max-width: 320px;
  margin-top: auto;
  padding-top: ${SPACING.small};
  background: none;
  opacity: 0.85;
  border-top: 1px solid ${COLORS.border};
  
  &:hover {
    opacity: 1;
  }
`

const TunesSong = ({ song }: Props) => {
  const handlePlay = (e: React.SyntheticEvent<HTMLAudioElement>) => {
    const allAudio = document.querySelectorAll('audio')
    allAudio.forEach(audio => {
      if (audio !== e.currentTarget) {
        audio.pause()
      }
    })
  }

  return (
    <SongContainer>
      <Cover src={song.albumArt} alt={song.name} />
      <SongTitle>{shorten(song.name, 40)}</SongTitle>
      <ArtistName>{shorten(song.artist, 30)}</ArtistName>
      <AlbumName>{shorten(song.album || '', 35)}</AlbumName>
      <Audio src={song.previewUrl} controls onPlay={handlePlay} />
    </SongContainer>
  )
}

export default TunesSong