import 'styles/global.css'

import NavBar from 'components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
