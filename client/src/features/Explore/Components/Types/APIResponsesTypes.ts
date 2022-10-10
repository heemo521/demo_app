export interface Events {
  _id: string
  timezone: string
  name: string
  startUtc: string // utc timezone
  venueName: string
  location: {
    coordinates: number[]
    type: string
  }
  flyer: string
  url: string
  groupName: string
  groupAvi: string
}

export type CitiesProps = 'new york' | 'miami' | 'los angeles' | 'near me'
