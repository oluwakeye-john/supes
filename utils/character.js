export const getOverallStat = (character) => {
  const stats = Object.values(character.powerstats)
  const resp = stats.sort((a, b) => b - a).slice(0, 5)

  let total = 0
  resp.map((val) => {
    const num = Number(val)
    if (isNaN(num)) {
      return 0
    } else {
      return (total += num)
    }
  })

  return Math.round(total / resp.length)
}
