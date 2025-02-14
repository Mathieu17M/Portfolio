import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const sendEmail = async () => {
    try {
      const response = await fetch('https://api.emailservice.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'mathieu.mayard@epitech.eu',
          subject: 'New Contact Form Submission',
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
        })
      })
      if (!response.ok) {
        throw new Error('Failed to send email')
      }
      console.log('Email sent successfully')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendEmail()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-gray-300 mb-4">You can reach me at: <a href="mailto:mathieu.mayard@epitech.eu" className="text-accent hover:underline">mathieu.mayard@epitech.eu</a></p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-secondary text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-secondary text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-secondary text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
