import React, { memo } from "react";
import { useGetPostsByUserQuery } from "@/queries/posts.generated";
import { useRouter } from "next/router";
import Image from "next/image";
import s from "./uploaded-photos.module.scss";

export const UploadedPhotos = memo(() => {
  const { query, back } = useRouter();
  const { data: posts } = useGetPostsByUserQuery({
    variables: {
      userId: +query.id!,
    },
  });

  return (
    <div className={s.root}>
      {posts?.getPostsByUser.items?.map((post) => (
        <Image
          width={234}
          height={228}
          key={post.id}
          src={post.url!}
          alt={"post image"}
        />
      ))}
    </div>
  );
});
