import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Redes", to: "/redes" },
  { label: "Horarios", to: "/horarios" },
  { label: "Contacto", to: "/contacto" },
];

const contacts = [
  { icon: MapPin, label: "O'Higgins 165, Concepción, Chile" },
  { icon: Phone, label: "+56 9 9579 32469" },
];

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/academiaonekick",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/academia_onekick/",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-50 bg-black border-t border-white/10 text-neutral-300">
      <div className="max-w-6xl mx-auto px-6 py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-2xl font-bold uppercase tracking-widest text-white">
              Onekick
            </h1>
            <p className="mt-3 text-neutral-400">
              Kyokushin &amp; Kickboxing para la vida.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-neutral-400 transition-colors duration-300 hover:text-white"
                  rel="noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Enlaces rápidos
            </h2>
            <ul className="mt-4 space-y-2 text-neutral-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="transition-colors duration-300 hover:text-[#D3151E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h2>
            <div className="mt-4 space-y-4 text-neutral-400">
              {contacts.map((contact) => (
                <div key={contact.label} className="flex items-center gap-3">
                  <contact.icon className="h-5 w-5 text-white" />
                  <span>{contact.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Horarios e info
            </h2>
            <p className="mt-4 text-sm text-neutral-400">
              Lunes a Viernes: 8:00 - 20:00
              Sábados, domingos y festivos cerrado.
            </p>
            <p className="mt-4 text-xs text-neutral-500">
              Onekick es un centro dedicado al entrenamiento completo en Kyokushin y
              Kickboxing, cuidando la disciplina, la técnica y el bienestar mental.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center gap-2 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Academia Onekick. Todos los derechos reservados.</p>
          <p>Desarrollado por frani3.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;