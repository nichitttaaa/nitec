import {create} from "zustand";
import type {User} from "../api/types.ts";

interface UserStore {
    user: User | null,
    setUser: (user: User) => void
    clear: () => void
}

export const useUserStore = create<UserStore>((set) =>({
    user: null,
    setUser: (user) => set({user: user}),
    clear: () => set({user: null})
}))

