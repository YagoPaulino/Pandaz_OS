
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-b border-[#362417] bg-[#141114]/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D91E40] font-black text-white">
            pz
          </div>

          <span className="text-xl font-bold tracking-tight">
            Panda<span className="text-[#FF1F4D]">'z</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[#B8AEB2] md:flex">
          <a href="/#sobre" className="transition hover:text-white">
            Sobre
          </a>

          <a href="/#sobre" className="transition hover:text-white">
            Funcionalidades
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium transition hover:bg-[#2A1B22] sm:block"
          >
            Entrar
          </Link>

          <Link
            to="/cadastro"
            className="rounded-lg bg-[#D91E40] px-4 py-2.5 text-sm font-semibold transition hover:bg-[#FF1F4D]"
          >
            Criar conta
          </Link>
        </div>
      </nav>
    </header>
  )
}
