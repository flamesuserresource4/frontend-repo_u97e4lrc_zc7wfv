import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-black/80 px-3 py-1 text-xs font-medium tracking-wide text-white shadow-sm backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Mediabay — Live Streaming • Videography • Full‑Stack
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Innovative live streaming and videography by Mediabay
          </h1>
          <p className="mt-4 text-lg text-gray-700 md:text-xl">
            Personal portfolio of a full‑stack developer known for inventive, crystal‑clear documentation and world‑class broadcast experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:translate-y-[-2px] hover:bg-gray-800"
            >
              View Work
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white/80 px-5 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 backdrop-blur transition hover:bg-white"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
