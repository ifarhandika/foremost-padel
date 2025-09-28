"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Sending...")

    emailjs
      .send(
        "your_service_id", // from EmailJS
        "your_template_id", // from EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "management@foremostpadel.com",
        },
        "your_public_key" // from EmailJS
      )
      .then(
        () => {
          setStatus("Message sent successfully!")
          setFormData({ name: "", email: "", subject: "", message: "" })
        },
        (error) => {
          console.error(error)
          setStatus("Failed to send. Please try again later.")
        }
      )
  }

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Form */}
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
                required></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold transition">
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
