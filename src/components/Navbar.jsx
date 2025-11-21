import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  const links = [
    { id: "about", label: "Chi Siamo" },
    { id: "features", label: "Funzionalità" },
    { id: "services", label: "Servizi" },
    { id: "testimonials", label: "Testimonianze" },
    { id: "contact", label: "Contatti" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="CRM" className="w-8 h-8" />
          <span className="text-white font-semibold tracking-tight">Club Referee Manager</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-blue-100/80 hover:text-white transition-colors">
              {l.label}
            </button>
          ))}
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow">Richiedi Demo</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {links.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left text-blue-100/90 py-2">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} className="w-full px-4 py-2 rounded-lg bg-blue-500 text-white font-medium">Richiedi Demo</button>
        </div>
      )}
    </header>
  );
}
