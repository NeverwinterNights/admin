import React, { Dispatch, memo, SetStateAction } from "react";
import { DebounceInput, Select } from "@/components";
import { useTranslation } from "@/hooks";
import s from "./header-users-list.module.scss";
import { Option } from "@/components/ui/select";
import { UserBlockStatus } from "@/types";

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
  selectOptions: Option[];
  search: string;
  // selectValue: string;
  setSelectValue: Dispatch<SetStateAction<UserBlockStatus>>;
};

export const HeaderUsersList = memo(
  ({
    selectOptions,
    // selectValue,
    setSelectValue,
    search,
    setSearch,
  }: Props) => {
    const { t } = useTranslation();

    const handleClearSearch = () => {
      setSearch("");
    };

    return (
      <div className={s.header}>
        <DebounceInput
          onValueChange={setSearch}
          searchValue={search}
          onClickClearInput={handleClearSearch}
        />
        <Select
          className={s.sel}
          options={selectOptions}
          // value={selectValue}
          onChange={setSelectValue}
          placeholder={t.userList.notSelected}
        />
      </div>
    );
  },
);
