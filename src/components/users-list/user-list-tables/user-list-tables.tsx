import React, { memo } from "react";
import s from "./user-list-tables.module.scss";
import {
  Column,
  Sort,
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
import { useRouter } from "next/router";
import { User } from "@/types";
import { useTranslation } from "@/hooks";

type Props = {
  users: Omit<User, "profile" | "email">[];
  banOpenModalHandler: (name: string, id: number, ban?: boolean) => void;
  deleteOpenModalHandler: (name: string, id: number) => void;
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
};

export const UserListTables = memo(
  ({
    users,
    banOpenModalHandler,
    deleteOpenModalHandler,
    setSort,
    sort,
  }: Props) => {
    const { push } = useRouter();
    const { t } = useTranslation();
    const headers: Column[] = [
      { title: t.userList.userID, key: "0", sortable: false },
      { title: t.userList.username, key: "userName", sortable: true },
      { title: t.userList.profileLink, key: "2", sortable: false },
      { title: t.userList.dateAdded, key: "createdAt", sortable: true },
      { title: "", key: "4" },
    ];

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
                    href={`${process.env.NEXT_PUBLIC_LINK}/profile?id=${item.id}`}
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
                      ban={item.userBan}
                      handleBanMode={() =>
                        banOpenModalHandler(
                          item.userName,
                          item.id,
                          !!item.userBan,
                        )
                      }
                      handleOpenMoreMode={() =>
                        push(`${PATH.USER}/?id=${item.id}`)
                      }
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
