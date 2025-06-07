
import { Linkedin, Github, Mail } from 'lucide-react'
import SocialPill from './SocialPill'

export default function Hero() {
  return (
    <section className="w-full max-w-[740px] mx-auto pt-32 sm:pt-44 pb-24 text-center">
      
      
      <img 
        className="rounded-full size-48 mx-auto mb-8 border-4 border-white/30" 
        src="/images/enri-torres.jpeg" 
        alt="Foto de Enri Torres" 
      />

      <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold flex flex-col justify-center items-center gap-4 pb-6">
        <span>Hola, soy Enri!</span>
        <a 
          href="https://www.linkedin.com/in/enri-torres" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 text-sm font-medium rounded-full px-3 py-1 hover:scale-105 transition"
        >
          Disponible para trabajar
        </a>
      </h1>
      <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px] mx-auto">
        +1 año de experiencia.{" "}
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
