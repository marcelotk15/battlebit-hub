'use client'

import { LockOpen2Icon } from '@radix-ui/react-icons'
import Image from 'next/image'

import { useWeaponContext } from '~/app/weapons/provider'
import { Button } from '~/components/ui/button'

export function WeaponSelector() {
  const { classSelected, weaponSelected, setSelectedWeapon } = useWeaponContext()

  return (
    <div className="scrollbar-vertical relative z-20 order-2 h-full max-h-full w-full overflow-y-auto px-4 pb-8 text-white md:order-1 md:max-w-[320px]">
      {classSelected.weapons.map((category) => (
        <div key={Math.random()}>
          <h2 className="mt-6 capitalize">{category[0].weaponType.replace(/-/g, ' ')}</h2>

          {category.map((weapon) => (
            <Button
              key={Math.random()}
              data-selected={weaponSelected.id === weapon.id}
              className="tex-white mt-2 flex w-full items-center justify-between rounded border-2 border-transparent bg-zinc-700 px-4 py-1 text-white   hover:bg-accent data-[selected=true]:bg-zinc-900"
              onClick={() => setSelectedWeapon(weapon)}
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={`/images/weapons/${weapon.id}.png`}
                  width={64}
                  height={32}
                  alt={weapon.name}
                />

                <span>{weapon.name}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <LockOpen2Icon />

                <span>{weapon.unlockLevel}</span>
              </div>
            </Button>
          ))}
        </div>
      ))}
    </div>
  )
}
