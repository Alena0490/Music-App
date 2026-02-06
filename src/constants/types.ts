export interface  Song {
    id: number
    name: string
    artist: string
    album: string
    albumArt?: string
    previewUrl?: string 
}

export interface iTunesTrack {
  trackId: number
  artistName: string
  trackName: string
  artworkUrl100: string
  previewUrl: string
  collectionName: string
  kind: string
}

export interface User {
    firstName: string
    lastName: string
    favouriteSong?: string
}