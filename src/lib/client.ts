import 'server-only'

import {draftMode} from 'next/headers'
import {createClient, type QueryOptions, type QueryParams} from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false,
})


const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Used by `PreviewProvider`
export const token = process.env.SANITY_API_READ_TOKEN

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}) {
  const isDraftMode = draftMode().isEnabled
  if (isDraftMode && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
  }

  const REVALIDATE_SKIP_CACHE = 0
  const REVALIDATE_CACHE_FOREVER = false

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode &&
      ({
        token: token,
        perspective: 'previewDrafts',
      } satisfies QueryOptions)),
    next: {
      revalidate: isDraftMode ? REVALIDATE_SKIP_CACHE : REVALIDATE_CACHE_FOREVER,
      tags,
    },
  })
}