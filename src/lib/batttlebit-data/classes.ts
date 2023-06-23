export type ClassWeaponConfig = Record<string, Array<string>>

export interface Class {
  name: string
  description?: string
  imageName?: string
  demoWeapon: string
  weapons: ClassWeaponConfig
}

export const classes: Class[] = [
  {
    name: 'Leader',
    description: 'Leader',
    imageName: 'leader',
    demoWeapon: 'Scar-H',
    weapons: {
      automaticRifles: [
        'M4A1',
        'AK74',
        'Scar-H',
        'AK15',
        'ACR',
        'AUGA3',
        'FAL',
        'G36C',
        'FAMAS',
        'SG550',
        'HK419',
      ],
      marksmanRifles: ['MK20', 'M110', 'MK14', 'SVD'],
      pistols: ['M9', 'MP443', 'USP', 'UNICA', 'GLOCK18', 'DESERT-EAGLE'],
    },
  },
  {
    name: 'Assault',
    description: 'Assault',
    imageName: 'assault',
    demoWeapon: 'M4A1',
    weapons: {
      automaticRifles: [
        'M4A1',
        'AK74',
        'Scar-H',
        'AK15',
        'ACR',
        'AUGA3',
        'FAL',
        'G36C',
        'FAMAS',
        'SG550',
        'HK419',
      ],
      submachineGuns: ['MP7', 'UMP45', 'PP2000', 'KrissVector', 'MP5'],
      pistols: ['M9', 'MP443', 'USP', 'UNICA', 'GLOCK18', 'DESERT-EAGLE'],
    },
  },
  {
    name: 'Medic',
    description: 'Healz',
    imageName: 'medic',
    demoWeapon: 'HoneyBadger',
    weapons: {
      personalDefence: ['HoneyBadger', 'P90', 'GROZA'],
      carbines: ['ASVAL'],
      submachineGuns: ['MP7', 'UMP45', 'PP2000', 'KrissVector', 'MP5', 'PP19'],
      automaticRifles: [
        'M4A1',
        'AK74',
        'Scar-H',
        'AK15',
        'ACR',
        'AUGA3',
        'FAL',
        'G36C',
        'FAMAS',
        'SG550',
        'HK419',
      ],
      pistols: ['M9', 'MP443', 'USP', 'UNICA', 'GLOCK18', 'DESERT-EAGLE'],
    },
  },
  {
    name: 'Engineer',
    description: 'Engineer',
    imageName: 'engineer',
    demoWeapon: 'UMP45',
    weapons: {
      submachineGuns: ['MP7', 'UMP45', 'PP2000', 'KrissVector', 'MP5', 'PP19'],
      automaticRifles: [
        'M4A1',
        'AK74',
        'Scar-H',
        'AK15',
        'ACR',
        'AUGA3',
        'FAL',
        'G36C',
        'FAMAS',
        'SG550',
        'HK419',
      ],
      marksmanRifles: ['MK20', 'M110', 'MK14', 'SVD'],
      personalDefence: ['HoneyBadger', 'P90', 'GROZA'],
      carbines: ['ASVAL'],
      pistols: ['M9', 'MP443', 'USP', 'UNICA', 'GLOCK18', 'DESERT-EAGLE'],
    },
  },
  {
    name: 'Support',
    description: 'Support',
    imageName: 'support',
    demoWeapon: 'M249',
    weapons: {
      lightSupportGuns: ['L86A1', 'M249'],
      pistols: ['M9', 'MP443', 'USP', 'UNICA', 'GLOCK18', 'DESERT-EAGLE'],
    },
  },
  {
    name: 'Recon',
    description: 'Recon',
    imageName: 'recon',
    demoWeapon: 'L96',
    weapons: {
      sniperRifles: ['SSG69', 'SV98', 'L96', 'M200', 'MSR', 'REM700'],
      marksmanRifles: ['MK20', 'M110', 'MK14', 'SVD'],
      automaticRifles: [
        'M4A1',
        'AK74',
        'Scar-H',
        'AK15',
        'ACR',
        'AUGA3',
        'FAL',
        'G36C',
        'FAMAS',
        'SG550',
        'HK419',
      ],
      pistols: ['M9', 'MP443', 'USP', 'UNICA', 'GLOCK18', 'DESERT-EAGLE'],
    },
  },
]
