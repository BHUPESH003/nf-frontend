import { atom } from "jotai";
import { User } from "src/types/user";

export const userAtom = atom<User | null>(null);
