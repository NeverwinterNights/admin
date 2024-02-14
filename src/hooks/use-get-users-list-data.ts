import { useState } from "react";
import { Sort } from "@/components/table";
import { LocaleType } from "locales/ru";

export const useGetUsersListData = (t: LocaleType) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [selectValue, setSelectValue] = useState("");
  const [sort, setSort] = useState<Sort>({
    direction: "desc",
    key: t.userList.dateAdded,
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
