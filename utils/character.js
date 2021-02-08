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

export const getMajorStat = (character) => {
  const powerstats = character.powerstats
  const stats = Object.keys(powerstats)

  let highest = 0
  let res = ''

  stats.map((stat) => {
    const val = Number(powerstats[stat])
    if (!isNaN(val) && val > highest) {
      highest = val
      res = stat
    }
    return true
  })
  return res
}
