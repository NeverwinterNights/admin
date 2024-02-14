import React, { memo } from "react";
import s from "./user-list-tables.module.scss";
import {
  Column,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/table";
import { BanIcon } from "@/assets/icons";
import { ActionOptions, DropdownMenu, Typography } from "@/components";
import { format } from "date-fns";
import { PATH } from "@/consts/route-paths";
import { LocaleType } from "locales/ru";
import { useRouter } from "next/router";
import { User } from "@/types";
import { useGetUsersListData, useTranslation } from "@/hooks";

type Props = {
  users: Omit<User, "profile" | "email">[];
  banOpenModalHandler: (name: string, id: number) => void;
  deleteOpenModalHandler: (name: string, id: number) => void;
};

export const UserListTables = memo(
  ({ users, banOpenModalHandler, deleteOpenModalHandler }: Props) => {
    const { push } = useRouter();
    const { t } = useTranslation();
    const headers: Column[] = [
      { title: t.userList.userID, key: "0", sortable: false },
      { title: t.userList.username, key: "1", sortable: true },
      { title: t.userList.profileLink, key: "2", sortable: false },
      { title: t.userList.dateAdded, key: "3", sortable: true },
      { title: "", key: "4" },
    ];
    const { sort, setSort } = useGetUsersListData(t);

    console.log("value");

    return (
      <Table className={s.table}>
        <TableHeader onSort={setSort} sort={sort} columns={headers} />
        <TableBody>
          {users?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>
                  <div className={s.banedId}>
                    {item.userBan && <BanIcon />}
                    <div
                      style={{
                        position: "relative",
                        left: item.userBan ? 0 : "36px",
                      }}
                    >
                      {item.id}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>{item.userName}</div>
                </TableCell>
                <TableCell>
                  <Typography
                    className={s.link}
                    as="a"
                    href={`${process.env.NEXT_PUBLIC_LINK}${item.id}`}
                    variant="regular_link"
                  >
                    {item.userName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <div>{format(new Date(item.createdAt), "dd.MM.yyyy")}</div>
                </TableCell>
                <TableCell>
                  <DropdownMenu className={s.dropdown} sideOffset={-5}>
                    <ActionOptions
                      handleBanMode={() =>
                        banOpenModalHandler(item.userName, item.id)
                      }
                      handleOpenMoreMode={() => push(PATH.USER)}
                      handleDeleteMode={() =>
                        deleteOpenModalHandler(item.userName, item.id)
                      }
                    />
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  },
);
