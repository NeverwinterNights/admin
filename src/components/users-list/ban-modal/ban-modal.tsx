import React from "react";
import { Button, ControlledSelect, Typography } from "@/components";
import { useTranslation } from "@/hooks";
import s from "./ban-modal.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BanFormValues, banModalSchema } from "@/schemas/ban-modal-schema";
import { Trans } from "@/components/trans";

type Props = {
  name: string;
  onClick: (data: BanFormValues) => void;
  onCancelClick: () => void;
};

export const BanModal = ({ name, onClick, onCancelClick }: Props) => {
  const { t } = useTranslation();
  const selectOptions = [
    { label: t.banModal.bad, value: t.banModal.bad },
    { label: t.banModal.advertising, value: t.banModal.advertising },
    { label: t.banModal.another, value: t.banModal.another },
  ];

  const { handleSubmit, control } = useForm<BanFormValues>({
    mode: "onChange",
    resolver: zodResolver(banModalSchema(t)),
    defaultValues: { reason: "" },
  });

  const onSubmit = async (data: BanFormValues) => {
    console.log("onSubmit");
    try {
      await onClick(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.text} variant="regular_text_16" as="span">
        <Trans
          text={t.userList.areYouBanUser(name)}
          tags={{
            "1": (name) => (
              <Typography variant="bold_text_16" color="inherit" as="span">
                {name}
              </Typography>
            ),
          }}
        />
      </Typography>
      <ControlledSelect
        className={s.select}
        name={"reason"}
        control={control}
        options={selectOptions}
        placeholder={t.banModal.reasonForBan}
      />
      <div className={s.btnFooter}>
        <Button onClick={onCancelClick} className={s.btn} variant={"primary"}>
          {t.no}
        </Button>
        <Button type={"submit"} className={s.btn} variant={"ghost"}>
          {t.ok}
        </Button>
      </div>
    </form>
  );
};