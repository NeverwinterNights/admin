import { TOKEN_LOCAL_STORAGE_KEY } from "@/consts/local-storage";

export const tokenGetterToSessionStorage = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
  }
};
