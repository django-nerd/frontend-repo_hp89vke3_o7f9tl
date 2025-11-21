import { useState } from "react";

export default function Contact(){
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if(!res.ok) throw new Error(data.detail || 'Errore');
      setStatus({ type: 'success', text: data.message || 'Messaggio inviato!' });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Errore durante l\'invio' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contattaci</h2>
        <p className="text-blue-100/80 mb-8">Richiedi una demo o maggiori informazioni: ti risponderemo al più presto.</p>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Nome e Cognome" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder:text-blue-100/50" />
          <input type="email" name="email" required placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder:text-blue-100/50" />
          <input name="phone" placeholder="Telefono" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder:text-blue-100/50" />
          <input name="subject" required placeholder="Oggetto" className="px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder:text-blue-100/50" />
          <textarea name="message" required rows="5" placeholder="Messaggio" className="md:col-span-2 px-4 py-3 rounded-lg bg-slate-800/60 border border-white/10 text-white placeholder:text-blue-100/50" />
          <div className="md:col-span-2 flex items-center gap-3">
            <button disabled={loading} className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white font-semibold">
              {loading ? 'Invio...' : 'Invia richiesta'}
            </button>
            {status && (
              <span className={`${status.type === 'success' ? 'text-green-400' : 'text-red-400'} text-sm`}>
                {status.text}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
