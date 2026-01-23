import { MapPin, Mail, Clock, MessageCircle, Phone } from 'lucide-react'

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Capa de Atmósfera Roja Central */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-black/80 to-black" />
      <section className="relative z-10 px-6 pt-32 pb-12">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.6em] text-white/60">Contacto</p>
          <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">UBICACIÓN Y CONTACTO</h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            Estamos listos para recibirte. Ven a conocer el Dojo.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-red-500" />
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">Dirección</p>
                <p className="text-lg font-semibold text-neutral-300">O'Higgins 165, Concepción, Chile</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="text-red-500" />
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">Teléfono</p>
                <p className="text-lg font-semibold text-neutral-300">+56 9 9579 32469</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={24} className="text-red-500" />
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">Horario</p>
                <p className="text-lg font-semibold text-neutral-300">Lun a Vie 8:00 - 20:00</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
            <iframe
              title="Mapa Onekick"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.574801894433!2d-73.05173568471496!3d-36.82022408077637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5772a5d8be9%3A0xc0e1b9ed9e5f09b1!2sO'Higgins%20165%2C%20Concepci%C3%B3n!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl"
              className="h-[400px] w-full rounded-[32px] border border-white/5 grayscale transition duration-300 hover:grayscale-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-white/15 bg-gradient-to-r from-black/50 via-black/70 to-black/50 p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
          <p className="text-xs uppercase tracking-[0.6em] text-white/60">Clase de prueba</p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.3em] text-white md:text-4xl">¿Tienes dudas o quieres probar una clase?</h2>
          <a
            href="https://wa.me/569957932469?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20clase%20de%20prueba%20en%20Onekick"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#1DA851] px-6 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-black transition duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageCircle size={20} />
            AGENDAR CLASE DE PRUEBA EN WHATSAPP
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
