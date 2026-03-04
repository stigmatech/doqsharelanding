export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout is only for routes not under [lang]
  // Since middleware redirects everything to /[lang], this should rarely be used
  // But Next.js requires a root layout, so we just pass through children
  // The actual HTML structure is in app/[lang]/layout.tsx
  return children
}
