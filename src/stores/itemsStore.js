import { create } from "zustand";
import { initialItems } from "../lib/constants";

create((set) => ({
  items: initialItems,
  remoneAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: initialItems }));
  },
  
}));
