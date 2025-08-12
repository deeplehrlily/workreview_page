"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function ReviewCarousel({ autoRotateInterval = 15, showNavigationButtons = true }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const reviews = [
    {
      id: 1,
      category: "단점",
      rating: 2,
      content:
        "월급이 진짜 박함... 거의 알바 수준이었고, 스케줄 조율도 잘 안 돼요. 스탭이 적어서 쉬는 날에도 연락 오기도 함. 기술 배우는 건 좋아도 복지 바라면 실망할 수 있어요.",
      tipTitle: "취업 Tip",
      tipContent: "먼저 본인 캐주얼한지 간지 맞는지 확인사 되게 따지",
    },
    {
      id: 2,
      category: "장점",
      rating: 5,
      content:
        "직원들이 다 친절하고 일하기 좋은 분위기예요. 교육 시스템이 잘 되어있어서 새로운 기술을 배우기 쉬워요. 회사 위치도 교통이 편리해서 출퇴근이 수월해요.",
      tipTitle: "면접 Tip",
      tipContent: "자신의 경험을 구체적으로 이야기하면 좋은 인상을 줄 수 있어요.",
    },
    {
      id: 3,
      category: "전반적 평가",
      rating: 4,
      content:
        "처음에는 적응하기 어려웠지만 시간이 지나면서 점점 나아졌어요. 동료들이 많이 도와줘서 금방 적응할 수 있었습니다. 업무량은 좀 많지만 배울 점도 많아요.",
      tipTitle: "근무 Tip",
      tipContent: "업무 일정을 미리 계획하고 동료들과 소통하는 것이 중요해요.",
    },
    {
      id: 4,
      category: "근무 환경",
      rating: 5,
      content:
        "사무실이 깨끗하고 쾌적해요. 카페테리아도 있어서 휴식 시간에 편하게 쉴 수 있어요. 회사에서 복지도 많이 신경써주는 편이라 만족스러워요.",
      tipTitle: "성장 Tip",
      tipContent: "회사에서 제공하는 교육 프로그램을 적극 활용하세요.",
    },
    {
      id: 5,
      category: "업무 강도",
      rating: 3,
      content:
        "업무 강도는 높은 편이지만 그만큼 성장할 수 있는 기회가 많아요. 야근이 가끔 있지만 보상 체계가 잘 되어 있어서 불만은 없어요.",
      tipTitle: "자기관리 Tip",
      tipContent: "건강관리를 소홀히 하지 말고 규칙적인 생활을 하세요.",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      nextSlide()
    }, autoRotateInterval * 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [activeIndex, autoRotateInterval])

  return (
    <div className="w-full bg-gradient-to-br from-[#F8FCFF] via-white to-[#F0FBFF] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-slate-800">
          작성해주신 후기는 아래와 같이 노출될 예정이예요
        </h2>

        <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden border-2 border-[#5BDEF0]/10">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[200px]"
            >
              <div className="mb-6 flex items-center justify-between flex-wrap gap-y-2">
                <h3 className="text-xl font-bold text-slate-700 bg-gradient-to-r from-[#5BDEF0] to-[#4AC8E0] bg-clip-text text-transparent">
                  {reviews[activeIndex].category}
                </h3>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      size={18}
                      className={
                        num <= (reviews[activeIndex].rating ?? 0) ? "text-[#5BDEF0] fill-[#5BDEF0]" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed text-base">{reviews[activeIndex].content}</p>
              <div className="bg-gradient-to-r from-[#5BDEF0]/10 to-[#4AC8E0]/10 rounded-xl p-4 border border-[#5BDEF0]/20">
                <h4 className="text-lg font-bold text-[#5BDEF0] mb-2">{reviews[activeIndex].tipTitle}</h4>
                <p className="text-slate-600">{reviews[activeIndex].tipContent}</p>
              </div>
            </motion.div>
          </div>

          {showNavigationButtons && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#5BDEF0] hover:text-[#4AC8E0] rounded-full p-3 shadow-lg focus:outline-none transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#5BDEF0] hover:text-[#4AC8E0] rounded-full p-3 shadow-lg focus:outline-none transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-gradient-to-r from-[#5BDEF0] to-[#4AC8E0] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
