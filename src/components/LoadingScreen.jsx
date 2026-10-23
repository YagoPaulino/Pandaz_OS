
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  const logo = '/logosPz/Logo_Couro.png'

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-[#171213]"
      style={{
        fontFamily: "'Sora', sans-serif",
        backgroundColor: '#D2CEC7',
        backgroundImage: `
          radial-gradient(ellipse at 18% 20%, rgba(255,255,255,0.35), transparent 45%),
          radial-gradient(ellipse at 85% 80%, rgba(161,26,23,0.08), transparent 42%),
          linear-gradient(145deg, #D2CEC7 0%, #C5C0B9 50%, #D2CEC7 100%)
        `,
      }}
    >
      {/* Fonte Sora */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        `}
      </style>

      {/* Textura de couro */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.18,
          backgroundImage: `
            repeating-radial-gradient(
              ellipse at 30% 40%,
              rgba(61,56,55,0.12) 0px,
              rgba(61,56,55,0.025) 1px,
              rgba(255,255,255,0.15) 2px,
              transparent 4px,
              transparent 7px
            ),
            repeating-linear-gradient(
              115deg,
              transparent 0px,
              rgba(61,56,55,0.06) 1px,
              transparent 2px,
              rgba(255,255,255,0.08) 3px,
              transparent 5px
            )
          `,
          backgroundSize: '13px 11px, 9px 12px',
        }}
      />

      {/* Vinheta */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 15%, rgba(23,18,19,0.08) 100%)',
        }}
      />

      {/* Reflexo vermelho */}
      <motion.div
        animate={{
          opacity: [0.05, 0.14, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A11A17]/15 blur-[100px]"
      />

      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
          animate={{
            opacity: 1,
            scale: [0.94, 1.04, 1],
            rotate: 0,
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 1, ease: 'easeOut' },
            rotate: { duration: 0.8, ease: 'easeOut' },
          }}
          className="relative flex h-32 w-32 items-center justify-center"
        >
          <motion.div
            animate={{
              opacity: [0.08, 0.22, 0.08],
              scale: [0.9, 1.15, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full bg-[#A11A17]/20 blur-2xl"
          />

          <motion.img
            src={logo}
            alt="Pandaz OS"
            animate={{
              scale: [1, 1.025, 1],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative h-full w-full object-contain drop-shadow-[0_5px_12px_rgba(23,18,19,0.2)]"
          />
        </motion.div>

        {/* Nome do sistema */}
        <motion.h1
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-6 text-4xl font-extrabold tracking-[-0.06em] text-[#171213]"
        >
          Pandaz
          <span className="ml-2 text-[#A11A17]">OS</span>
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-3 text-xs font-medium tracking-wide text-[#3D3837]/75"
        >
          Preparando seu espaço...
        </motion.p>

        {/* Barra de progresso */}
        <div className="mt-9 h-1 w-56 overflow-hidden rounded-full bg-[#3D3837]/20">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 3,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="relative h-full rounded-full bg-gradient-to-r from-[#7D1715] via-[#A11A17] to-[#3D3837]"
          >
            <motion.div
              animate={{ opacity: [0.15, 0.65, 0.15] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-white/30 blur-[2px]"
            />
          </motion.div>
        </div>

        {/* Assinatura */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#3D3837]"
        >
          Your space. Your way.
        </motion.span>
      </motion.div>
    </main>
  )
}
