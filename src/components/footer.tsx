import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-100 bg-gray-50 backdrop-blur-sm py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img src="/assets/logo.png" alt="Suki Logo" className="h-8" />
                    <span className="text-sm text-gray-400 font-medium">&copy; {new Date().getFullYear()} Suki. Todos os direitos reservados.</span>
                </div>
                <nav className="flex gap-6 text-sm text-gray-400">
                    <Link href="/" className="hover:text-orange-500 transition">Início</Link>
                    <a href="https://github.com/henriquemtn/suki" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">GitHub</a>
                </nav>
            </div>
        </footer>
    )
}
