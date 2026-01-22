export function formatEventTime(timeStr) {
  if (!timeStr) return ""
  return new Date(timeStr).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}
