import { Download } from 'lucide-react'
import horario from '../assets/horario.jpg'

function SchedulePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Capa de Atmósfera Roja Central */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-black/80 to-black" />
      <section className="relative z-10 px-6 pt-32 pb-12">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-white/60">Entrena fuerte</p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">HORARIOS DE ENTRENAMIENTO</h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            La disciplina es hacer lo que tengas que hacer, cuando lo tengas que hacer.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-4 pb-20">
        <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black/50 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.7)]">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_60px_rgba(211,21,30,0.35)]">
            <img
              src={horario}
              alt="Horario de entrenamiento"
              className="w-full rounded-[30px] object-cover"
            />
          </div>
          <button
            type="button"
            className="mt-8 flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Download size={18} />
            DESCARGAR HORARIO
          </button>
        </div>
      </section>
    </div>
  )
}

export default SchedulePage
