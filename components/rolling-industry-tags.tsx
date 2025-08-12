"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function RollingIndustryTags({ scrollSpeed = 50, tagSpacing = 8 }) {
  const industryTags1 = [
    { id: 1, text: "편의점🏬" },
    { id: 2, text: "병원🏥" },
    { id: 3, text: "공장🏭" },
    { id: 4, text: "피트니스💪" },
    { id: 5, text: "카페☕" },
    { id: 6, text: "음식점🍽️" },
    { id: 7, text: "학원📚" },
    { id: 8, text: "은행🏦" },
  ]

  const industryTags2 = [
    { id: 9, text: "호텔🏨" },
    { id: 10, text: "미용실💇" },
    { id: 11, text: "약국💊" },
    { id: 12, text: "서점📖" },
    { id: 13, text: "영화관🎬" },
    { id: 14, text: "쇼핑몰🛍️" },
    { id: 15, text: "베이커리🥐" },
    { id: 16, text: "주유소⛽" },
  ]

  const scrollContainerRef1 = useRef(null)
  const scrollContainerRef2 = useRef(null)
  const [width1, setWidth1] = useState(0)
  const [width2, setWidth2] = useState(0)

  useEffect(() => {
    if (scrollContainerRef1.current) {
      setWidth1(scrollContainerRef1.current.scrollWidth / 2)
    }
    if (scrollContainerRef2.current) {
      setWidth2(scrollContainerRef2.current.scrollWidth / 2)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-[#F8FCFF] via-white to-[#F0FBFF] py-12 md:py-16 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#5BDEF0]/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#5BDEF0]/10 rounded-full blur-lg" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#5BDEF0]/5 rounded-full blur-md" />
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-[#5BDEF0]/8 rounded-full blur-sm" />
        <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-[#5BDEF0]/6 rounded-full blur-sm" />
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-[#5BDEF0]/7 rounded-full blur-md" />
      </div>

      <div className="relative z-10 mb-6 md:mb-8 text-center max-w-5xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-800 leading-tight mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="block">아래 업종중 하나라도</span>
          <span className="block bg-gradient-to-r from-[#5BDEF0] to-[#4AC8E0] bg-clip-text text-transparent">
            경험했나요?
          </span>
        </motion.h2>
        <motion.p
          className="text-base md:text-lg lg:text-xl text-slate-600 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          그럼 지금 바로 후기를 작성할 수 있어요
        </motion.p>
      </div>

      <div className="relative overflow-hidden space-y-3 md:space-y-4 px-4 md:px-6 py-6 md:py-8">
        {/* First row - left to right */}
        <div className="relative overflow-hidden py-3 md:py-4">
          <motion.div
            ref={scrollContainerRef1}
            className="flex whitespace-nowrap"
            animate={{
              x: [-width1, 0],
            }}
            transition={{
              duration: scrollSpeed,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {/* First set of tags */}
            {industryTags1.map((tag) => (
              <motion.div
                key={tag.id}
                className="inline-block relative"
                style={{ margin: `0 ${tagSpacing + 4}px` }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="bg-white hover:bg-gradient-to-r hover:from-[#5BDEF0] hover:to-[#4AC8E0] text-slate-700 hover:text-white rounded-full px-4 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold shadow-md hover:shadow-lg border-2 border-[#5BDEF0]/20 hover:border-white transition-all duration-300 cursor-pointer">
                  {tag.text}
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for continuous scrolling */}
            {industryTags1.map((tag) => (
              <motion.div
                key={`dup-${tag.id}`}
                className="inline-block relative"
                style={{ margin: `0 ${tagSpacing + 4}px` }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="bg-white hover:bg-gradient-to-r hover:from-[#5BDEF0] hover:to-[#4AC8E0] text-slate-700 hover:text-white rounded-full px-4 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold shadow-md hover:shadow-lg border-2 border-[#5BDEF0]/20 hover:border-white transition-all duration-300 cursor-pointer">
                  {tag.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative overflow-hidden py-3 md:py-4">
          <motion.div
            ref={scrollContainerRef2}
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -width2],
            }}
            transition={{
              duration: scrollSpeed,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {/* First set of tags */}
            {industryTags2.map((tag) => (
              <motion.div
                key={tag.id}
                className="inline-block relative"
                style={{ margin: `0 ${tagSpacing + 4}px` }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="bg-white hover:bg-gradient-to-r hover:from-[#5BDEF0] hover:to-[#4AC8E0] text-slate-700 hover:text-white rounded-full px-4 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold shadow-md hover:shadow-lg border-2 border-[#5BDEF0]/20 hover:border-white transition-all duration-300 cursor-pointer">
                  {tag.text}
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for continuous scrolling */}
            {industryTags2.map((tag) => (
              <motion.div
                key={`dup-${tag.id}`}
                className="inline-block relative"
                style={{ margin: `0 ${tagSpacing + 4}px` }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="bg-white hover:bg-gradient-to-r hover:from-[#5BDEF0] hover:to-[#4AC8E0] text-slate-700 hover:text-white rounded-full px-4 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold shadow-md hover:shadow-lg border-2 border-[#5BDEF0]/20 hover:border-white transition-all duration-300 cursor-pointer">
                  {tag.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
