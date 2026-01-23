import { useState } from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { CONTACT_INFO } from "@/constants"
import { sendContactEmail } from "@/services/api"

const iconMap = {
  phone: <FaPhoneAlt className="text-white text-2xl mt-1" />,
  email: <FaEnvelope className="text-white text-2xl mt-1" />,
  location: <FaMapMarkerAlt className="text-white text-2xl mt-1" />,
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")
    setIsLoading(true)

    try {
      await sendContactEmail({
        subject: formData.subject,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })

      setStatus("Thank you for reaching out! We will get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus("Failed to send. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20 text-white text-left">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#0A1B55] p-6 md:p-10 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-left">
            GET IN TOUCH
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#4C6EF5] text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#4C6EF5] text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-left">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#4C6EF5] text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-left">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#4C6EF5] text-white focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
          {status && <p className="mt-4 text-sm">{status}</p>}
        </div>

        <div className="flex flex-col justify-center space-y-10 text-left">
          {CONTACT_INFO.map((item) => (
            <div key={item.id} className="flex items-start gap-5">
              {iconMap[item.iconName]}
              <div className="text-left">
                <h4 className="font-bold text-2xl">{item.title}</h4>
                <p className="text-xl">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
