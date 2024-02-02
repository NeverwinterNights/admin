import { TOKEN_LOCAL_STORAGE_KEY } from '@/consts/local-storage'

export const tokenGetterToLocalStorage = () => {
  return localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY)
}
