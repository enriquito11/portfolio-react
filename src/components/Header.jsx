import { Menu } from 'lucide-react'

export default function Header() {
  const navLinks = [
    { title: "Inicio", href: "#" },
    { title: "Proyectos", href: "#proyectos" },
    { title: "Experiencia", href: "#experiencia" },
    { title: "Educación", href: "#educacion" },
    { title: "Sobre mí", href: "#about" },
    { title: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center p-4 z-10 backdrop-blur-sm">
      <nav className="hidden md:flex bg-black/50 border border-white/10 rounded-full px-3 py-2">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="px-4 py-1 text-sm text-neutral-300 hover:text-white transition"
          >
            {link.title}
          </a>
        ))}
      </nav>
      <div className="md:hidden">
        <button className="p-2 bg-black/50 border border-white/10 rounded-full">
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  );
}