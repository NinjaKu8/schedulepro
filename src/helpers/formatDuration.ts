
export function formatDuration(milliseconds: number): string {
  const wholeTime = new Date(milliseconds).toISOString().slice(11, 16)
  if(wholeTime.startsWith('0')) return wholeTime.slice(1)
  return wholeTime
}