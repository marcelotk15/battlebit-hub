'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { columns } from '~/app/servers/columns'
import { DataTable } from '~/app/servers/data-table'
import { type ServerData } from '~/types/battlebit'

async function getServers() {
  const res = await fetch('https://publicapi.battlebit.cloud/Servers/GetServerList')

  return (await res.json()) as ServerData[]
}

export function ServersList() {
  const [autoRefetch, setAutoRefetch] = useState(true)

  const { data } = useQuery({
    queryKey: ['hydrate-servers'],
    queryFn: () => getServers(),
    ...(autoRefetch && { refetchInterval: 20 * 1000 }),
  })

  if (!data) return

  return <DataTable columns={columns} data={data} />
}
