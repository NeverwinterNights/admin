import React, { memo } from "react";
import s from "./payments-tables.module.scss";
import {
  Column,
  Sort,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/table";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useTranslation } from "@/hooks";
import { GetPaymentsQuery } from "@/queries/payments.generated";
import { Avatar } from "@/components";

type Props = {
  payments: GetPaymentsQuery;
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
};

export const PaymentsTables = memo(({ payments, sort, setSort }: Props) => {
  const { push } = useRouter();
  const { t } = useTranslation();
  const headers: Column[] = [
    { title: t.userList.username, key: "userName", sortable: true },
    { title: t.userList.dateAdded, key: "createdAt", sortable: true },
    { title: t.user.amount, key: "2", sortable: false },
    { title: t.payments.subscription, key: "type", sortable: true },
    { title: t.payments.paymentMethod, key: "paymentMethod", sortable: true },
  ];
  // const { sort, setSort } = useGetUsersListData(t);

  const value = {
    MONTHLY: t.payments.monthly,
    DAY: t.payments.day,
    WEEKLY: t.payments.weekly,
  };

  return (
    <Table className={s.table}>
      <TableHeader onSort={setSort} sort={sort} columns={headers} />
      <TableBody>
        {payments.getPayments.items.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>
                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  <Avatar size={36} photo={item.avatars?.[0]?.url || ""} />
                  {item.userName}
                </div>
              </TableCell>
              <TableCell>
                <div className={s.tableCell}>
                  {format(new Date(item.createdAt), "dd.MM.yyyy")}
                </div>
              </TableCell>
              <TableCell className={s.tableCell}>{item.amount}</TableCell>
              <TableCell className={s.tableCell}>{value[item.type]}</TableCell>
              <TableCell className={s.tableCell}>
                {item.paymentMethod === "STRIPE" ? "Stripe" : "PayPal"}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
});
