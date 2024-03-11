import { User } from "@/types";
import { LocaleType } from "locales/ru";

export const filteredData = (
  data: User[],
  selectValue: string,
  t: LocaleType,
) => {
  if (selectValue === "" || selectValue === t.userList.all) {
    return data;
  }

  if (selectValue === t.userList.blocked) {
    return data.filter(
      (user) => user.userBan !== undefined && user.userBan !== null,
    );
  }
  if (selectValue === t.userList.notBlocked) {
    return data.filter(
      (user) => user.userBan === undefined || user.userBan === null,
    );
  }
};
