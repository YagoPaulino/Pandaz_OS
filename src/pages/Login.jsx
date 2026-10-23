
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="flex min-h-screen bg-[#141114] text-[#EEEAEA]">
      <section className="relative hidden flex-1 flex-col justify-between overflow-hidden border-r border-[#362417] p-12 lg:flex">
        <a href="/" className="flex w-fit items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D91E40] font-black">
            pz
          </div>
          <span className="text-xl font-bold">
            Panda<span className="text-[#FF1F4D]">'z</span>
          </span>
        </a>

        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF8A1F]">
              Seu espaço digital
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-tight">
              Tudo no seu lugar.
              <span className="mt-2 block text-[#FF1F4D]">
                Do seu jeito.
              </span>
            </h1>

            <p className="mt-6 leading-7 text-[#B8AEB2]">
              Entre na sua conta e continue organizando seus links,
              coleções e ferramentas em um só lugar.
            </p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[#D91E40]/10 blur-[100px]" />

        <p className="text-sm text-[#B8AEB2]">
          © {new Date().getFullYear()} Panda'z
        </p>
      </section>

      <section className="flex flex-1 items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <a
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[#B8AEB2] transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Voltar para o início
          </a>

          <div className="mb-8 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D91E40] text-lg font-black">
              pz
            </div>
            <h1 className="mt-4 text-2xl font-bold">
              Panda<span className="text-[#FF1F4D]">'z</span>
            </h1>
          </div>

          <h2 className="text-3xl font-bold">Bem-vindo de volta.</h2>
          <p className="mt-3 text-[#B8AEB2]">
            Entre na sua conta para continuar.
          </p>

          <form
            className="mt-9 space-y-5"
            onSubmit={(event) => {
              event.preventDefault()
              alert('Login ainda não conectado!')
            }}
          >
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                E-mail
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#49343D] bg-[#1C171C] px-4 transition focus-within:border-[#FF1F4D]">
                <Mail size={18} className="shrink-0 text-[#B8AEB2]" />
                <input
                  id="email"
                  type="email"
                  placeholder="voce@exemplo.com"
                  autoComplete="email"
                  required
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-[#756970]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium">
                Senha
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#49343D] bg-[#1C171C] px-4 transition focus-within:border-[#FF1F4D]">
                <LockKeyhole size={18} className="shrink-0 text-[#B8AEB2]" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                  required
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-[#756970]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  className="text-[#B8AEB2] transition hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#D91E40] py-4 font-semibold transition hover:bg-[#FF1F4D] hover:shadow-lg hover:shadow-[#D91E40]/15"
            >
              Entrar na conta
            </button>
          </form>

<div className="mt-4">
  <Link
    to="/entrando"
    className="flex w-full items-center justify-center rounded-xl border border-[#49343D] px-4 py-3 text-sm font-semibold text-[#FF8A1F] transition hover:border-[#FF1F4D] hover:bg-[#2A1B22]"
  >
    Entrar direto (demonstração)
  </Link>
</div>

          <p className="mt-8 text-center text-sm text-[#B8AEB2]">
            Ainda não tem uma conta?{' '}
            <a
              href="/cadastro"
              className="font-semibold text-[#FF1F4D] hover:text-[#FF8A1F]"
            >
              Criar conta
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  )
}
