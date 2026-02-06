import { useState, useEffect, useCallback } from "react"
import type { Song, iTunesTrack } from "../constants/types"
import styled from 'styled-components'
import { SPACING, COLORS } from '../constants/styles'
import Button from './Button'
import Title from "./Title"
import TunesSearchForm from "./tunes/TunesSearchForm"
import TunesList from "./tunes/TunesList"

const Page = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${COLORS.backgroundTransparent};
  padding-top: ${SPACING.xlarge};
  align-items: center;
  margin: -2rem 0 0;
`

const Tunes = () => {
  const [query, setQuery] = useState("")
  const [songs, setSongs] = useState<Song[]>([]) 
  const [limit, setLimit] = useState(12)  
  const [hasMore, setHasMore] = useState(true) 

  const handleInput = (value: string) => {
    setQuery(value)

    if (value.length === 0) {
      setSongs([])
    }
  }

  const extractData = ({trackId, artistName, trackName,collectionName, artworkUrl100, previewUrl}: iTunesTrack ) => {
    return {
      id: trackId,
      artist: artistName,
      name: trackName,
      album: collectionName,
      albumArt: artworkUrl100,
      previewUrl: previewUrl
    }
  }

  const filteredSongs = songs.filter(song => {
    const searchLower = query.toLowerCase()
    return (
      song.artist.toLowerCase().includes(searchLower) ||
      song.name.toLowerCase().includes(searchLower)
    )
  })

  // useCallback 
  const searchForMusic = useCallback(() => {
    if (!query) return
    
    console.log("Calling API:", query)
    // API CALL:
    fetch(`https://itunes.apple.com/search?term=
      ${encodeURI(query)}
      &entity=musicTrack
      &limit=${limit}`)
        .then(response => response.json())
        .then(data => {
           const iTunesSongs = data.results.filter(
              (song: iTunesTrack) => song.kind === 'song'
            )
 
          // Song map
          const mappedSongs = iTunesSongs.map((song: iTunesTrack) => extractData(song))
          
          setSongs(mappedSongs)
          setHasMore(mappedSongs.length >= limit)
        })
    }, [query, limit])

  // Debounced search
  useEffect(() => {
    if (query.length === 0) {
      return
    }

    const timer = setTimeout(() => {
      searchForMusic()
    }, 500)

    return () => clearTimeout(timer)
  }, [query, searchForMusic])
  
  const loadMore = () => {
    setLimit(limit + 12)
  }

  return (
    <Page className="page">
      <Title>Tunes</Title>
      <TunesSearchForm
        query={query}
        onChange={handleInput}
        searchForMusic={searchForMusic}
      />

      <TunesList
        songs={filteredSongs}
      />

      <Button onClick={loadMore} disabled={!hasMore}>
        {hasMore ? 'Load More' : 'No More Songs'}
      </Button>
    </Page>
  )
}

export default Tunes