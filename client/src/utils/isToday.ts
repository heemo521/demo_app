export function isToday(date: string) {
  const today = new Date().toDateString()
  const dateString = new Date(date).toDateString()

  if (today === dateString) {
    return 'TODAY'
  }
  return dateString.split(' ')[0].toUpperCase()
}
