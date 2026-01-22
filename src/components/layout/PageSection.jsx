export default function PageSection({ children, className = "" }) {
  return (
    <section
      className={`bg-cover bg-center bg-black ${className}`}
      style={{ backgroundImage: "url('/foremost-bg.png')" }}
    >
      <div className="flex flex-col items-center justify-center text-center px-4">
        {children}
      </div>
    </section>
  )
}
