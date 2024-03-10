import * as DropdownRadixMenu from "@radix-ui/react-dropdown-menu";

import { BanIcon, DeleteIcon, DotsIcon, UnBanIcon } from "@/assets/icons";
import { Typography } from "@/components";
import { useTranslation } from "@/hooks";

import s from "./action-options.module.scss";
import { Maybe, UserBan } from "@/types";

type PropsType = {
  handleBanMode: () => void;
  handleDeleteMode: () => void;
  handleOpenMoreMode: () => void;
  ban: undefined | Maybe<UserBan>;
};

export const ActionOptions = ({
  handleBanMode,
  handleDeleteMode,
  handleOpenMoreMode,
  ban,
}: PropsType) => {
  const { t } = useTranslation();

  return (
    <>
      <DropdownRadixMenu.Item className={s.item} onClick={handleDeleteMode}>
        {/* todo вынести  DropdownRadixMenu.Item в компоненту*/}
        <DeleteIcon />
        <Typography variant="regular_text_14">{t.dropdown.delete}</Typography>
      </DropdownRadixMenu.Item>
      {ban ? (
        <DropdownRadixMenu.Item className={s.item} onClick={handleBanMode}>
          <UnBanIcon />
          <Typography variant="regular_text_14">{t.dropdown.unBan}</Typography>
        </DropdownRadixMenu.Item>
      ) : (
        <DropdownRadixMenu.Item className={s.item} onClick={handleBanMode}>
          <BanIcon />
          <Typography variant="regular_text_14">{t.dropdown.ban}</Typography>
        </DropdownRadixMenu.Item>
      )}
      <DropdownRadixMenu.Item className={s.item} onClick={handleOpenMoreMode}>
        <DotsIcon />
        <Typography variant="regular_text_14">{t.dropdown.more}</Typography>
      </DropdownRadixMenu.Item>
    </>
  );
};
