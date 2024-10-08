import { groq } from '@nuxtjs/sanity/runtime/groq'

export const IMAGE_ASSET_PROJECTION = groq`{
  _type,
  _id,
  url,
  altText,
  mimeType,
  metadata { lqip, dimensions }
}`

export const IMAGE_WITHOUT_PREVIEW_PROJECTION = groq`{
  _type,
  asset-> ${IMAGE_ASSET_PROJECTION.replace('lqip, ', '')},
}`

export const IMAGE_WITH_PREVIEW_PROJECTION = groq`{
  _type,
  asset-> ${IMAGE_ASSET_PROJECTION}
}`
