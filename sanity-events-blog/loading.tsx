"use client";
// import config from "@/../sanity.config";
import React from "react";
// import { NextStudioLoading } from "next-sanity/studio/loading";
// // import NextStudioLoading from 'next-sanity/studio/loading'

// function loading() {
//   return <NextStudioLoading config={config} />;
// }

// export default loading;
// import type {Viewport} from "next"
import Viewport from "next"
import type {Metadata} from 'next'
// import type {Metadata, Viewport} from 'next'
import {metadata as studioMetadata, viewport as studioViewport} from 'next-sanity/studio'


// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the title until the Studio is loaded
  title: 'Loading Studio…',
}

// let Viewport;
// export const viewport: Viewport = {
//   ...studioViewport,
//   // Overrides the viewport to resize behavior
//   interactiveWidget: 'resizes-content',
// }

