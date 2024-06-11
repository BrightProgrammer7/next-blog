'use client'

import {NextStudio} from 'next-sanity/studio'

import config from '~/sanity.config'
import React from 'react'

export function Studio() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />
}