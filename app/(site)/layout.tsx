import 'styles/global.css'

import MenuContainer from 'domains/navigation/components/MenuContainer'
import NavBar from 'domains/navigation/components/NavBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MenuContainer>
      <NavBar />
      {children}
    </MenuContainer>
  )
}
