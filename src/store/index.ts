import { QueryClient } from '@tanstack/query-core'
import { cache } from 'react'

export const queryClient = cache(() => new QueryClient())()
