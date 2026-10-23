
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  FolderOpen,
  Link2,
  Star,
  Clock3,
  Settings,
  Search,
  Plus,
  ExternalLink,
  MoreHorizontal,
  Command,
  ArrowUpRight,
  X,
  Globe,
  Menu,
} from 'lucide-react'

const initialLinks = [
  {
    id: 1,
    title: 'GitHub',
    url: 'https://github.com',
    category: 'Desenvolvimento',
    description: 'Repositórios e projetos de código.',
    color: '#EEEAEA',
    letter: 'G',
    favorite: true,
  },
  {
    id: 2,
    title: 'YouTube',
    url: 'https://youtube.com',
    category: 'Entretenimento',
    description: 'Vídeos, tutoriais e conteúdo.',
    color: '#FF1F4D',
    letter: 'Y',
    favorite: true,
  },
  {
    id: 3,
    title: 'Figma',
    url: 'https://figma.com',
    category: 'Design',
    description: 'Interfaces, protótipos e referências.',
    color: '#FF8A1F',
    letter: 'F',
    favorite: false,
  },
  {
    id: 4,
    title: 'React',
    url: 'https://react.dev',
    category: 'Desenvolvimento',
    description: 'Documentação oficial do React.',
    color: '#61DAFB',
    letter: 'R',
    favorite: false,
  },
]

const initialCollections = [
  { name: 'Desenvolvimento', count: 2, icon: '⌘' },
  { name: 'Design', count: 1, icon: '✳' },
  { name: 'Entretenimento', count: 1, icon: '▶' },
]

export default function Dashboard() {
  const [links, setLinks] = useState(initialLinks)
  const [activePage, setActivePage] = useState('Visão geral')
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [form, setForm] = useState({
    title: '',
    url: '',
    category: 'Desenvolvimento',
    description: '',
  })

  const collections = useMemo(() => {
    return [...new Set(links.map((link) => link.category))].map((name) => ({
      name,
      count: links.filter((link) => link.category === name).length,
      icon: initialCollections.find((item) => item.name === name)?.icon || '◈',
    }))
  }, [links])

  const filteredLinks = links.filter((link) => {
    const matchesSearch = `${link.title} ${link.description} ${link.category}`
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesPage =
      activePage === 'Visão geral' ||
      (activePage === 'Favoritos' && link.favorite) ||
      (activePage === 'Recentes' && true) ||
      link.category === activePage

    return matchesSearch && matchesPage
  })

  function addLink(event) {
    event.preventDefault()

    let url = form.url.trim()
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`
    }

    try {
      new URL(url)
    } catch {
      alert('Digite um endereço válido.')
      return
    }

    const newLink = {
      ...form,
      url,
      id: Date.now(),
      color: '#FF1F4D',
      letter: form.title.trim().charAt(0).toUpperCase() || 'L',
      favorite: false,
    }

    setLinks((current) => [newLink, ...current])
    setForm({
      title: '',
      url: '',
      category: 'Desenvolvimento',
      description: '',
    })
    setShowForm(false)
    setActivePage('Visão geral')
    setSearch('')
  }

  function toggleFavorite(id) {
    setLinks((current) =>
      current.map((link) =>
        link.id === id ? { ...link, favorite: !link.favorite } : link,
      ),
    )
  }

  const navigation = [
    { label: 'Visão geral', icon: LayoutDashboard },
    { label: 'Favoritos', icon: Star },
    { label: 'Recentes', icon: Clock3 },
  ]

  function SidebarContent() {
    return (
      <>
        <a href="/app" className="flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D91E40] font-black text-white">
            pz
          </div>
          <span className="text-xl font-bold tracking-tight">
            Panda<span className="text-[#FF1F4D]">'z</span>
          </span>
        </a>

        <button
          onClick={() => {
            setShowForm(true)
            setMobileMenu(false)
          }}
          className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D91E40] px-4 py-3 font-semibold transition hover:bg-[#FF1F4D]"
        >
          <Plus size={18} />
          Novo link
        </button>

        <div className="mt-9">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#756970]">
            Workspace
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const active = activePage === item.label

              return (
                <button
                  key={item.label}
                  onClick={() => {
                    setActivePage(item.label)
                    setMobileMenu(false)
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                    active
                      ? 'bg-[#2A1B22] text-white'
                      : 'text-[#B8AEB2] hover:bg-[#21191F] hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                  {item.label === 'Favoritos' && (
                    <span className="ml-auto text-xs">
                      {links.filter((link) => link.favorite).length}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-9">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#756970]">
            Coleções
          </p>

          <div className="space-y-1">
            {collections.map((collection) => (
              <button
                key={collection.name}
                onClick={() => {
                  setActivePage(collection.name)
                  setMobileMenu(false)
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                  activePage === collection.name
                    ? 'bg-[#2A1B22] text-white'
                    : 'text-[#B8AEB2] hover:bg-[#21191F] hover:text-white'
                }`}
              >
                <FolderOpen size={17} />
                <span className="flex-1 truncate text-left">
                  {collection.name}
                </span>
                <span className="text-xs text-[#756970]">
                  {collection.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto border-t border-[#362417] pt-5">
          <button
            onClick={() => alert('Configurações serão implementadas depois.')}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#B8AEB2] transition hover:bg-[#21191F] hover:text-white"
          >
            <Settings size={18} />
            Configurações
          </button>

          <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#1C171C] p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7A1028] font-bold">
              Y
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Meu espaço</p>
              <p className="text-xs text-[#B8AEB2]">Modo demonstração</p>
            </div>
            <MoreHorizontal size={18} className="text-[#B8AEB2]" />
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-[#141114] text-[#EEEAEA]">
      {mobileMenu && (
        <button
          aria-label="Fechar menu"
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-[#362417] bg-[#181418] p-5 transition-transform duration-300 lg:translate-x-0 ${
          mobileMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex-1">
            <SidebarContent />
          </div>
          <button
            onClick={() => setMobileMenu(false)}
            className="absolute right-4 top-5 rounded-lg p-2 text-[#B8AEB2] hover:bg-[#2A1B22] lg:hidden"
            aria-label="Fechar menu"
          >
            <X size={18} />
          </button>
        </div>
      </aside>

      <main className="min-h-screen lg:pl-72">
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between gap-4 border-b border-[#362417] bg-[#141114]/90 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => setMobileMenu(true)}
              aria-label="Abrir menu"
              className="rounded-lg p-2 text-[#B8AEB2] hover:bg-[#2A1B22] lg:hidden"
            >
              <Menu size={21} />
            </button>

            <div className="min-w-0">
              <p className="text-xs text-[#B8AEB2]">Seu espaço pessoal</p>
              <h1 className="truncate text-lg font-semibold">{activePage}</h1>
            </div>
          </div>

          <label className="flex w-full max-w-xs items-center gap-2 rounded-xl border border-[#362417] bg-[#1C171C] px-3 py-2.5 focus-within:border-[#7A1028]">
            <Search size={17} className="shrink-0 text-[#B8AEB2]" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar links..."
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#756970]"
            />
            <Command size={14} className="hidden shrink-0 text-[#756970] sm:block" />
          </label>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-2xl border border-[#54202F] bg-gradient-to-br from-[#2A1B22] via-[#21171E] to-[#1C171C] p-6 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#D91E40]/15 blur-[80px]" />

            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7A1028] bg-[#141114]/50 px-3 py-1.5 text-xs text-[#FF8A1F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF1F4D]" />
                SEU WORKSPACE
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                Tudo conectado.
                <span className="block text-[#FF1F4D]">Tudo no seu lugar.</span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#B8AEB2] sm:text-base">
                Seus links, ferramentas e referências reunidos em um único
                espaço. Organize sua vida digital do seu jeito.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#D91E40] px-5 py-3 text-sm font-semibold transition hover:bg-[#FF1F4D]"
              >
                <Plus size={17} />
                Adicionar meu primeiro link
              </button>
            </div>
          </motion.div>

          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: 'Links salvos',
                value: links.length,
                icon: Link2,
                note: 'No seu espaço',
              },
              {
                label: 'Coleções',
                value: collections.length,
                icon: FolderOpen,
                note: 'Categorias criadas',
              },
              {
                label: 'Favoritos',
                value: links.filter((link) => link.favorite).length,
                icon: Star,
                note: 'Acesso rápido',
              },
              {
                label: 'Acessos recentes',
                value: links.length,
                icon: Clock3,
                note: 'Itens de demonstração',
              },
            ].map((stat, index) => {
              const Icon = stat.icon

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="rounded-2xl border border-[#362417] bg-[#1C171C] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#B8AEB2]">{stat.label}</span>
                    <div className="rounded-lg bg-[#2A1B22] p-2 text-[#FF1F4D]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <p className="mt-5 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-[#756970]">{stat.note}</p>
                </motion.div>
              )
            })}
          </section>

          <section className="mt-10">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF8A1F]">
                  Biblioteca
                </p>
                <h2 className="mt-2 text-2xl font-bold">Seus links</h2>
                <p className="mt-1 text-sm text-[#B8AEB2]">
                  Acesse e organize seus recursos favoritos.
                </p>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-[#49343D] px-4 py-2.5 text-sm font-medium transition hover:border-[#FF1F4D] hover:bg-[#2A1B22]"
              >
                <Plus size={16} />
                Novo link
              </button>
            </div>

            {filteredLinks.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#49343D] px-6 py-14 text-center">
                <Globe size={28} className="mx-auto text-[#756970]" />
                <h3 className="mt-4 font-semibold">Nenhum link encontrado</h3>
                <p className="mt-2 text-sm text-[#B8AEB2]">
                  Tente outra busca ou adicione um novo link.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredLinks.map((link, index) => (
                  <motion.article
                    key={link.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="group rounded-2xl border border-[#362417] bg-[#1C171C] p-5 transition hover:-translate-y-1 hover:border-[#7A1028]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#49343D] bg-[#2A1B22] text-xl font-bold"
                        style={{ color: link.color }}
                      >
                        {link.letter}
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleFavorite(link.id)}
                          aria-label={
                            link.favorite
                              ? 'Remover dos favoritos'
                              : 'Adicionar aos favoritos'
                          }
                          className={`rounded-lg p-2 transition hover:bg-[#2A1B22] ${
                            link.favorite ? 'text-[#FF8A1F]' : 'text-[#756970]'
                          }`}
                        >
                          <Star
                            size={17}
                            fill={link.favorite ? 'currentColor' : 'none'}
                          />
                        </button>

                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir ${link.title}`}
                          className="rounded-lg p-2 text-[#B8AEB2] transition hover:bg-[#2A1B22] hover:text-white"
                        >
                          <ExternalLink size={17} />
                        </a>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h3 className="text-lg font-semibold">{link.title}</h3>
                      <p className="mt-2 min-h-10 text-sm leading-5 text-[#B8AEB2]">
                        {link.description || 'Sem descrição.'}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-2 border-t border-[#362417] pt-4">
                      <span className="truncate rounded-md bg-[#2A1B22] px-2.5 py-1.5 text-xs text-[#FF8A1F]">
                        {link.category}
                      </span>
                      <span className="flex min-w-0 items-center gap-1 truncate text-xs text-[#756970]">
                        <Globe size={13} />
                        {new URL(link.url).hostname}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </section>

          <section className="mt-10 rounded-2xl border border-[#362417] bg-[#1C171C] p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#2A1B22] p-3 text-[#FF1F4D]">
                <ArrowUpRight size={21} />
              </div>
              <div>
                <h2 className="font-semibold">Um espaço que é seu</h2>
                <p className="mt-1 text-sm text-[#B8AEB2]">
                  Este é um protótipo. Seus links ainda não são salvos
                  permanentemente.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="my-auto w-full max-w-lg rounded-2xl border border-[#49343D] bg-[#1C171C] p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Adicionar link</h2>
                <p className="mt-2 text-sm text-[#B8AEB2]">
                  Guarde um novo recurso no seu espaço.
                </p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                aria-label="Fechar formulário"
                className="rounded-lg p-2 text-[#B8AEB2] hover:bg-[#2A1B22] hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={addLink} className="mt-7 space-y-4">
              <div>
                <label htmlFor="link-title" className="mb-2 block text-sm">
                  Nome
                </label>
                <input
                  id="link-title"
                  required
                  value={form.title}
                  onChange={(event) =>
                    setForm({ ...form, title: event.target.value })
                  }
                  placeholder="Ex.: Meu portfólio"
                  className="w-full rounded-xl border border-[#49343D] bg-[#141114] px-4 py-3 outline-none transition placeholder:text-[#756970] focus:border-[#FF1F4D]"
                />
              </div>

              <div>
                <label htmlFor="link-url" className="mb-2 block text-sm">
                  Endereço (URL)
                </label>
                <input
                  id="link-url"
                  required
                  type="text"
                  value={form.url}
                  onChange={(event) =>
                    setForm({ ...form, url: event.target.value })
                  }
                  placeholder="https://exemplo.com"
                  className="w-full rounded-xl border border-[#49343D] bg-[#141114] px-4 py-3 outline-none transition placeholder:text-[#756970] focus:border-[#FF1F4D]"
                />
              </div>

              <div>
                <label htmlFor="link-category" className="mb-2 block text-sm">
                  Coleção
                </label>
                <select
                  id="link-category"
                  value={form.category}
                  onChange={(event) =>
                    setForm({ ...form, category: event.target.value })
                  }
                  className="w-full rounded-xl border border-[#49343D] bg-[#141114] px-4 py-3 outline-none focus:border-[#FF1F4D]"
                >
                  {collections.map((collection) => (
                    <option key={collection.name} value={collection.name}>
                      {collection.name}
                    </option>
                  ))}
                  <option value="Pessoal">Pessoal</option>
                  <option value="Estudos">Estudos</option>
                  <option value="Trabalho">Trabalho</option>
                </select>
              </div>

              <div>
                <label htmlFor="link-description" className="mb-2 block text-sm">
                  Descrição (opcional)
                </label>
                <textarea
                  id="link-description"
                  rows={2}
                  value={form.description}
                  onChange={(event) =>
                    setForm({ ...form, description: event.target.value })
                  }
                  placeholder="Para que serve esse link?"
                  className="w-full resize-y rounded-xl border border-[#49343D] bg-[#141114] px-4 py-3 outline-none transition placeholder:text-[#756970] focus:border-[#FF1F4D]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-xl border border-[#49343D] px-4 py-3 text-sm font-semibold transition hover:bg-[#2A1B22]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[#D91E40] px-4 py-3 text-sm font-semibold transition hover:bg-[#FF1F4D]"
                >
                  Salvar link
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
