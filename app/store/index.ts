import { create } from "zustand"

interface MenuState {
  open: boolean
  setOpen: (open: boolean) => void
}

interface SectionState {
  sectionBackground: "light" | "dark"
  setSectionBackground: (color: "light" | "dark") => void
}

export const useMenuStore = create<MenuState>((set) => ({
  open: false,
  setOpen: (open) => set({ open })
}))

export const useSectionState = create<SectionState>((set) => ({
  sectionBackground: "light",
  setSectionBackground: (color) => set({ sectionBackground: color })
}))
