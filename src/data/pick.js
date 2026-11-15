export function pickDaily(list, salt = 0) {
  const now = new Date()
  const day = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000)
  return list[(day + salt) % list.length]
}
