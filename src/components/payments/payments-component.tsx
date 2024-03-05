import React, { useEffect, useState } from "react";
import s from "./payments-component.module.scss";
import { Checkbox, DebounceInput, Loader, Pagination } from "@/components";
import { useDebounce, useTranslation } from "@/hooks";
import { PaymentsTables } from "@/components/payments/payments-table.tsx";
import { useGetPaymentsQuery } from "@/queries/payments.generated";
import { Sort } from "@/components/table";
import { SortDirection } from "@/types";

export const PaymentsComponent = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState("10");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState<Sort>({
    direction: "desc",
    key: "createdAt",
  });

  const onChange = (value: boolean) => {
    setChecked(value);
  };

  const { data, loading } = useGetPaymentsQuery({
    variables: {
      pageNumber: page,
      pageSize: +perPage,
      sortBy: sort?.key,
      searchTerm,
      sortDirection: sort?.direction as SortDirection,
    },
  });

  const debouncedValue = useDebounce<string>(search, 800);

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  const handleClearSearch = () => {
    setSearch("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={s.root}>
      <div className={s.checkbox}>
        <Checkbox
          label={t.payments.autoupdate}
          checked={checked}
          onChange={onChange}
        />
      </div>
      <DebounceInput
        className={s.input}
        onValueChange={setSearch}
        searchValue={search}
        onClickClearInput={handleClearSearch}
      />
      <PaymentsTables sort={sort} setSort={setSort} payments={data!} />
      <div className={s.pagination}>
        {data?.getPayments.totalCount! >= +perPage && (
          <Pagination
            perPage={perPage}
            count={Math.ceil(data?.getPayments.totalCount! / +perPage)}
            page={page}
            onPerPageChange={setPerPage}
            perPageOptions={[5, 10, 12, 100]}
            onChange={setPage}
          />
        )}
      </div>
    </div>
  );
};
