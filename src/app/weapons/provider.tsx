'use client'

import {
  type PropsWithChildren,
  type SetStateAction,
  type Dispatch,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

import { classes, type ClassData, type WeaponData } from '~/lib/batttlebit-data'

interface WeaponContext {
  classes: ClassData[]
  classSelected: ClassData
  setSelectedClass: Dispatch<SetStateAction<ClassData>>
  weaponSelected: WeaponData
  setSelectedWeapon: Dispatch<SetStateAction<WeaponData>>
}

const WeaponContext = createContext({} as WeaponContext)

export function WeaponProvider({ children }: PropsWithChildren) {
  const [classSelected, setSelectedClass] = useState(classes[0])

  const [weaponSelected, setSelectedWeapon] = useState(classSelected.weapons[0][0])

  useEffect(() => {
    setSelectedWeapon(classSelected.weapons[0][0])
  }, [classSelected])

  return (
    <WeaponContext.Provider
      value={{ classes, classSelected, setSelectedClass, weaponSelected, setSelectedWeapon }}
    >
      {children}
    </WeaponContext.Provider>
  )
}

export function useWeaponContext() {
  const context = useContext(WeaponContext)

  if (!context) {
    throw new Error('useWeaponContext must be used within a WeaponProvider')
  }

  return context
}
