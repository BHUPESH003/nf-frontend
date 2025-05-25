import { atom, useAtom } from 'jotai';
import { User } from 'src/types/user';

const userAtom = atom<User | null>(null);
userAtom.onMount = () => {
  const stored = localStorage.getItem('user');
  return stored ? JSON.parse(stored) : null;
};

export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  const updateUser = (newUser: User | null) => {
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
    setUser(newUser);
  };

  return { user, updateUser };
}; 