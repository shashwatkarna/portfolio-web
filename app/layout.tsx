import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Shashwat Karna || Portfolio</title>
        <meta name="description" content="Portffolio, Full Stack, Backend, Resume, Website" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'nextjs',
      author: 'Shashwat Karna',
      version: '0.5.0',
      icons: {
        icon: '/favicon.ico',
      },
    };
