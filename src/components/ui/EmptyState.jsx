export default function EmptyState({ message = "No data available" }) {
  return <div className="py-10 text-center text-white">{message}</div>
}
