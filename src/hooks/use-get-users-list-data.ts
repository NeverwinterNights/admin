import { useState } from "react";
import { Sort } from "@/components/table";
import { LocaleType } from "locales/ru";
import { UserBlockStatus } from "@/types";

export const useGetUsersListData = (t: LocaleType) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [selectValue, setSelectValue] = useState<UserBlockStatus>(
    UserBlockStatus.All,
  );
  const [sort, setSort] = useState<Sort>({
    direction: "desc",
    key: "createdAt",
  });

  return {
    searchTerm,
    setSearchTerm,
    search,
    setSearch,
    selectValue,
    setSelectValue,
    sort,
    setSort,
  };
};
