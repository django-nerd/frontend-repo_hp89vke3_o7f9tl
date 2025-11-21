import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import CTA from './components/CTA'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <CTA />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-blue-100/70 text-sm flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Club Referee Manager. Tutti i diritti riservati.</p>
          <p>Realizzato per presentazione dimostrativa.</p>
        </div>
      </footer>
    </div>
  )
}

export default App