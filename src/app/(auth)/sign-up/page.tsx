import Footer from '@/components/footer'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <img src="/assets/logo.png" alt="Suki Logo" className="h-12 mb-6" />
          <h1 className="text-2xl font-semibold text-zinc-800 mb-2">Criar uma conta</h1>
          <p className="text-sm text-gray-400 mb-6">Preencha os campos para se cadastrar.</p>
          <form className="w-full flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="(99) 99999-9999"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition"
            >
              Criar conta
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-6">
            Já tem uma conta?{' '}
            <Link href="/sign-in" className="text-orange-500 hover:underline">Entrar</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
