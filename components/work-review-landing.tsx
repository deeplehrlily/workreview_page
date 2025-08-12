"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const GiftIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Gift box base - more rounded */}
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
    {/* Gift box lid - more rounded */}
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
    {/* Ribbon vertical */}
    <line x1="24" y1="20" x2="24" y2="40" stroke="#5BDEF0" strokeWidth="3" strokeLinecap="round" />
    {/* Ribbon horizontal */}
    <line x1="10" y1="23" x2="38" y2="23" stroke="#5BDEF0" strokeWidth="3" strokeLinecap="round" />
    {/* Bow - more rounded curves */}
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
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28 8C30 8 32 10 32 12L34 22C34.5 22.5 35 23 36 23L46 25C48 25 50 27 50 29C50 31 48 33 46 33L36 35C35 35 34.5 35.5 34 36L32 46C32 48 30 50 28 50C26 50 24 48 24 46L22 36C21.5 35.5 21 35 20 35L10 33C8 33 6 31 6 29C6 27 8 25 10 25L20 23C21 23 21.5 22.5 22 22L24 12C24 10 26 8 28 8Z"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Top area - plus and diamond */}
    <path d="M24 14L26 14M25 13L25 15" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M32 16L34 14L32 12L30 14Z" fill="white" opacity="0.6" />

    {/* Right area - plus and diamond */}
    <path d="M42 24L44 24M43 23L43 25" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M40 32L42 30L40 28L38 30Z" fill="white" opacity="0.6" />

    {/* Bottom area - plus and diamond */}
    <path d="M24 42L26 42M25 41L25 43" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M32 40L34 42L32 44L30 42Z" fill="white" opacity="0.6" />

    {/* Left area - plus and diamond */}
    <path d="M12 24L14 24M13 23L13 25" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M16 32L18 30L16 28L14 30Z" fill="white" opacity="0.6" />
  </svg>
)

function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false)
  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=="
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={() => setDidError(true)}
    />
  )
}

export default function WorkReviewLanding() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F8FF] via-[#F0FBFF] to-[#E0F4FF] z-0"></div>

      <div className="absolute top-10 left-10 w-4 h-4 bg-[#5BDEF0]/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-[#5BDEF0]/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-[#5BDEF0]/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-32 w-5 h-5 bg-[#5BDEF0]/25 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 left-8 w-2 h-2 bg-[#5BDEF0]/35 rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 right-12 w-4 h-4 bg-[#5BDEF0]/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white/50 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#5BDEF0]/25 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md md:max-w-lg px-6 py-12">
        <div className="relative w-full h-48 md:h-56 mb-6">
          {/* Left gift icon */}
          <motion.div
            className="absolute left-8 top-8"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-[2rem] shadow-[0_15px_35px_rgba(91,222,240,0.25)] flex items-center justify-center backdrop-blur-sm">
              <GiftIcon />
            </div>
          </motion.div>

          {/* Right star icon */}
          <motion.div
            className="absolute right-8 top-8"
            initial={{ y: 10 }}
            animate={{ y: -10 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-[2rem] shadow-[0_15px_35px_rgba(91,222,240,0.25)] flex items-center justify-center backdrop-blur-sm">
              <StarIcon />
            </div>
          </motion.div>

          {/* Center main icon with enhanced sparkle animation */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0_20px_40px_rgba(91,222,240,0.3)",
                  "0_25px_50px_rgba(91,222,240,0.5)",
                  "0_20px_40px_rgba(91,222,240,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-[#5BDEF0] to-[#4AC8E0] rounded-full flex items-center justify-center"
            >
              <CenterSparkleIcon />
            </motion.div>
          </motion.div>
        </div>

        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5BDEF0]/20 to-[#4AC8E0]/20 text-[#5BDEF0] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#5BDEF0]/30">
          ✨ 특별 이벤트
        </div>

        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2">
            <span className="bg-gradient-to-r from-[#5BDEF0] to-[#4AC8E0] bg-clip-text text-transparent">
              100% 당첨
            </span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700">리뷰 작성시 경품 증정</h2>
        </div>

        <p className="text-gray-600 text-center mb-6 max-w-xs text-sm md:text-base">
          보상은 선착순으로 제공되니 지금 바로 작성하러 가세요!
        </p>

        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5BDEF0]/15 to-[#4AC8E0]/15 text-[#5BDEF0] px-4 py-2 rounded-full text-sm font-bold mb-8 border border-[#5BDEF0]/30">
          ⚡ 모든 참여자에게 100% 보상 지급
        </div>

        <div className="w-full flex justify-center mb-8">
          <motion.a
            href="https://dainty-souffle-dc54ef.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-[#5BDEF0] to-[#4AC8E0] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            리뷰 작성하러가기
          </motion.a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 text-xs md:text-sm">
          <div className="flex items-center gap-1">
            <span>⚡</span>
            <span>간단한 리뷰 작성만으로 OK</span>
          </div>
        </div>
      </div>
    </div>
  )
}
