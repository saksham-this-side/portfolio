import './globals.css'

export const metadata = {
  title: 'Saksham Vaishnav | DevOps Engineer',
  description: 'Portfolio of Saksham Vaishnav, a DevOps Engineer specializing in Kubernetes, AWS, and Automation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
