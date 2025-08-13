import CardNewsSquare from "@/components/card-news-square"
import CardNewsWide from "@/components/card-news-wide"

export default function CardNewsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">카드뉴스 미리보기</h1>

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">정사각형 (1080x1080)</h2>
            <div
              className="inline-block border-2 border-gray-300 rounded-lg overflow-hidden"
              style={{ transform: "scale(0.5)", transformOrigin: "center" }}
            >
              <CardNewsSquare />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">와이드 (1920x1080)</h2>
            <div
              className="inline-block border-2 border-gray-300 rounded-lg overflow-hidden"
              style={{ transform: "scale(0.4)", transformOrigin: "center" }}
            >
              <CardNewsWide />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
