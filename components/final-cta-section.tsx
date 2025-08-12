"use client"

import { motion } from "framer-motion"

export default function FinalCTASection() {
  return (
    <div className="w-full bg-gradient-to-br from-[#5BDEF0] to-[#4AC8E0] py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-bounce"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">지금 바로 시작하세요!</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            여러분의 소중한 경험이 다른 사람들에게 큰 도움이 됩니다.
            <br />
            리뷰 작성하고 100% 확정 혜택도 받아가세요!
          </p>

          <motion.a
            href="https://dainty-souffle-dc54ef.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 py-6 bg-white text-[#5BDEF0] font-black text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ 리뷰 작성하고 혜택 받기
          </motion.a>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>3분만에 완료</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🎁</span>
              <span>100% 혜택 보장</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>익명 보장</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
