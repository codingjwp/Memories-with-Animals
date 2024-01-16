import './globals.css'

const defaultUrl = 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'MwA',
  description: 'The Memorials with Animals SNS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-pageColor">
        <main className="mt-12 base_height">
          {children}
        </main>
      </body>
    </html>
  )
}
