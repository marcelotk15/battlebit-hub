'use client'

import Image from 'next/image'

import { useWeaponContext } from '~/app/weapons/provider'
import { Button } from '~/components/ui/button'
import { kebabCase } from '~/lib/namingConventions'

export function ClassSelector() {
  const { classes, classSelected, setSelectedClass } = useWeaponContext()

  return (
    <div>
      <div className="scrollbar-horizontal flex w-full items-center justify-between space-x-2 overflow-x-auto overflow-y-hidden px-4 py-4 md:w-auto">
        {classes.map((_class) => (
          <Button
            key={_class.name}
            variant={'ghost'}
            data-selected={_class.name === classSelected.name}
            className="group relative z-20 flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center border-2 border-transparent bg-zinc-700 text-white transition-all hover:bg-accent data-[selected=true]:bg-zinc-900"
            onClick={() => setSelectedClass(_class)}
          >
            <Image
              src={`/images/classes/${kebabCase(_class.name)}-alt.png`}
              alt={_class.name}
              width={40}
              height={40}
            />

            <span>{_class.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
