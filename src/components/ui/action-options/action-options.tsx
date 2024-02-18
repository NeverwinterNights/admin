import * as DropdownRadixMenu from "@radix-ui/react-dropdown-menu";

import { BanIcon, DeleteIcon, DotsIcon } from "@/assets/icons";
import { Typography } from "@/components";
import { useTranslation } from "@/hooks";

import s from "./action-options.module.scss";

type PropsType = {
  handleBanMode: () => void;
  handleDeleteMode: () => void;
  handleOpenMoreMode: () => void;
};

export const ActionOptions = ({
  handleBanMode,
  handleDeleteMode,
  handleOpenMoreMode,
}: PropsType) => {
  const { t } = useTranslation();

  return (
    <>
      <DropdownRadixMenu.Item className={s.item} onClick={handleDeleteMode}>
        <DeleteIcon />
        <Typography variant="regular_text_14">{t.dropdown.delete}</Typography>
      </DropdownRadixMenu.Item>
      <DropdownRadixMenu.Item className={s.item} onClick={handleBanMode}>
        <BanIcon />
        <Typography variant="regular_text_14">{t.dropdown.ban}</Typography>
      </DropdownRadixMenu.Item>
      <DropdownRadixMenu.Item className={s.item} onClick={handleOpenMoreMode}>
        <DotsIcon />
        <Typography variant="regular_text_14">{t.dropdown.more}</Typography>
      </DropdownRadixMenu.Item>
    </>
  );
};
