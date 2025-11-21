export default function Services(){
  const items = [
    { title: "Setup e migrazione", desc: "Supporto completo per configurazione iniziale e import dati." },
    { title: "Assistenza dedicata", desc: "Canali prioritari per responsabili e referenti di sezione." },
    { title: "Personalizzazioni", desc: "Workflow e moduli su misura in base alle esigenze locali." },
  ];
  return (
    <section id="services" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Servizi professionali</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it)=> (
            <div key={it.title} className="p-6 rounded-xl bg-slate-800/50 border border-white/10">
              <h3 className="text-white font-semibold mb-2">{it.title}</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
