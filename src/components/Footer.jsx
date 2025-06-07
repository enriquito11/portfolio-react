// src/components/Footer.jsx
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full max-w-[740px] mx-auto flex justify-center items-center pb-8">
            <p className="text-sm text-neutral-400">
                © {currentYear} Enri Torres. Todos los derechos reservados.
            </p>
        </footer>
    )
}