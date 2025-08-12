"use client"
import { motion } from "framer-motion"

const ReviewWritingGraphic = () => (
  <motion.div
    className="relative w-full h-48 bg-gradient-to-br from-[#5BDEF0]/10 to-[#4AC8E0]/10 rounded-2xl flex items-center justify-center overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#5BDEF0]/20 to-transparent"
      animate={{ x: [-100, 300] }}
      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
    <div className="relative z-10 flex items-center space-x-6">
      <motion.div
        className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="10" width="24" height="20" rx="3" stroke="#5BDEF0" strokeWidth="2" fill="white" />
          <path d="M12 16h16M12 20h12M12 24h8" stroke="#5BDEF0" strokeWidth="2" strokeLinecap="round" />
          <circle cx="30" cy="12" r="3" fill="#5BDEF0" />
          <path d="M28 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <motion.div
        className="flex flex-col items-center space-y-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="flex space-x-1"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              className="w-6 h-6 text-[#5BDEF0]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, delay: star * 0.1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
            >
              ⭐
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-xs text-[#5BDEF0] font-bold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          리뷰 작성 완료!
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
)

const ReviewReadingGraphic = () => (
  <motion.div
    className="relative w-full h-48 bg-gradient-to-br from-[#5BDEF0]/10 to-[#4AC8E0]/10 rounded-2xl flex items-center justify-center overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative z-10 flex items-center space-x-4">
      <motion.div
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="14" cy="14" r="8" stroke="#5BDEF0" strokeWidth="2" fill="none" />
          <path d="m22 22 4 4" stroke="#5BDEF0" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>
      <motion.div
        className="space-y-2"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="w-24 h-3 bg-[#5BDEF0]/30 rounded"></div>
        <div className="w-20 h-3 bg-[#5BDEF0]/20 rounded"></div>
        <div className="w-16 h-3 bg-[#5BDEF0]/10 rounded"></div>
      </motion.div>
    </div>
  </motion.div>
)

const LocationSearchGraphic = () => (
  <motion.div
    className="relative w-full h-48 bg-gradient-to-br from-[#5BDEF0]/10 to-[#4AC8E0]/10 rounded-2xl flex items-center justify-center overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative z-10 flex items-center space-x-4">
      <motion.div
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 4C12.6863 4 10 6.68629 10 10C10 16 16 28 16 28C16 28 22 16 22 10C22 6.68629 19.3137 4 16 4Z"
            stroke="#5BDEF0"
            strokeWidth="2"
            fill="#5BDEF0"
          />
          <circle cx="16" cy="10" r="3" fill="white" />
        </svg>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 gap-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            className="w-8 h-8 bg-[#5BDEF0]/20 rounded"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, delay: item * 0.2, repeat: Number.POSITIVE_INFINITY }}
          />
        ))}
      </motion.div>
    </div>
  </motion.div>
)

export default function FeatureSections() {
  return (
    <div className="w-full bg-gradient-to-br from-[#F8FCFF] via-white to-[#F0FBFF] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#5BDEF0]/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ReviewWritingGraphic />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#5BDEF0] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              내가 일했던 곳 리뷰
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">
              직접 일한 그곳, 솔직한
              <br />
              리뷰를 남겨주세요.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              리얼한 리뷰로 모두가 더 나은 선택을
              <br />할 수 있어요.
              <br />
              리뷰 작성만 해도 100% 경품 혜택
              <br />
              제공!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#5BDEF0] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              내가 앞으로 일 할 곳 리뷰 보기
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">
              걸으로 보이는 정보만으로
              <br />
              모든 부족하니까
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              지원 전, 실제 근무자의 리뷰를 확인
              <br />
              해보세요.
              <br />
              현장의 목소리가 더 정확한 기준이 됩<br />
              니다.
            </p>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2 bg-white rounded-3xl p-8 shadow-xl border-2 border-[#5BDEF0]/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ReviewReadingGraphic />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#5BDEF0]/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LocationSearchGraphic />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#5BDEF0] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              집 근처 괜찮은 사업장 찾기
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4">멀리 갈 필요 없잖아요?</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              집 근처에 숨은 좋은 직장, 아직 쉽게 찾<br />을 수 있어요.
              <br />
              리뷰를 보고 나에게 맞는 일터를 골라
              <br />
              보세요!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
