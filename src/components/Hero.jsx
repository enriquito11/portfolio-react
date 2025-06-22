
import { Linkedin, Github, Mail } from 'lucide-react'
import SocialPill from './SocialPill'

export default function Hero() {
  return (
    <section className="w-full max-w-[740px] mx-auto pt-32 sm:pt-44 pb-24 text-center">
      
      
      <img
        className="rounded-full size-48 mx-auto mb-8 border-4 border-white/30 shadow-lg shadow-black/60"
        src="/images/enri-torres.jpeg" 
        alt="Foto de Enri Torres" 
      />

     <div className="flex flex-col items-center mb-6">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-10">
          Hola, soy Enri!
        </h1>
        <a
          href="https://www.linkedin.com/in/enri-torres"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-sm font-medium rounded-full px-3 py-1 hover:scale-105 transition"
        >
          Disponible para trabajar
        </a>
      </div>
      <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px] mx-auto">
        <span className="text-yellow-200">Desarrollador Web.</span>{" "}
        De Córdoba, Argentina. Especializado en crear aplicaciones únicas.
      </h2>

      <nav className="flex justify-center gap-4 mt-8 flex-wrap">
        <SocialPill href="https://www.linkedin.com/in/enri-torres">
          <Linkedin className="size-4 md:size-6" />
          LinkedIn
        </SocialPill>
        <SocialPill href="https://github.com/enriquito11">
          <Github className="size-4 md:size-6" />
          GitHub
        </SocialPill>
        <SocialPill href="mailto:enriquilo@gmail.com">
          <Mail className="size-4 md:size-6" />
          enriquilo@gmail.com
        </SocialPill>
      </nav>
    </section>
  );
}
