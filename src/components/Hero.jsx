export default function Hero(){
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-slate-900 to-slate-900"/>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] bg-blue-500/10 rounded-full blur-3xl"/>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Gestisci la tua sezione arbitri con semplicità
          </h1>
          <p className="text-blue-100/90 text-lg mb-8">
            Tutto ciò che serve per organizzare membri, designazioni, comunicazioni e documenti in un'unica piattaforma.
          </p>
          <div className="flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow">Richiedi una demo</a>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10">Scopri le funzionalità</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl border border-white/10 bg-slate-800/40 shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500/20 rounded-2xl blur-2xl"/>
        </div>
      </div>
    </section>
  )
}
