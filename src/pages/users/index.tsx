import { getMainLayout, HeadMeta, UsersList } from "@/components";
import s from "./users.module.scss";

const Users = () => {
  return (
    <div className={s.root}>
      <HeadMeta title="Users-list" />
      <main>
        <UsersList />
      </main>
    </div>
  );
};

Users.getLayout = getMainLayout;
export default Users;
