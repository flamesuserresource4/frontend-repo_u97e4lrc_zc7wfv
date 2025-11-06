import { motion } from 'framer-motion'
import { Video, Radio, Code, PenTool } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Videography',
    desc: 'Cinematic capture, color‑graded edits, and story‑driven narratives for brands and creators.'
  },
  {
    icon: Radio,
    title: 'Live Streaming',
    desc: 'Multi‑camera broadcasts with overlays, graphics, and reliable delivery to all platforms.'
  },
  {
    icon: Code,
    title: 'Full‑Stack Solutions',
    desc: 'Custom microsites, dashboards, and automation to power your content workflow.'
  },
  {
    icon: PenTool,
    title: 'Creative Direction',
    desc: 'From concept to final frame — treatments, shot lists, and precise documentation.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Services</h2>
          <p className="mt-3 text-gray-600">Crafted to help brands communicate with clarity and style.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
