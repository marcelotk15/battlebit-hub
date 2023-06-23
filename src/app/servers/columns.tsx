import { type ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'

import { regionToIso } from '~/lib/batttlebit-data'
import { kebabCase } from '~/lib/namingConventions'
import { type ServerData } from '~/types/battlebit'

export const columns: ColumnDef<ServerData>[] = [
  {
    header: 'Server',
    accessorFn: (server) => ({ ...server }),
    cell: ({ row }) => (
      <div className="flex items-center">
        <Image
          src={`/images/maps/${kebabCase(row.original.Map)}/thumbnail.jpg`}
          alt={row.original.Map}
          width={50}
          height={28}
        />

        <div className="ml-2 flex flex-col">
          <h2 className="text-sm">{`${row.original.IsOfficial ? '[OFICIAL]' : '[COMMUNITY]'} ${
            row.original.Name
          }`}</h2>

          <div className="flex">
            <Image
              src={`/images/flags/${regionToIso(row.original.Region)}.svg`}
              alt={row.original.Region}
              width={16}
              height={12}
            />

            <span className="ml-2 text-xs uppercase">
              {row.original.Gamemode} • {row.original.Map} • {row.original.DayNight} •{' '}
              {row.original.Hz}Hz
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    header: 'Players',
    id: 'players',
    cell: ({ row }) => (
      <>
        {row.original.MaxPlayers} / {row.original.Players}{' '}
        {row.original.QueuePlayers > 0 && <span>({row.original.QueuePlayers})</span>}
      </>
    ),
  },
]
