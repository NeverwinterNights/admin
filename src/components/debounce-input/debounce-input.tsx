import { ChangeEvent } from "react";

import { useTranslation } from "@/hooks";
import { TextField } from "@/components";

type DebounceInputTypes = {
  onValueChange: (e: string) => void;
  searchValue: string;
  className?: string;
  disabled?: boolean;
  onClickClearInput?: () => void;
};

export const DebounceInput = ({
  onValueChange,
  searchValue,
  className,
  disabled,
  onClickClearInput,
}: DebounceInputTypes) => {
  const { t } = useTranslation();
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.currentTarget.value);
  };

  return (
    <>
      <TextField
        disabled={disabled}
        placeholder={t.userList.search}
        searchInput
        onChange={onChange}
        value={searchValue}
        className={className}
        onClickClearInput={onClickClearInput}
      />
    </>
  );
};
