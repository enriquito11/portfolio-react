import { Send } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="w-full max-w-[740px] mx-auto py-24 text-center">
            <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-x-3">
                <Send className="size-7" />
                Hablemos
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-xl mx-auto">
                Estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea en mente, no dudes en contactarme.
            </p>
            <a
              href="mailto:enriquilo@gmail.com"
              className="bg-white text-neutral-900 font-semibold rounded-full
                         inline-flex items-center gap-x-2
                         py-2 px-6
                         transition
                         hover:scale-105"
            >
                Envíame un correo
            </a>
        </section>
    )
}