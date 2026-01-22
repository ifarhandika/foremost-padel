import { Link } from "react-router-dom"

export default function Button({
  children,
  href,
  to,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  isExternal = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full shadow-lg"

  const variants = {
    primary: "bg-[#013b82]/50 hover:bg-[#002a5e] text-white backdrop-blur-sm",
    secondary: "bg-white text-[#022754] hover:bg-[#022754] hover:text-white",
    dark: "bg-black text-white hover:bg-gray-800",
  }

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
