
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.')
      return
    }

    alert('Cadastro ainda não conectado ao sistema!')
  }

  return (
    <main className="flex min-h-screen bg-[#141114] text-[#EEEAEA]">
      <section className="relative hidden flex-1 flex-col justify-between overflow-hidden border-r border-[#362417] p-12 lg:flex">
        <Link to="/" className="flex w-fit items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D91E40] font-black">
            pz
          </div>

          <span className="text-xl font-bold">
            Panda<span className="text-[#FF1F4D]">'z</span>
          </span>
        </Link>

        <div className="relative z-10 max-w-lg">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF8A1F]">
            Comece agora
          </span>

          <h1 className="mt-5 text-5xl font-bold leading-tight">
            Seu mundo digital.
            <span className="mt-2 block text-[#FF1F4D]">
              Do seu jeito.
            </span>
          </h1>

          <p className="mt-6 leading-7 text-[#B8AEB2]">
            Crie sua conta e reúna seus links, ferramentas e coleções em
            um único espaço organizado.
          </p>
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
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#B8AEB2] transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Voltar para o início
          </Link>

          <div className="mb-8 lg:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D91E40] text-lg font-black">
              pz
            </div>

            <h1 className="mt-4 text-2xl font-bold">
              Panda<span className="text-[#FF1F4D]">'z</span>
            </h1>
          </div>

          <h2 className="text-3xl font-bold">Crie sua conta.</h2>
          <p className="mt-3 text-[#B8AEB2]">
            Comece a organizar seu espaço digital.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nome
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#49343D] bg-[#1C171C] px-4 transition focus-within:border-[#FF1F4D]">
                <UserRound size={18} className="shrink-0 text-[#B8AEB2]" />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  autoComplete="name"
                  required
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-[#756970]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                E-mail
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#49343D] bg-[#1C171C] px-4 transition focus-within:border-[#FF1F4D]">
                <Mail size={18} className="shrink-0 text-[#B8AEB2]" />

                <input
                  id="email"
                  name="email"
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
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Crie uma senha"
                  autoComplete="new-password"
                  minLength={8}
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

              <p className="mt-2 text-xs text-[#B8AEB2]">
                Use pelo menos 8 caracteres.
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium"
              >
                Confirmar senha
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#49343D] bg-[#1C171C] px-4 transition focus-within:border-[#FF1F4D]">
                <LockKeyhole size={18} className="shrink-0 text-[#B8AEB2]" />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Digite a senha novamente"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-[#756970]"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'
                  }
                  className="text-[#B8AEB2] transition hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#D91E40] py-4 font-semibold transition hover:bg-[#FF1F4D] hover:shadow-lg hover:shadow-[#D91E40]/15"
            >
              Criar minha conta
            </button>
          </form>

<div className="mt-4">
  <Link
    to="/app"
    className="flex w-full items-center justify-center rounded-xl border border-[#49343D] px-4 py-3 text-sm font-semibold text-[#FF8A1F] transition hover:border-[#FF1F4D] hover:bg-[#2A1B22]"
  >
    Entrar direto (demonstração)
  </Link>
</div>

          <p className="mt-7 text-center text-sm text-[#B8AEB2]">
            Já tem uma conta?{' '}
            <Link
              to="/login"
              className="font-semibold text-[#FF1F4D] transition hover:text-[#FF8A1F]"
            >
              Entrar
            </Link>
          </p>
        </motion.div>
      </section>
    </main>
  )
}
