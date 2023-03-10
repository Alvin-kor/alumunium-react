import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const sidebarConfig = create(
  persist(
    (set) => ({
      nameRoutes: '',
      selected: null,
      setLogout: () => {},
      setSelected: (selectedNumber, nameRoutesIndex) =>
        set(() => ({ selected: selectedNumber, nameRoutes: nameRoutesIndex })),
      openDashboard: false,
      openUsers: false,
      openProducts: false,
      toggleDashboard: () => set((state) => ({ openDashboard: !state.openDashboard })),
      toggleUsers: () => set((state) => ({ openUsers: !state.openUsers })),
      toggleProducts: () => set((state) => ({ openProducts: !state.openProducts })),
    }),
    {
      name: 'sidebar-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
