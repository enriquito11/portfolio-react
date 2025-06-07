import { UserRound } from 'lucide-react'
import {
  SiReact, SiRedux, SiNodedotjs, SiExpress, SiAstro, SiTailwindcss,
  SiStyledcomponents, SiFigma, SiGit, SiGithub, SiSqlite, SiMongodb,
  SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbLayoutKanban } from 'react-icons/tb'

const techStack = [
  { name: "React", icon: <SiReact size={18} /> },
  { name: "Redux", icon: <SiRedux size={18} /> },
  { name: "JavaScript", icon: <SiJavascript size={18} /> },
  { name: "HTML", icon: <SiHtml5 size={18} /> },
  { name: "CSS", icon: <SiCss3 size={18} /> },
  { name: "Java", icon: <FaJava size={18} /> },
  { name: "Node.js", icon: <SiNodedotjs size={18} /> },
  { name: "Express", icon: <SiExpress size={18} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={18} /> },
  { name: "Astro", icon: <SiAstro size={18} /> },
  { name: "Styled-Components", icon: <SiStyledcomponents size={18} /> },
  { name: "Figma", icon: <SiFigma size={18} /> },
  { name: "Git", icon: <SiGit size={18} /> },
  { name: "GitHub", icon: <SiGithub size={18} /> },
  { name: "Scrum", icon: <TbLayoutKanban size={18} /> },
  { name: "SQL", icon: <SiSqlite size={18} /> },
  { name: "NoSQL", icon: <SiMongodb size={18} /> },
];

export default function About() {
    return (
        <section id="about" className="w-full max-w-[740px] mx-auto py-24">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-x-3">
                <UserRound className="size-8" />
                Sobre mí
            </h2>

            <div className="text-lg text-neutral-300 flex flex-col gap-y-6 text-pretty">
                <p>
                    ¡Hola! Soy Enri, un <strong>Desarrollador Web</strong> de Córdoba, Argentina, apasionado por crear experiencias digitales atractivas y funcionales.
                </p>
                <p>
                    Mi carrera se forjó sobre una base académica como <strong>Técnico Superior en Desarrollo de Software</strong>, que luego especialicé con un bootcamp en <strong>Desarrollo Full-Stack</strong>, donde descubrí mi pasión por el frontend.
                </p>
                <p>
                    Esta trayectoria me ha llevado a roles profesionales como <strong>Desarrollador Front-End</strong> en una agencia de viajes y como <strong>Profesor de Programación, Diseño y Bases de Datos</strong>, combinando mi habilidad para construir y enseñar tecnología.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Tecnologías Principales</h3>
                <ul className="flex flex-wrap gap-x-2 gap-y-3">
                    {techStack.map((tech) => (
                        <li key={tech.name}>
                            <span className="inline-flex items-center gap-x-2 rounded-full text-sm bg-black/70 border border-white/20 py-1.5 px-3">
                                {tech.icon}
                                {tech.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}