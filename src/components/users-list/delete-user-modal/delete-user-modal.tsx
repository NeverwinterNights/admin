import React from "react";
import { Button, Typography } from "@/components";
import { useTranslation } from "@/hooks";
import s from "./delete-user-modal.module.scss";
import { BanFormValues } from "@/schemas/ban-modal-schema";
import { Trans } from "@/components/trans";

type Props = {
  name: string;
  onClick: (data: BanFormValues) => void;
  onCancelClick: () => void;
};

export const DeleteUserModal = ({ name, onClick, onCancelClick }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography className={s.text} variant="regular_text_16" as="span">
        <Trans
          text={t.userList.areYouBanUser(name)}
          tags={{
            "1": (name) => (
              <Typography variant="bold_text_16" color="inherit" as="span">
                {name}?
              </Typography>
            ),
          }}
        />
      </Typography>

      <div className={s.btnFooter}>
        <Button onClick={onCancelClick} className={s.btn} variant={"primary"}>
          {t.no}
        </Button>
        <Button type={"submit"} className={s.btn} variant={"ghost"}>
          {t.ok}
        </Button>
      </div>
    </>
  );
};
