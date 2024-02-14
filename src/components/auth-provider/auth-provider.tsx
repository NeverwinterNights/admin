import React, { ReactNode, useEffect } from "react";

import { useRouter } from "next/router";

import { commonRoutes, PATH } from "@/consts/route-paths";
import { tokenGetterToSessionStorage } from "@/helpers";

type PropsType = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: PropsType) => {
  const router = useRouter();
  const user = tokenGetterToSessionStorage();

  const isProtectedPage = !commonRoutes.includes(router.pathname);

  useEffect(() => {
    if (!user && isProtectedPage) {
      router.push(PATH.LOGIN);

      return;
    }
  }, [user, isProtectedPage, router]);

  return <>{children}</>;
};
