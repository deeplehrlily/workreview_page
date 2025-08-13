"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function FAQSection() {
  const faqItems = [
    {
      id: 1,
      question: "어떤 사업장까지 작성할 수 있나요?",
      answer:
        "편의점, 미용실, 공장, 센터, 학원, 병원, 회사, 식당, 카페, 교회 등등 일할 수 있는 모든 곳이면 가능합니다!",
    },
    {
      id: 2,
      question: "누구나 리뷰를 작성할 수 있나요?",
      answer: "네, 실제로 일한 경험이 있다면 누구든지 참여하실 수 있어요.",
    },
    {
      id: 3,
      question: "내 정보는 공개되나요?",
      answer: "아닙니다. 리뷰는 익명으로 작성되며, 개인정보는 절대 공개되지 않습니다.",
    },
    {
      id: 4,
      question: "리뷰를 작성하면 어떤 혜택이 있나요?",
      answer: "리뷰 작성 시 100% 경품 참여 기회가 주어집니다. 단, 선착순이니 빨리 작성하시는 것을 추천드립니다.",
    },
    {
      id: 5,
      question: "리뷰 인증은 어떤식으로 인증되나요?",
      answer:
        "현직자 인증 페이지에서 증빙자료를 첨부해서 인증을 하지만, 증빙 자료가 없더라도 근무했다는 사실이 리뷰를 통해 충분히 인정되면 인증해드립니다.",
    },
    {
      id: 6,
      question: "리뷰를 작성할때 어떤 경험까지 작성 가능한가요?",
      answer: "처음부터 끝까지 전부 작성가능합니다.",
    },
    {
      id: 7,
      question: "리뷰를 너무 솔직하게 적기엔 후환이 두렵습니다.",
      answer:
        "신분이 추측될 수 있는 내용이 들어가면 워크리뷰팀에서 직접 검수하는 과정에서 신분이 드러날 수 있는 내용을 마스킹해드리니 걱정하지 마시고 편하게 작성해주세요.",
    },
    {
      id: 8,
      question: "리뷰를 작성했는데 안보여요",
      answer:
        "개인정보 또는 너무 심한 욕설 및 비속어를 활용하여 후기를 작성할 시 리뷰 인정이 불가능하여 반려될 수 있습니다.해당 내용은 반려시 카카오채널 메세지를 통해서 알려드려요.",
    },
    {
      id: 9,
      question: "근무지에 대한 기억이 잘 나지않으면 어쩌죠?",
      answer:
        "최대한 기억이 나시는대로 작성해주시되, 정말로 기억에 남는 것이 없거나 작성하기가 어렵다면 작성란에 '답변이 어려움'이라고 남겨주세요",
    },
    {
      id: 10,
      question: "경품은 어떤식으로 제공되나요?",
      answer:
        "리뷰를 적어주신만큼 룰렛을 돌려 제공해드리며 작성 후 영업일 기준 3-4일안에 승인여부와 함께 룰렛을 돌릴 수 있는 링크를 전달드립니다.",
    },
  ]

  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (itemId: number) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(itemId)) {
        return prevExpandedItems.filter((id) => id !== itemId)
      } else {
        return [...prevExpandedItems, itemId]
      }
    })
  }

  const isExpanded = (itemId: number) => expandedItems.includes(itemId)

  return (
    <div className="w-full bg-gradient-to-br from-[#F8FCFF] via-white to-[#F0FBFF] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">자주 묻는 질문</h2>
          <p className="text-slate-600 text-lg">궁금한 점이 있으시면 아래 내용을 확인해보세요</p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-[#5BDEF0]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none hover:bg-[#5BDEF0]/5 transition-colors duration-300"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isExpanded(item.id)}
              >
                <span className="font-bold text-slate-800 text-lg">{`Q. ${item.question}`}</span>
                <motion.div
                  animate={{ rotate: isExpanded(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#5BDEF0] flex-shrink-0 ml-4"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isExpanded(item.id) ? "auto" : 0,
                  opacity: isExpanded(item.id) ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-5 border-t border-[#5BDEF0]/10 bg-gradient-to-r from-[#5BDEF0]/5 to-transparent">
                  <p className="text-slate-600 leading-relaxed">{`A. ${item.answer}`}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
