import SanityStudio from '../../../../sanity/components/SanityStudio'

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata } from 'next-sanity/studio/metadata'

export default function StudioPage() {
  return <SanityStudio />
}
