import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // For now, we just simulate a send. Could be wired to backend later.
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! Your message has been sent.')
  }

  return (
    <section id="contact" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Let’s collaborate</h2>
          <p className="mt-3 text-gray-600">Tell me about your project — live stream, product video, or end‑to‑end build.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2"
        >
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input required type="text" className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input required type="email" className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea required rows="5" className="mt-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white shadow transition hover:bg-gray-800">
              Send Message
            </button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
