import React from "react";
import { useTranslation } from "@/hooks";
import { ArrowBack } from "@/assets/icons";
import s from "./user-component.module.scss";
import { Button } from "@/components";

export const UserComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <Button variant={"link"} className={s.header}>
        <ArrowBack className={s.backIcon} />
        {t.user.backToUsersList}
      </Button>
    </div>
  );
};
