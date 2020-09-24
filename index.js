module.exports = connectionString => {
  const result = {}
  const arr = connectionString.split(';').filter(Boolean)
  if (arr[0] === connectionString) return result
  arr.forEach(item => {
    const keyValue = item.split('=').filter(Boolean)
    const key = keyValue[0]
    const value = keyValue[1]
    const isKeyValExist = keyValue.length === 2 && key !== undefined && value !== undefined
    if (isKeyValExist) return (result[key] = value)
  })
  return result
}
