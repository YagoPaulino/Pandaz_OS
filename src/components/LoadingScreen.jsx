
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#141114] px-6 text-[#EEEAEA]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#FF1F4D] to-[#7A1028] text-3xl font-black shadow-lg shadow-[#D91E40]/20"
        >
          pz
        </motion.div>

        <h1 className="mt-6 text-3xl font-bold">
          Panda<span className="text-[#FF1F4D]">'z</span>
        </h1>

        <p className="mt-2 text-sm text-[#B8AEB2]">
          Preparando seu espaço...
        </p>

        <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-[#2A1B22]">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="h-full rounded-full bg-gradient-to-r from-[#D91E40] to-[#FF8A1F]"
          />
        </div>
      </motion.div>
    </main>
  )
}
