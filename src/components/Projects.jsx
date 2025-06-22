import { useState, useEffect } from 'react'
import { Briefcase, Code, Link as LinkIcon, X } from 'lucide-react'
import SocialPill from './SocialPill'
import {
  SiReact, SiCss3, SiJavascript, SiRedux, SiNodedotjs, 
  SiExpress, SiFigma, SiVite, SiTailwindcss
} from 'react-icons/si'
import { TbLayoutKanban } from 'react-icons/tb'

const TAGS = {
  REACT: { name: "React", icon: <SiReact size={16} /> },
  REDUX: { name: "Redux", icon: <SiRedux size={16} /> },
  NODEJS: { name: "Node.js", icon: <SiNodedotjs size={16} /> },
  EXPRESS: { name: "Express", icon: <SiExpress size={16} /> },
  CSS: { name: "CSS", icon: <SiCss3 size={16} /> },
  JAVASCRIPT: { name: "JavaScript", icon: <SiJavascript size={16} /> },
  FIGMA: { name: "Figma", icon: <SiFigma size={16} /> },
  SCRUM: { name: "Scrum", icon: <TbLayoutKanban size={16} /> },
  VITE: { name: "Vite", icon: <SiVite size={16} /> },
  TAILWIND: { name: "Tailwind CSS", icon: <SiTailwindcss size={16} /> },
}

const PROJECTS = [
    {
        title: "Portfolio Personal en React",
        description: "Desarrollo de mi portfolio personal desde cero. Utilicé Vite para un entorno de desarrollo rápido y React para una interfaz dinámica y componentizada. El diseño responsive y los estilos modernos fueron implementados con Tailwind CSS, y la iconografía con las librerías Lucide React y React Icons.",
        link: "https://enritorres.netlify.app/",
        github: "https://github.com/enriquito11/portfolio-react",
        image: null,
        tags: [TAGS.REACT, TAGS.VITE, TAGS.TAILWIND, TAGS.JAVASCRIPT]
    },
    {
        title: "Interlude Viajes - Web de Agencia",
        description: "Página web para una agencia de viajes, enfocada en la experiencia de usuario y la presentación visual de destinos turísticos. Desarrollada como parte de mi experiencia profesional como Front-End Developer.",
        link: "https://interlude.com.ar/", 
        github: null, 
        image: "/images/interlude.PNG", 
        tags: [TAGS.REACT, TAGS.CSS, TAGS.JAVASCRIPT]
    },
    {
        title: "[Académica] MC BURGER - E-commerce",
        description: "Proyecto final grupal en Henry. Desarrollo de un e-commerce utilizando Scrum y Git/GitHub. Mis responsabilidades incluyeron el diseño en Figma, maquetación de componentes en React, manejo de estados con Redux y la implementación del diseño responsive.",
        link: null, 
        github: "https://github.com/enriquito11/PROYECTOFINAL",
        image: "/images/burguer.jpeg", 
        tags: [TAGS.REACT, TAGS.REDUX, TAGS.FIGMA, TAGS.SCRUM]
    },
    {
        title: "[Académica] DogsApp - SPA",
        description: "Single Page Application que consume datos de una API externa a través de un backend propio en Node.js y Express. El frontend fue desarrollado con React, Redux y CSS puro, implementando features como búsquedas, filtros y ordenamientos.",
        link: null,
        github: "https://github.com/enriquito11/PIDOGSHENRY",
        image: "/images/dogs.jpeg", 
        tags: [TAGS.REACT, TAGS.REDUX, TAGS.NODEJS, TAGS.EXPRESS, TAGS.CSS]
    }
]

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState(null)

    const openImage = (imageSrc) => {
        document.body.style.overflow = 'hidden';
        setSelectedImage(imageSrc)
    }

    const closeImage = () => {
        document.body.style.overflow = 'auto';
        setSelectedImage(null)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <section id="proyectos" className="w-full max-w-[740px] mx-auto py-24">
                <h2 className="text-2xl font-semibold mb-10 flex items-center gap-x-3">
                    <Briefcase className="size-7" />
                    Proyectos
                </h2>

                <div className="space-y-16">
                    {PROJECTS.map((project) => (
                        <article key={project.title} className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            <div className={project.image ? "md:col-span-3" : "md:col-span-5"}>
                                <h3 className="text-xl font-semibold text-yellow-200 mb-2">{project.title}</h3>
                                <p className="text-lg text-neutral-300 mb-4 text-pretty">{project.description}</p>
                                
                                <div className="flex gap-4 mb-4">
                                    {project.github && (
                                        <SocialPill href={project.github}>
                                            <Code className="size-4" />
                                            Ver Código
                                        </SocialPill>
                                    )}
                                    {project.link && project.link !== "#" && (
                                        <SocialPill href={project.link}>
                                            <LinkIcon className="size-4" />
                                            Ver Proyecto
                                        </SocialPill>
                                    )}
                                </div>

                                <ul className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <li key={tag.name}>
                                            <span className="inline-flex items-center gap-x-2 rounded-full text-xs bg-black/70 border border-white/20 py-1.5 px-3">
                                                {tag.icon}
                                                {tag.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {project.image && (
                                <div className="md:col-span-2">
                                    <button onClick={() => openImage(project.image)} className="w-full h-full">
                                        <img 
                                            className="rounded-lg shadow-2xl shadow-white/10 w-full h-auto object-cover aspect-video transition hover:scale-105" 
                                            src={project.image} 
                                            alt={`Captura de pantalla del proyecto ${project.title}`} 
                                        />
                                    </button>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {selectedImage && (
                <div 
                    onClick={closeImage} 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 cursor-pointer"
                >
                    <button 
                        onClick={closeImage} 
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
                    >
                        <X className="size-8" />
                    </button>
                    <img 
                        src={selectedImage} 
                        alt="Vista ampliada del proyecto" 
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    )
}