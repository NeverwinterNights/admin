import { useState } from "react";

export const useGetUsersPaginationData = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState("10");

  return { page, setPage, perPage, setPerPage };
};
