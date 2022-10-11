export const cityMap = {
  nyc: [40.73061 - 73.935242],
  mia: [25.761681 - 80.191788],
  la: [34.134117, -118.321495],
}

export const getCoordinates = (key: string, latitude: number, longitude: number) => {
  switch (key) {
    case 'nyc':
      return cityMap.nyc

    case 'mia':
      return cityMap.mia

    case 'la':
      return cityMap.la
    case 'near':
      return [latitude, longitude]
    default:
      return [0, 0]
  }
}
