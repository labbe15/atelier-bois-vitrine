import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Configuration du client Sanity
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // CDN pour les performances en production
  apiVersion: '2024-01-01',
})

// Helper pour construire les URLs d'images optimisées
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Types pour les réalisations
export interface Realisation {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string
  location?: string
  description: string
  mainImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    hotspot?: {
      x: number
      y: number
    }
  }
  gallery?: Array<{
    asset: {
      _ref: string
      _type: 'reference'
    }
  }>
  featured: boolean
  publishedAt: string
}

// Query pour récupérer toutes les réalisations
export const realisationsQuery = `*[_type == "realisation"] | order(featured desc, publishedAt desc) {
  _id,
  title,
  slug,
  category,
  location,
  description,
  mainImage,
  gallery,
  featured,
  publishedAt
}`

// Query pour récupérer une réalisation par slug
export const realisationBySlugQuery = `*[_type == "realisation" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  location,
  description,
  mainImage,
  gallery,
  featured,
  publishedAt
}`
