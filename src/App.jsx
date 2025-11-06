import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-inter text-gray-900 antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Mediabay — All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with care — innovative documentation included.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
