"use client"

import { motion } from "framer-motion"

const GiftIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="12"
      y="24"
      width="24"
      height="16"
      rx="4"
      fill="none"
      stroke="#5BDEF0"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <rect
      x="10"
      y="20"
      width="28"
      height="6"
      rx="3"
      fill="none"
      stroke="#5BDEF0"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line x1="24" y1="20" x2="24" y2="40" stroke="#5BDEF0" strokeWidth="3" strokeLinecap="round" />
    <line x1="10" y1="23" x2="38" y2="23" stroke="#5BDEF0" strokeWidth="3" strokeLinecap="round" />
    <path
      d="M18 16C18 16 20 12 24 16C28 12 30 16 30 16"
      fill="none"
      stroke="#5BDEF0"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const StarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 8L28 18H38L30 26L33 36L24 31L15 36L18 26L10 18H20L24 8Z"
      fill="none"
      stroke="#10B981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CenterSparkleIcon = () => (
  <svg width="80" height="80" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28 8C30 8 32 10 32 12L34 22C34.5 22.5 35 23 36 23L46 25C48 25 50 27 50 29C50 31 48 33 46 33L36 35C35 35 34.5 35.5 34 36L32 46C32 48 30 50 28 50C26 50 24 48 24 46L22 36C21.5 35.5 21 35 20 35L10 33C8 33 6 31 6 29C6 27 8 25 10 25L20 23C21 23 21.5 22.5 22 22L24 12C24 10 26 8 28 8Z"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M24 14L26 14M25 13L25 15" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M32 16L34 14L32 12L30 14Z" fill="white" opacity="0.6" />
    <path d="M42 24L44 24M43 23L43 25" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M40 32L42 30L40 28L38 30Z" fill="white" opacity="0.6" />
    <path d="M24 42L26 42M25 41L25 43" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M32 40L34 42L32 44L30 42Z" fill="white" opacity="0.6" />
    <path d="M12 24L14 24M13 23L13 25" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M16 32L18 30L16 28L14 30Z" fill="white" opacity="0.6" />
  </svg>
)

export default function CardNewsSquare() {
  return (
    <div className="w-[1080px] h-[1080px] relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8F8FF] via-[#F0FBFF] to-[#E0F4FF]">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-8 h-8 bg-[#5BDEF0]/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-40 w-12 h-12 bg-[#5BDEF0]/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-60 left-32 w-6 h-6 bg-[#5BDEF0]/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-60 w-10 h-10 bg-[#5BDEF0]/25 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 left-16 w-4 h-4 bg-[#5BDEF0]/35 rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 right-24 w-8 h-8 bg-[#5BDEF0]/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-white/50 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/40 rounded-full animate-bounce"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Icons section */}
        <div className="relative w-full h-80 mb-12">
          {/* Left gift icon */}
          <motion.div
            className="absolute left-32 top-16"
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="w-40 h-40 bg-white rounded-[3rem] shadow-[0_25px_50px_rgba(91,222,240,0.3)] flex items-center justify-center backdrop-blur-sm">
              <GiftIcon />
            </div>
          </motion.div>

          {/* Right star icon */}
          <motion.div
            className="absolute right-32 top-16"
            initial={{ y: 20 }}
            animate={{ y: -20 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="w-40 h-40 bg-white rounded-[3rem] shadow-[0_25px_50px_rgba(91,222,240,0.3)] flex items-center justify-center backdrop-blur-sm">
              <StarIcon />
            </div>
          </motion.div>

          {/* Center main icon */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              boxShadow: [
                "0_30px_60px_rgba(91,222,240,0.3)",
                "0_40px_80px_rgba(91,222,240,0.5)",
                "0_30px_60px_rgba(91,222,240,0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="w-56 h-56 bg-gradient-to-br from-[#5BDEF0] to-[#4AC8E0] rounded-full flex items-center justify-center">
              <CenterSparkleIcon />
            </div>
          </motion.div>
        </div>

        {/* Special event badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5BDEF0]/20 to-[#4AC8E0]/20 text-[#5BDEF0] px-8 py-4 rounded-full text-2xl font-bold mb-12 border border-[#5BDEF0]/30">
          ✨ 특별 이벤트
        </div>

        {/* Main title */}
        <div className="text-center mb-8">
          <h1 className="text-9xl font-black tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-[#5BDEF0] to-[#4AC8E0] bg-clip-text text-transparent">
              100% 당첨
            </span>
          </h1>
          <h2 className="text-4xl font-bold text-gray-700">리뷰 작성시 경품 증정</h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-center mb-12 text-2xl max-w-2xl">
          보상은 선착순으로 제공되니 지금 바로 작성하러 가세요!
        </p>

        {/* Reward badge */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#5BDEF0]/15 to-[#4AC8E0]/15 text-[#5BDEF0] px-8 py-4 rounded-full text-xl font-bold mb-16 border border-[#5BDEF0]/30">
          ⚡ 모든 참여자에게 100% 보상 지급
        </div>

        {/* CTA Button */}
        <motion.button
          className="px-20 py-6 bg-gradient-to-r from-[#5BDEF0] to-[#4AC8E0] text-white font-bold rounded-full shadow-lg text-3xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          리뷰 작성하러가기
        </motion.button>

        {/* Bottom text */}
        <div className="flex items-center gap-3 text-gray-600 text-xl mt-12">
          <span>⚡</span>
          <span>간단한 리뷰 작성만으로 OK</span>
        </div>
      </div>
    </div>
  )
}
