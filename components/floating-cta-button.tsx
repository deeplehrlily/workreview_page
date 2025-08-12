"use client"
import { motion } from "framer-motion"

export default function FloatingCTAButton() {
  return (
    <motion.div
      className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto md:max-w-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.a
        href="https://dainty-souffle-dc54ef.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#5BDEF0] to-[#4AC8E0] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold text-base md:text-lg border-2 border-white/20 w-full"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <span>리뷰 작성하기</span>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          →
        </motion.div>
      </motion.a>

      {/* Floating particles around the button */}
      <motion.div
        className="absolute -top-2 left-1/4 w-3 h-3 bg-white/30 rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute -bottom-1 right-1/4 w-2 h-2 bg-white/40 rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />
    </motion.div>
  )
}
