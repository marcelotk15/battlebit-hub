import { type Metadata } from 'next'

import { ClassSelector } from '~/app/weapons/class-selector'
import { WeaponProvider } from '~/app/weapons/provider'
import { WeaponRender } from '~/app/weapons/weapon-render'
import { WeaponSelector } from '~/app/weapons/weapon-selector'

export const metadata: Metadata = {
  title: 'Weapons',
}

export default function WeaponsPage() {
  return (
    <WeaponProvider>
      <div className="h-[calc(100vh-57px)] overflow-hidden">
        <div className="flex h-full w-full flex-col md:flex-row">
          <WeaponSelector />

          <div className="order-1 w-full items-center md:order-2 md:flex md:w-auto md:flex-auto md:flex-col md:justify-between md:overflow-hidden">
            <ClassSelector />
          </div>

          <WeaponRender />
        </div>
      </div>
    </WeaponProvider>
  )
}
