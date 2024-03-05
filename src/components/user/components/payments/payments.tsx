import React, { useState } from "react";
import { useGetPaymentsByUserQuery } from "@/queries/payments.generated";
import { useRouter } from "next/router";
import s from "./payments.module.scss";
import {
  Column,
  Sort,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/table";
import { useTranslation } from "@/hooks";
import { format } from "date-fns";
import { Pagination } from "@/components";

export const Payments = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState("10");
  const { query } = useRouter();
  const { t } = useTranslation();

  const { data: payments } = useGetPaymentsByUserQuery({
    variables: {
      userId: +query.id!,
    },
  });

  const headers: Column[] = [
    { title: t.user.dateOfPayment, key: "0", sortable: false },
    { title: t.user.endDateOfSubscription, key: "1", sortable: true },
    { title: t.user.amount, key: "2", sortable: false },
    { title: t.user.subscriptionType, key: "3", sortable: true },
    { title: t.user.paymentType, key: "4", sortable: true },
  ];
  const [sort, setSort] = useState<Sort>({
    direction: "desc",
    key: t.user.endDateOfSubscription,
  });
  const subscriptionDuration: { [key: number]: number } = {
    10: 1,
    50: 7,
    100: 30,
  };

  return (
    <>
      <Table className={s.table}>
        <TableHeader onSort={setSort} sort={sort} columns={headers} />
        <TableBody>
          {payments?.getPaymentsByUser?.items.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell className={s.cell}>
                  <div>
                    {format(new Date(item.dateOfPayment), "dd.MM.yyyy")}
                  </div>
                </TableCell>
                <TableCell className={s.cell}>
                  <div>{format(new Date(item.endDate), "dd.MM.yyyy")}</div>
                </TableCell>
                <TableCell className={s.cell}>
                  <div>${`${item.price}`}</div>
                </TableCell>
                <TableCell className={s.cell}>
                  <div>{`${subscriptionDuration[item.price]} day`}</div>
                </TableCell>
                <TableCell className={s.cell}>
                  <div>{item.paymentType}</div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {payments?.getPaymentsByUser?.totalCount! > 0 && (
        <Pagination
          perPage={perPage}
          count={Math.ceil(payments?.getPaymentsByUser?.totalCount! / +perPage)}
          page={page}
          onPerPageChange={setPerPage}
          perPageOptions={[5, 8, 12, 100]}
          onChange={setPage}
        />
      )}
    </>
  );
};
