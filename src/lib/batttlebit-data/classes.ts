import { weapons, type WeaponData } from '~/lib/batttlebit-data/weapons'

export interface ClassData {
  name: string
  description?: string
  imageName?: string
  demoWeapon: string
  weapons: Array<WeaponData[]>
}

export const classes: ClassData[] = [
  {
    name: 'Leader',
    description: 'Leader',
    imageName: 'leader',
    demoWeapon: 'Scar-H',
    weapons: [weapons.automaticRifles, weapons.marksmanRifles, weapons.pistols],
  },
  {
    name: 'Assault',
    description: 'Assault',
    imageName: 'assault',
    demoWeapon: 'M4A1',
    weapons: [weapons.automaticRifles, weapons.submachineGuns, weapons.pistols],
  },
  {
    name: 'Medic',
    description: 'Healz',
    imageName: 'medic',
    demoWeapon: 'HoneyBadger',
    weapons: [
      weapons.personalDefence,
      weapons.carbines,
      weapons.submachineGuns,
      weapons.automaticRifles,
      weapons.pistols,
    ],
  },
  {
    name: 'Engineer',
    description: 'Engineer',
    imageName: 'engineer',
    demoWeapon: 'UMP45',
    weapons: [
      weapons.submachineGuns,
      weapons.automaticRifles,
      weapons.marksmanRifles,
      weapons.personalDefence,
      weapons.carbines,
      weapons.pistols,
    ],
  },
  {
    name: 'Support',
    description: 'Support',
    imageName: 'support',
    demoWeapon: 'M249',
    weapons: [weapons.lightSupportGuns, weapons.pistols],
  },
  {
    name: 'Recon',
    description: 'Recon',
    imageName: 'recon',
    demoWeapon: 'L96',
    weapons: [
      weapons.sniperRifles,
      weapons.marksmanRifles,
      weapons.automaticRifles,
      weapons.automaticRifles,
    ],
  },
]
