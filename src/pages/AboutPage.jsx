import sensei from '../assets/sensei.jpg'
import karat from '../assets/karat.jpg'
import box from '../assets/box.jpg'
import img1 from '../assets/img1.jpg'

const disciplineDetails = [
  {
    title: 'KICKBOXING',
    description:
      'Choque de potencia y velocidad. Golpeamos como si cada pad fuera un juramento de ruptura, desarrollando piernas como columnas, caderas explosivas y respiración templada.',
    image: box,
    direction: 'image-left',
  },
  {
    title: 'KARATE KYOKUSHIN',
    description:
      'Tradición, respeto y Osu eterno. El Kyokushin en Onekick combina el control del kata con la dureza del kumite, endureciendo el espíritu hasta que el llanto pasa a ser fuego.',
    image: karat,
    direction: 'image-right',
  },
]

function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section
        className="relative min-h-[70vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.15)),url(${img1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-400">Somos uno</p>
          <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
            EL CAMINO DEL GUERRERO
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            En Onekick no solo entrenamos cuerpos, forjamos espíritus inquebrantables.
            Cada golpe trae historia, cada respiración es compromiso, cada paso, la dirección del triunfo.
          </p>
        </div>
      </section>

      <section className="relative -skew-y-3 bg-gradient-to-r from-[#D3151E] via-black to-[#D3151E]">
        <div className="skew-y-3 mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-sm uppercase tracking-[0.7em] text-white/80">Affiliación</p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.4em] text-white md:text-4xl lg:text-5xl">
            ICHIGEKI INTERNATIONAL ACADEMY CHILE
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            El linaje Ichigeki se sustenta en tradición, contundencia y victoria. Aquí, la potencia no es ofensiva ni defensiva,
            es una forma de vida que se atraviesa con espíritu férreo y mirada heredada de los ring más severos del planeta.
          </p>
        </div>
      </section>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/40 shadow-[0_20px_80px_rgba(0,0,0,0.9)]">
          <img
            src={sensei}
            alt="Sensei Sergio Aguilera"
            className="h-full w-full rounded-[40px] object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          <div className="absolute -right-12 top-1/3 hidden h-36 w-36 rounded-full bg-[#D3151E]/40 blur-3xl lg:block" />
        </div>
        <div className="relative -mt-16 flex flex-col gap-6 rounded-[32px] border border-white/10 bg-black/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl lg:-mt-0">
          <p className="text-xs uppercase tracking-[0.7em] text-red-500">El Sensei</p>
          <h3 className="text-4xl font-black uppercase tracking-[0.3em] text-white md:text-5xl">SERGIO AGUILERA</h3>
          <p className="text-xl font-semibold uppercase tracking-[0.4em] text-red-400">Liderazgo Cinemático</p>
          <p className="text-base leading-relaxed text-neutral-300">
            Mente fría. Técnica implacable. La carrera de Sergio mezcla medallas internacionales con fogones de dojos donde la exigencia
            se convierte en familia. Enseña desde la cercanía, exige desde la verdad: cada clase es un guiño a la disciplina y un reto definitivo.
          </p>
        </div>
      </section>

      <section className="space-y-16 px-6 py-20">
        {disciplineDetails.map((item) => (
          <div
            key={item.title}
            className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center"
          >
            <div
              className={`relative flex-1 overflow-hidden rounded-[32px] border border-white/5 bg-black/40 transition duration-500 hover:border-red-500/60 ${
                item.direction === 'image-left' ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-96 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.7em] text-red-400">Disciplina</p>
              <h4 className="mt-4 text-4xl font-black uppercase tracking-[0.3em] text-white md:text-5xl">
                {item.title}
              </h4>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default AboutPage
