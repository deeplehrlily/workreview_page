"use client"

import WorkReviewLanding from "@/components/work-review-landing"
import RollingIndustryTags from "@/components/rolling-industry-tags"
import FeatureSections from "@/components/feature-sections"
import ReviewCarousel from "@/components/review-carousel"
import FinalCTASection from "@/components/final-cta-section"
import FAQSection from "@/components/faq-section"
import FloatingCTAButton from "@/components/floating-cta-button"

export default function RewardPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative">
        <WorkReviewLanding />
      </section>

      <section className="relative">
        <RollingIndustryTags />
      </section>

      <section className="relative">
        <FeatureSections />
      </section>

      <section className="relative">
        <ReviewCarousel />
      </section>

      <section className="relative">
        <FinalCTASection />
      </section>

      <section className="relative">
        <FAQSection />
      </section>

      <footer className="py-12 bg-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-white mb-4">
            <h4 className="text-xl font-bold mb-2">리뷰 보상 플랫폼</h4>
            <p className="text-slate-300">정직한 리뷰, 확실한 보상</p>
          </div>
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm">© 2024 리뷰 보상 플랫폼. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>

      <FloatingCTAButton />
    </div>
  )
}
