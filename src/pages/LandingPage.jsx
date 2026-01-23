import { motion } from 'framer-motion'
import img1 from '../assets/img1.jpg'
import Footer from '../components/Footer'
import sensei from '../assets/sensei.jpg'
import karat from '../assets/karat.jpg'
import box from '../assets/box.jpg'

const disciplinePosters = [
  {
    title: 'KICKBOXING',
    tag: 'IMPACTO EN FUEGO',
    description:
      'Entrenamientos explosivos donde cada golpe se celebra como un ritual. Ritmo, furia y control técnico.',
    image: box,
  },
  {
    title: 'KARATE KYOKUSHIN',
    tag: 'RAÍCES & AMBICIÓN',
    description:
      'Disciplina milenaria que exige precisión absoluta. La paciencia del karate y la intensidad del Kyokushin se fusionan.',
    image: karat,
  },
]

function LandingPage() {
  const motionFade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } }
  const marqueeText = 'KICKBOXING • KARATE KYOKUSHIN • '

  return (
    <>
      <div className="bg-black text-white">
        <section
          className="relative min-h-[100vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3)),linear-gradient(135deg,#D3151E00,#D3151E60),url(${img1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(211,21,30,0.4),transparent_55%)]" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center gap-6 px-6 py-16 md:px-8 lg:py-36">
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
            <a
              href="https://wa.me/569957932469?text=Hola,%20vengo%20de%20la%20web%20y%20quiero%20agendar%20mi%20clase%20de%20prueba."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-red-600/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-red-400 transition duration-200 ease-out transform hover:scale-105"
            >
              Agenda tu clase
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-b from-transparent via-black/80 to-black z-10 pointer-events-none"></div>
      </section>

      <section className="relative z-20 -skew-y-3 mt-30 bg-transparent">
        <div className="relative py-20 bg-transparent overflow-hidden">
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

      <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/70 to-black/80 px-4 py-16 sm:px-10 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(211,21,30,0.25),transparent_60%)]" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div className="relative flex items-end justify-center lg:justify-start">
              <div className="relative h-[520px] w-full max-w-sm overflow-hidden rounded-[32px] border border-white/10 shadow-[0_35px_120px_rgba(211,21,30,0.55)]">
                <img
                  src={sensei}
                  alt="Sensei Sergio Aguilera"
                  className="h-full w-full object-cover transition duration-1000"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>
            <div className="relative -mt-12 rounded-[32px] border border-white/20 bg-black/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.75)] backdrop-blur-xl lg:-mt-20 lg:-ml-12">
              <p className="text-xs uppercase tracking-[1em] text-red-500">Sensei</p>
              <h2 className="text-5xl font-black uppercase tracking-tight text-white md:text-6xl">Sergio Aguilera</h2>
              <h3 className="text-sm uppercase tracking-[0.7em] text-neutral-400">Cinturón Negro 3º Dan Kyokushin &amp; Kickboxing</h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
                En la sala de Onekick se respira historia. Su metodología mezcla la dureza del dojo japonés con la ferocidad de los rings urbanos; cada instrucción es un llamado a la entrega total.
              </p>
              <p className="mt-6 text-2xl font-serif italic text-gray-200">“Cada pistolada que das al saco es un paso más cerca del próximo título.”</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black/90 px-6 py-16 sm:px-8 mb-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.7em] text-red-500">Disciplinas</p>
            <h4 className="text-3xl font-semibold uppercase tracking-[0.35em] text-white">Pósters de Impacto</h4>
            <p className="max-w-3xl text-sm text-neutral-400">
              Dos mundos, una misma intensidad. Estas composiciones celebran la velocidad del Kickboxing y la pureza del Karate Kyokushin con luz, sombra y drama.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {disciplinePosters.map((poster) => (
              <article
                key={poster.title}
                className="group relative h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition duration-700 will-change-transform"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${poster.image})` }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_60%)] opacity-0 transition duration-700 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 pt-10 text-white">
                  <p className="text-xs uppercase tracking-[0.6em] text-red-400">{poster.tag}</p>
                  <h3 className="mt-3 text-4xl font-black uppercase tracking-[0.3em] transition duration-500 group-hover:-translate-y-4 md:text-5xl">
                    {poster.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm text-white/80">{poster.description}</p>
                </div>
                <div className="absolute inset-0 transition duration-700 group-hover:ring-2 group-hover:ring-red-600/50" />
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </>
  )
}

export default LandingPage
