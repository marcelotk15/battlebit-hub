'use client'

import { type HydrateProps, Hydrate as RQHydrate } from '@tanstack/react-query'

export function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />
}
