import { motion } from 'framer-motion'
import img1 from '../assets/img1.jpg'


const classPanels = [
  {
    title: 'Power Circuit',
    subtitle: 'HIIT + Técnicas de patadas',
    description: 'Rutas intensas con timers, cuerdas y foco en la explosividad.',
    image: 'https://images.unsplash.com/photo-1508255136891-7f4d8f6ed0ce?auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Sparring Vision',
    subtitle: 'Golpeo de combate real',
    description: 'Entrena con compañeros variados para adaptar reflejos y defensa.',
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=60',
  },
  {
    title: 'Ritmo Sensei',
    subtitle: 'Trabajo técnico y respiración',
    description: 'Cadenas de combos que terminan con estiramientos guiados y mantra.',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=900&q=60',
  },
]

function LandingPage() {
  const motionFade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } }
  const marqueeText = 'KICKBOXING • KARATE KYOKUSHIN • '

  return (
    <>
      <div className="min-h-screen bg-[#09090b] text-white">
        <section
          className="relative min-h-[85vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.7)),linear-gradient(135deg,#D3151E00,#D3151E60),url(${img1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(211,21,30,0.4),transparent_55%)]" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center gap-6 px-6 py-16 md:px-8">
          <motion.p {...motionFade} className="text-xs uppercase tracking-[0.6em] text-gray-300">
            Aquí nadie pelea solo
          </motion.p>
          <motion.h1
            {...motionFade}
            transition={{ duration: 1 }}
            className="text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] md:text-7xl lg:text-8xl"
          >
            Tu mejor versión
            <span className="block text-red-500">se forja sudando.</span>
          </motion.h1>
          <motion.p {...motionFade} transition={{ delay: 0.2, duration: 0.8 }} className="max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            En Onekick rompemos la calma para crear fuerza. Cada sesión combina técnica explosiva, disciplina mental y una comunidad que empuja hasta el final.
          </motion.p>
          <motion.div {...motionFade} transition={{ delay: 0.4, duration: 0.7 }} className="flex flex-wrap gap-4">
            <span className="rounded-full border border-red-600/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-red-400">
              Agenda tu clase
            </span>
          </motion.div>
        </div>
        {/* Degradado de transición suave hacia el fondo */}
        <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-b from-transparent to-[#09090b] z-10 pointer-events-none" />
      </section>

      <section className="relative z-20 -skew-y-3 mt-40 bg-transparent">
        <div className="relative py-24 bg-transparent overflow-hidden">
          <div className="relative -skew-y-3 h-28 overflow-hidden">
            <div className="absolute inset-0 skew-y-3 bg-white" />
            <div className="absolute inset-0 flex items-center bg-white" style={{ paddingLeft: '5vw' }}>
              <div
                className="flex gap-16 text-4xl font-black uppercase tracking-[0.6em] text-[#D3151E]"
                style={{ animation: 'marquee 60s linear infinite' }}
              >
                <span className="whitespace-nowrap">{marqueeText.repeat(4)}</span>
                <span className="whitespace-nowrap">{marqueeText.repeat(4)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl space-y-10 px-6 py-20 sm:px-8">
        <div className="-skew-y-3 py-12">
          <div className="skew-y-3 grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=60"
                alt="Sensei"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
            </div>
            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/60 p-8 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.6em] text-gray-400">Sensei Sergio Aguilera</p>
              <h3 className="text-3xl font-black text-white">Cinturón Negro Kickboxing & Kyokushin</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                18 años guiando guerreros urbanos. Su filosofía combina el rigor japonés con los ritmos latinos de nuestra ciudad. Aquí la técnica tiene alma y la disciplina se viste de humanidad.
              </p>
              <p className="text-lg font-semibold italic text-red-400">“Cada pistolada que das al saco es un paso más cerca del próximo título.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black/90 px-6 py-20 sm:px-8">
        <div className="-skew-y-3">
          <div className="skew-y-3 mx-auto max-w-6xl space-y-10">
            <motion.div {...motionFade} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.6em] text-gray-400">Sesiones</p>
              <h4 className="text-3xl font-semibold uppercase tracking-[0.4em] text-white">Clases de Alto Impacto</h4>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3">
              {classPanels.map((panel, index) => (
                <motion.article
                  key={panel.title}
                  {...motionFade}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.6 }}
                  className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 text-white backdrop-blur-md"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2)), url(${panel.image})`,
                    }}
                  />
                  <div className="relative z-10 space-y-3">
                    <h5 className="text-sm font-semibold uppercase tracking-[0.45em] text-red-400">{panel.subtitle}</h5>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{panel.title}</h3>
                    <p className="text-sm text-gray-200">{panel.description}</p>
                    <span className="inline-block text-xs uppercase tracking-[0.5em] text-gray-400">Ver clase</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </>
  )
}

export default LandingPage
