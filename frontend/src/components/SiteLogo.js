import { Image } from '@mantine/core'

const SiteLogo = () => {
  return (
    <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
      <Image
        radius="md"
        alt="Random unsplash image"
        withPlaceholder
      />
    </div>
  )
}

export default SiteLogo