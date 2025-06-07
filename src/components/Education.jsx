import { GraduationCap } from 'lucide-react'

const EDUCATION_DATA = [
    {
        degree: "Full Stack Web Developer",
        institution: "Henry",
        date: "feb. 2022 - ene. 2023",
        description: "Bootcamp intensivo de +800 horas con enfoque práctico en el desarrollo de aplicaciones web. Adquirí un dominio completo de las tecnologías fundamentales como HTML, CSS y JavaScript, y me especialicé en la creación de aplicaciones full-stack con React, Redux, Node.js y SQL, aplicando metodologías ágiles y herramientas de trabajo colaborativo para la creación de proyectos de punta a punta."
    },
    {
        degree: "Tecnicatura en Desarrollo de Software",
        institution: "ISET Huinca Renancó",
        date: "feb. 2016 - dic. 2018",
        description: "Formación académica formal centrada en el ciclo de vida completo del desarrollo de software, desde el análisis y diseño hasta el testing y mantenimiento. Adquirí una base sólida en Algoritmos, Estructuras de Datos y Paradigmas de Programación (POO), complementada con competencias en el diseño y gestión de bases de datos para construir soluciones robustas y resolver problemas complejos de manera estructurada."
    }
]

export default function Education() {
    return (
        <section id="educacion" className="w-full max-w-[740px] mx-auto py-24">
            <h2 className="text-2xl font-semibold mb-10 flex items-center gap-x-3">
                <GraduationCap className="size-8" />
                Educación
            </h2>

            <ol className="relative border-s border-gray-700">                  
                {EDUCATION_DATA.map((edu, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-sky-300">{edu.date}</time>
                        <h3 className="text-lg font-semibold text-yellow-200 mt-2">{edu.institution}</h3>
                        <h4 className="text-md font-medium text-neutral-300">{edu.degree}</h4>
                        <p className="my-4 text-base font-normal text-gray-400 text-pretty">{edu.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    )
}