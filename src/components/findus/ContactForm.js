import { useState } from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function ContactForm() {
  const contactInfo = [
    {
      id: 1,
      icon: <FaPhoneAlt className="text-white text-2xl mt-1" />,
      title: "Whatsapp",
      detail: "+62 813 281 171 731",
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-white text-2xl mt-1" />,
      title: "Email",
      detail: "management@foremostpadel.com",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-white text-2xl mt-1" />,
      title: "Address",
      detail: (
        <>
          Jl. Gayung Kebonsari,
          <br /> Gayungan, Surabaya, Jawa Timur
        </>
      ),
    },
  ]

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

    const apiUrl = import.meta.env.VITE_BASE_API_URL

    try {
      const res = await fetch(
        `${apiUrl}/v1/email/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: formData.subject,
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        },
      )
      
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`)
      }

      const data = await res.json()

      setStatus("Thank you for reaching out! We will get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsLoading(false)
    } catch (error) {
      setStatus("Failed to send. Please try again later.")
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#0A1B55] p-6 md:p-10 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">GET IN TOUCH</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold">Name</label>
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
              <label className="block text-sm font-semibold">Email</label>
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
              <label className="block text-sm font-semibold">Subject</label>
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
              <label className="block text-sm font-semibold">Message</label>
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

        <div className="flex flex-col justify-center space-y-10">
          {contactInfo.map((item) => (
            <div key={item.id} className="flex items-start gap-5">
              {item.icon}
              <div>
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
