export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT'
export const UPDATE_FETCHING = 'UPDATE_FETCHING'
export const UPDATE_TRENDING = 'UPDATE_TRENDING'

export interface Character {
  id: string
  name: string
  image: {
    url: string
  }
  appearance: {
    'eye-color': string
    gender: string
    'hair-color': string
    height: any
    race: string
    weight: any
  }
  biography: {
    'full-name': string
    alias: any
    alignment: 'good' | 'bad' | 'neutral'
    'first-appearance': string
    'place-of-birth': string
    publisher: string
  }
  connections: any
  powerstats: {
    intelligence: string
    strength: string
    durability: string
    combat: string
    power: string
    speed: string
  }
}
