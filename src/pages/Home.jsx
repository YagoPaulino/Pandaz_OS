import { motion } from 'framer-motion'
import {
  ArrowRight,
  FolderOpen,
  Link2,
  ShieldCheck,
  Sparkles,
  Zap,
  ChevronRight,
  Search,
  Plus,
  LayoutGrid,
  Bookmark,
  Star,
  ExternalLink,
  Globe,
} from 'lucide-react'
import Navbar from '../components/Navbar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#210100] text-[#FECE79] selection:bg-[#B14A36]/40 selection:text-[#FECE79]">
      <Navbar />

      {/* Glows de Fundo Sofisticados */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[700px] w-full max-w-7xl -translate-x-1/2 opacity-20 blur-[150px]">
        <div className="h-full w-full bg-gradient-to-tr from-[#8C0902] via-[#B14A36] to-[#E6A341]" />
      </div>

      {/* HERO SECTION COM PROOF & PREVIEW DE DASHBOARD */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-24 text-center lg:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B14A36]/40 bg-[#8C0902]/20 px-4 py-1.5 text-xs font-medium text-[#FECE79] shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#E6A341] animate-pulse" />
              v2.0 lançado — O Hub Definitivo para Seus Links
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Sua vida digital em ordem,{' '}
            <span className="block mt-2 bg-gradient-to-r from-[#E6A341] via-[#FECE79] to-[#B14A36] bg-clip-text text-transparent">
              sem abas infinitas.
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-relaxed text-[#FECE79]/75 sm:text-lg"
          >
            O Panda'z centraliza seus links de trabalho, estudos e ferramentas favoritas
            em um painel minimalista, rápido e com a sua cara.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col w-full max-w-md gap-4 sm:flex-row sm:justify-center"
          >
            <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#8C0902] px-7 py-4 font-semibold text-[#FECE79] shadow-lg shadow-[#8C0902]/40 transition-all hover:bg-[#B14A36] hover:scale-[1.02]">
              <span>Criar workspace grátis</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById('produto')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-xl border border-[#B14A36]/40 bg-[#210100]/60 px-7 py-4 font-semibold text-[#FECE79] transition-all hover:border-[#E6A341] hover:bg-[#8C0902]/10"
            >
              Ver como funciona
            </button>
          </motion.div>
        </motion.div>

        {/* --- PREVIEW REAL DE APLICAÇÃO (DASHBOARD MOCKUP) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 w-full max-w-5xl rounded-2xl border border-[#B14A36]/40 bg-[#140100] shadow-2xl overflow-hidden text-left"
        >
          {/* Barra Superior do App */}
          <div className="flex items-center justify-between border-b border-[#B14A36]/30 bg-[#210100] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#8C0902]" />
              <div className="h-3 w-3 rounded-full bg-[#B14A36]" />
              <div className="h-3 w-3 rounded-full bg-[#E6A341]" />
              <span className="ml-4 text-xs font-mono text-[#FECE79]/60">pandaz.app/dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-[#8C0902]/40 px-2.5 py-1 text-xs font-medium text-[#FECE79]">
                Workspace: Pessoal
              </span>
            </div>
          </div>

          {/* Conteúdo Simulado do Dashboard */}
          <div className="p-6 sm:p-8 grid gap-6 md:grid-cols-4">
            {/* Sidebar Simulado */}
            <div className="hidden md:flex flex-col gap-2 border-r border-[#B14A36]/20 pr-4">
              <div className="flex items-center gap-2 rounded-lg bg-[#8C0902]/30 px-3 py-2 text-sm font-medium text-[#FECE79]">
                <LayoutGrid size={16} /> Visão Geral
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#FECE79]/70 hover:bg-[#8C0902]/10 transition">
                <FolderOpen size={16} /> Projetos
              </div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#FECE79]/70 hover:bg-[#8C0902]/10 transition">
                <Bookmark size={16} /> Favoritos
              </div>
            </div>

            {/* Main Content Simulado */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FECE79]/40" size={16} />
                  <input
                    type="text"
                    disabled
                    placeholder="Buscar links, ferramentas ou tags..."
                    className="w-full rounded-xl border border-[#B14A36]/30 bg-[#210100] py-2 pl-9 pr-4 text-sm text-[#FECE79] placeholder-[#FECE79]/40 focus:outline-none"
                  />
                </div>
                <button className="flex items-center gap-1.5 rounded-xl bg-[#8C0902] px-3 py-2 text-xs font-medium text-[#FECE79]">
                  <Plus size={14} /> Novo Link
                </button>
              </div>

              {/* Grid de Cards Simulados */}
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Figma Design System', cat: 'Trabalho', url: 'figma.com' },
                  { title: 'GitHub Repositories', cat: 'Dev', url: 'github.com' },
                  { title: 'Notion Workspace', cat: 'Estudos', url: 'notion.so' },
                  { title: 'Tailwind Docs', cat: 'Dev', url: 'tailwindcss.com' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-[#B14A36]/20 bg-[#210100]/80 p-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-[#E6A341] uppercase tracking-wider">{item.cat}</span>
                      <h4 className="text-sm font-semibold text-[#FECE79] mt-0.5">{item.title}</h4>
                      <span className="text-xs text-[#FECE79]/50 flex items-center gap-1 mt-1"><Globe size={12}/> {item.url}</span>
                    </div>
                    <ExternalLink size={16} className="text-[#FECE79]/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO DE RECURSOS (PRODUTO REAL) */}
      <section id="produto" className="border-t border-[#B14A36]/20 bg-[#190100] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E6A341]">Feito para Produtividade</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-[#FECE79]">
              Tudo o que sua rotina digital pede
            </h2>
            <p className="mt-3 text-sm text-[#FECE79]/70 sm:text-base">
              Esqueça blocos de notas bagunçados. O Panda'z foi estruturado para ser rápido, direto e esteticamente impecável.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Link2,
                title: 'Links Inteligentes',
                desc: 'Organize com metadados automáticos e ícones limpos para acesso imediato.',
              },
              {
                icon: FolderOpen,
                title: 'Coleções Dinâmicas',
                desc: 'Agrupe por projetos, clientes ou áreas da sua vida com total liberdade.',
              },
              {
                icon: ShieldCheck,
                title: 'Privacidade Nativa',
                desc: 'Seus dados e links protegidos em um ambiente seguro e exclusivo.',
              },
            ].map((feat, i) => {
              const Icon = feat.icon
              return (
                <div key={i} className="rounded-2xl border border-[#B14A36]/30 bg-[#210100] p-6 hover:border-[#E6A341]/60 transition">
                  <div className="h-10 w-10 rounded-xl bg-[#8C0902]/30 border border-[#B14A36]/40 flex items-center justify-center text-[#E6A341] mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-lg text-[#FECE79]">{feat.title}</h3>
                  <p className="mt-2 text-sm text-[#FECE79]/70 leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#B14A36]/20 px-6 py-8 text-center text-xs text-[#FECE79]/60">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Panda'z. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#FECE79] transition">Termos</a>
            <a href="#" className="hover:text-[#FECE79] transition">Privacidade</a>
          </div>
        </div>
      </footer>
    </main>
  )
}