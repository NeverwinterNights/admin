import { getMainLayout, HeadMeta, PostsComponent } from "@/components";
import s from "./posts.module.scss";

const Posts = () => {
  return (
    <div className={s.root}>
      <HeadMeta title="Posts" />
      <main>
        <PostsComponent />
      </main>
    </div>
  );
};

Posts.getLayout = getMainLayout;
export default Posts;
