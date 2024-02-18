import React, { useEffect } from "react";
import { BanModal, Loader, Modal, Pagination } from "@/components";
import {
  useDebounce,
  useGetUsersListData,
  useGetUsersModalHandler,
  useGetUsersPaginationData,
  useTranslation,
} from "@/hooks";
import { useGetUsersQuery } from "@/queries/users.generated";
import { SortDirection, User, UserBlockStatus } from "@/types";
import { useBanUserMutation } from "@/queries/auth.generated";
import { BanFormValues } from "@/schemas/ban-modal-schema";
import { DeleteUserModal } from "@/components/users-list/delete-user-modal";
import { filteredData } from "@/helpers";
import { UserListTables } from "@/components/users-list/user-list-tables";
import { HeaderUsersList } from "@/components/users-list/header";
import { Option } from "@/components/ui/select";
import s from "./users-list.module.scss";

export const UsersList = () => {
  const { t } = useTranslation();

  const selectOptions: Option[] = [
    { label: t.userList.all, value: t.userList.all },
    { label: t.userList.blocked, value: t.userList.blocked },
    { label: t.userList.notBlocked, value: t.userList.notBlocked },
  ];
  const {
    searchTerm,
    search,
    selectValue,
    sort,
    setSearchTerm,
    setSelectValue,
    setSearch,
  } = useGetUsersListData(t);
  const { page, setPage, perPage, setPerPage } = useGetUsersPaginationData();
  const {
    isModalOpen,
    setIsModalDeleteOpen,
    setActiveModalData,
    isModalDeleteOpen,
    setIsModalOpen,
    activeModalData,
  } = useGetUsersModalHandler();

  const debouncedValue = useDebounce<string>(search, 400);

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  const { data, loading } = useGetUsersQuery({
    variables: {
      pageNumber: page,
      pageSize: +perPage,
      searchTerm,
      sortBy: sort?.key,
      sortDirection: sort?.direction as SortDirection,
      statusFilter:
        selectValue === t.userList.blocked
          ? UserBlockStatus.Blocked
          : UserBlockStatus.All,
    },
  });

  const [banUser, { loading: loadingBanUser }] = useBanUserMutation();

  const banUserHandler = (data: BanFormValues) => {
    console.log("data", data);
  };

  const deleteUserHandler = (data: BanFormValues) => {
    console.log("data", data);
  };
  const banOpenModalHandler = (name: string, id: number) => {
    setActiveModalData({ name, id: id.toString() });
    setIsModalOpen(true);
  };

  const deleteOpenModalHandler = (name: string, id: number) => {
    setActiveModalData({ name, id: id.toString() });
    setIsModalDeleteOpen(true);
  };

  // const users = filteredData(data?.getUsers.users as User[], selectValue, t);

  if (loading || loadingBanUser) {
    return <Loader />;
  }

  return (
    <>
      <Modal
        title={t.userList.banUser}
        onOpenChange={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        className={s.banModal}
      >
        <BanModal
          onCancelClick={() => setIsModalOpen(false)}
          name={activeModalData.name}
          onClick={banUserHandler}
        />
      </Modal>
      <Modal
        title={t.deleteModal.deleteUser}
        onOpenChange={() => setIsModalDeleteOpen(false)}
        isOpen={isModalDeleteOpen}
        className={s.banModal}
      >
        <DeleteUserModal
          onCancelClick={() => setIsModalDeleteOpen(false)}
          name={activeModalData.name}
          onClick={deleteUserHandler}
        />
      </Modal>
      <div className={s.root}>
        <HeaderUsersList
          setSearch={setSearch}
          selectOptions={selectOptions}
          search={search}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
        {loading ? (
          <Loader />
        ) : (
          <>
            <UserListTables
              banOpenModalHandler={banOpenModalHandler}
              users={data?.getUsers.users ? data.getUsers.users : []}
              deleteOpenModalHandler={deleteOpenModalHandler}
            />
            <div className={s.pagination}>
              {data?.getUsers.users.length! >= +perPage && (
                <Pagination
                  perPage={perPage}
                  count={Math.ceil(
                    data?.getUsers.pagination.totalCount! / +perPage,
                  )}
                  page={page}
                  onPerPageChange={setPerPage}
                  perPageOptions={[5, 8, 12, 100]}
                  onChange={setPage}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
