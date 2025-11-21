const features = [
  {
    title: "Anagrafica completa",
    desc: "Gestisci profili arbitri, ruoli, qualifiche, disponibilità e storico. Tutto centralizzato.",
  },
  {
    title: "Designazioni smart",
    desc: "Automatizza le nomine con criteri personalizzati e vincoli. Riduci errori e tempi.",
  },
  {
    title: "Comunicazioni",
    desc: "Invia email e notifiche mirate per gruppi o singoli con tracciamento letture.",
  },
  {
    title: "Documenti & scadenze",
    desc: "Condividi circolari, calendari, referti e gestisci scadenze con promemoria.",
  },
  {
    title: "Area formazione",
    desc: "Quiz, materiali didattici, feedback e statistiche sui progressi.",
  },
  {
    title: "Reportistica",
    desc: "Statistiche su attività, designazioni, presenze e performance.",
  },
];

export default function Features(){
  return (
    <section id="features" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Funzionalità principali</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl bg-slate-800/50 border border-white/10">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
