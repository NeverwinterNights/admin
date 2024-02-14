import { getHeaderLayout, HeadMeta } from "@/components";
import s from "./user.module.scss";
import { UserComponent } from "@/components/user";

const User = () => {
  return (
    <main className={s.root}>
      <HeadMeta title="UserComponent" />
      <UserComponent />
    </main>
  );
};

User.getLayout = getHeaderLayout;
export default User;
