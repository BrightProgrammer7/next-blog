// import React from 'react'
import {Studio} from './Studio'
// import type {Metadata, Viewport} from 'next'
// import {metadata as studioMetadata, viewport as studioViewport} from 'next-sanity/studio'
// import { Metadata } from 'next'
// import { Viewport } from 'next/dist/lib/metadata/types/extra-types'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'

// Set the right `viewport`, `robots` and `referer` meta tags
export {metadata, viewport} from 'next-sanity/studio'

// Set the right `viewport`, `robots` and `referer` meta tags
// export const metadata: Metadata = {
//   ...studioMetadata,
//   // Overrides the title until the Studio is loaded
//   title: 'Loading Studio…',
// }

// export const viewport: Viewport = {
//   ...studioViewport,
//   // Overrides the viewport to resize behavior
//   interactiveWidget: 'resizes-content',
// }

export default function StudioPage() {
    return (<Studio />);
  }
