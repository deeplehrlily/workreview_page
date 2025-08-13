import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "리뷰 작성 이벤트 - 100% 당첨 확률!",
  description: "대한민국 모든 사업장의 리뷰를 한자리에! 리뷰 작성시 경품 증정, 100% 당첨 확률로 지금 바로 참여하세요!",
  generator: "v0.app",
  keywords: "리뷰, 이벤트, 경품, 당첨, 사업장, 직장, 후기",
  openGraph: {
    title: "리뷰 작성 이벤트 - 100% 당첨!",
    description: "리뷰 작성만 해도 100% 경품 당첨! 지금 바로 참여하세요",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%235BDEF0'/><path d='M50 25 L60 40 L75 40 L65 52 L70 67 L50 57 L30 67 L35 52 L25 40 L40 40 Z' fill='white' stroke='white' strokeWidth='3' strokeLinejoin='round'/><circle cx='35' cy='35' r='2' fill='white'/><path d='M65 30 L67 32 M67 28 L65 30' stroke='white' strokeWidth='2' strokeLinecap='round'/></svg>"
        />
        <meta name="theme-color" content="#5BDEF0" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
