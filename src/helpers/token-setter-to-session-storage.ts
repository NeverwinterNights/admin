import { TOKEN_LOCAL_STORAGE_KEY } from "@/consts/local-storage";

export const tokenSetterToSessionStorage = (token: string) => {
  sessionStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, token);
};
