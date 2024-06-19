export const current = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const dateArray = date.toString().split(' ')
  const day = Number(dateArray[2])
  return {day, month, year, hour: '0:00'}
}
