module.exports = connectionString => {
  const result = {}
  const arr = connectionString.split(';').filter(Boolean)
  if (arr[0] === connectionString) return result
  arr.forEach(item => {
    const r = item.split('=')
    const isKeyValExist = r.length === 2 && r[0] !== undefined && r[1] !== undefined
    if (isKeyValExist) return (result[r[0]] = r[1])
  })
  return result
}
