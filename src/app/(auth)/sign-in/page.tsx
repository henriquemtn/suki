import Footer from '@/components/footer'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <img src="/assets/logo.png" alt="Suki Logo" className="h-12 mb-6" />
          <h1 className="text-2xl font-semibold text-zinc-800 mb-2">Entrar na sua conta</h1>
          <p className="text-sm text-gray-400 mb-6">Bem-vindo de volta! Faça login para continuar.</p>
          <form className="w-full flex flex-col gap-4">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Sua senha"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition"
            >
              Entrar
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-6">
            Não tem uma conta?{' '}
            <Link href="/" className="text-orange-500 hover:underline">Voltar para o início</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
