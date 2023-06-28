import 'styles/global.css'

import PATHS from 'constants/paths'
import NavMenu, { type TNavMenu } from 'domains/navigation/components/NavMenu'

import MainMenuContainer from './components/MainMenuContainer'

const menuItems: TNavMenu['items'] = [
  { label: 'parties', href: `/${PATHS.PARTIES}` },
  { label: 'mixes', href: `/${PATHS.MIXES}` },
  { label: 'zines', href: `/${PATHS.ZINES}` },
  { label: 'about', href: `/${PATHS.ABOUT}` },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MainMenuContainer menu={<NavMenu items={menuItems} />}>
      <main>{children}</main>
    </MainMenuContainer>
  )
}
