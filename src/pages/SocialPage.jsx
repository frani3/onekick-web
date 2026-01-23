import { Instagram, Facebook } from 'lucide-react'

function SocialPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/90 via-black to-black text-white">
      <section className="px-6 pt-32 pb-12">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.6em] text-white/60">El muro social</p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">EL DOJO NO DUERME</h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            Entrenamientos, torneos y el día a día de nuestros guerreros. Síguenos y no te pierdas nada.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="https://www.instagram.com/academia_onekick/"
            className="group flex items-center justify-center gap-3 rounded-3xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-orange-400 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.4em] text-white transition duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Instagram size={20} />
            SÍGUENOS EN INSTAGRAM
          </a>
          <a
            href="https://www.facebook.com/academiaonekick"
            className="group flex items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#1877F2] to-[#0C5DC7] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.4em] text-white transition duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Facebook size={20} />
            SÍGUENOS EN FACEBOOK
          </a>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/20 bg-black/50 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] min-h-[500px]">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div class="elfsight-app-6352397f-08a9-4ef9-99bd-f75096615ff5" data-elfsight-app-lazy></div>
          <div className="h-full w-full rounded-[24px] border border-white/10 bg-black/40" />
        </div>
      </section>
    </div>
  )
}

export default SocialPage
