import { Briefcase } from 'lucide-react'

const EXPERIENCE = [
    {
        date: "mar. 2023 - dic. 2023",
        title: "Profesor de Programación, Diseño y Bases de Datos",
        company: "Escuela Experimental con Énfasis en Tecnologías, Sede Huinca Renancó",
        description: "Impartí el programa educativo de tecnología a estudiantes de nivel secundario. Mi rol se centró en enseñar los conceptos del currículo establecido, incluyendo programación (algoritmos, POO con Java, y metodologías con JavaScript), diseño UI/UX con herramientas como Figma, HTML, CSS y Canva, y gestión de bases de datos con SQL y NoSQL.",
    },
    {
        date: "jun. 2023 - dic. 2023",
        title: "Desarrollador Front-End",
        company: "Interlude Viajes",
        description: "Fui responsable del desarrollo integral de la interfaz de usuario para la plataforma de reservas. Programé la parte visual de la página utilizando React y CSS puro para construir componentes interactivos y optimizar el rendimiento, mejorando significativamente la experiencia del usuario.",
    }
]

export default function Experience() {
    return (
        <section id="experiencia" className="w-full max-w-[740px] mx-auto py-24">
            <h2 className="text-2xl font-semibold mb-10 flex items-center gap-x-3">
                <Briefcase className="size-7" />
                Experiencia Laboral
            </h2>

            <ol className="relative border-s border-gray-700">                  
                {EXPERIENCE.map((exp, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-sky-300">{exp.date}</time>
                        <h3 className="text-lg font-semibold text-yellow-200 mt-2">{exp.title}</h3>
                        <h4 className="text-md font-medium text-neutral-300">{exp.company}</h4>
                        <p className="my-4 text-base font-normal text-gray-400 text-pretty">{exp.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    )
}