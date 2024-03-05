import React, { useEffect } from "react";
import {
  BanModal,
  HeaderUsersList,
  Loader,
  Modal,
  Pagination,
} from "@/components";
import {
  useDebounce,
  useGetUsersListData,
  useGetUsersModalHandler,
  useGetUsersPaginationData,
  useTranslation,
} from "@/hooks";
import { useGetUsersQuery } from "@/queries/users.generated";
import { SortDirection, UserBlockStatus } from "@/types";
import {
  useBanUserMutation,
  useRemoveUserMutation,
  useUnbanUserMutation,
} from "@/queries/auth.generated";
import { BanFormValues } from "@/schemas/ban-modal-schema";
import { DeleteUserModal } from "@/components/users-list/delete-user-modal";
import { UserListTables } from "@/components/users-list/user-list-tables";
import { Option } from "@/components/ui/select";
import s from "./users-list.module.scss";
import { BanModalData } from "@/hooks/use-get-users-modal-handler";

export const UsersList = () => {
  const { t } = useTranslation();

  const selectOptions: Option[] = [
    { label: t.userList.all, value: UserBlockStatus.All },
    {
      label: t.userList.blocked,
      value: UserBlockStatus.Blocked,
    },
    {
      label: t.userList.notBlocked,
      value: UserBlockStatus.Unblocked,
    },
  ];
  const {
    searchTerm,
    search,
    selectValue,
    sort,
    setSearchTerm,
    setSelectValue,
    setSearch,
    setSort,
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

  const debouncedValue = useDebounce<string>(search, 800);

  console.log("value");
  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  const { data, loading, refetch } = useGetUsersQuery({
    variables: {
      pageNumber: page,
      pageSize: +perPage,
      searchTerm,
      sortBy: sort?.key,
      sortDirection: sort?.direction as SortDirection,
      statusFilter: selectValue,
    },
  });

  const [banUser, { loading: loadingBanUser }] = useBanUserMutation();
  const [unBanUser, { loading: loadingUnBanUser }] = useUnbanUserMutation();
  const [deleteUser, { loading: loadingDeleteUser }] = useRemoveUserMutation();

  const banUserHandler = async (data: BanFormValues) => {
    await banUser({
      variables: {
        banReason: data.reason,
        userId: +activeModalData.id,
      },
    });
    setIsModalOpen(false);
    refetch();
    setActiveModalData({} as BanModalData);
  };
  const onclickModalHandler = () => {
    return activeModalData.ban ? unBanUserHandler : banUserHandler;
  };
  const unBanUserHandler = async () => {
    await unBanUser({
      variables: {
        userId: +activeModalData.id,
      },
    });
    setIsModalOpen(false);
    refetch();
    setActiveModalData({} as BanModalData);
  };
  const deleteUserHandler = async () => {
    await deleteUser({
      variables: {
        userId: +activeModalData.id,
      },
    });
    setIsModalDeleteOpen(false);
    setActiveModalData({} as BanModalData);
  };
  const banOpenModalHandler = (name: string, id: number, ban?: boolean) => {
    setActiveModalData({ name, id: id.toString(), ban });
    setIsModalOpen(true);
  };

  const deleteOpenModalHandler = (name: string, id: number) => {
    setActiveModalData({ name, id: id.toString() });
    setIsModalDeleteOpen(true);
  };

  if (loading || loadingBanUser || loadingDeleteUser) {
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
          onClick={onclickModalHandler()}
          banned={!!activeModalData.ban}
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
          setSelectValue={setSelectValue}
        />
        {loading ? (
          <Loader />
        ) : (
          <>
            <UserListTables
              sort={sort}
              setSort={setSort}
              banOpenModalHandler={banOpenModalHandler}
              users={data?.getUsers.users ? data.getUsers.users : []}
              deleteOpenModalHandler={deleteOpenModalHandler}
            />
            <div className={s.pagination}>
              {data?.getUsers.pagination.totalCount! >= +perPage && (
                <Pagination
                  perPage={perPage}
                  count={Math.ceil(
                    data?.getUsers.pagination.totalCount! / +perPage,
                  )}
                  page={page}
                  onPerPageChange={setPerPage}
                  perPageOptions={[5, 10, 12, 100]}
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
