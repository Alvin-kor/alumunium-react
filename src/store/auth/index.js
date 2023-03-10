import { getAuth } from 'firebase/auth';
// -------------------------------Database---------------------------------
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
// -------------------------------Config---------------------------------
import { app } from 'config/firebaseConfig';
// -------------------------------Config---------------------------------
export const auth = getAuth(app);

export const authLogin = create(
  persist(
    (set) => ({
      auth: {
        Username: '',
        Password: '',
      },
      userCredentials: {},
      errorCode: '',
      errorMessage: '',
      setAuth: (event) =>
        set((state) =>
          event.name === 'Username' && event.value === 'admin'
            ? { auth: { ...state.auth, [event.name]: `${event.value}@alujaya.com` } }
            : event.name === 'Username'
            ? { auth: { ...state.auth, [event.name]: `${event.value}@gmail.com` } }
            : { auth: { ...state.auth, [event.name]: event.value } }
        ),
      setUserCred: (event) =>
        set(() => ({
          userCredentials: event,
        })),
      setErrorCode: (event) =>
        set(() => ({
          errorCode: event,
        })),
      setErrorMessage: (event) =>
        set(() => ({
          errorMessage: event,
        })),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
