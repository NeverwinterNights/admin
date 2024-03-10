import React, { memo, useState } from "react";
import Image from "next/image";
import { Avatar, Typography } from "@/components";
import { useTimeAgo, useTranslation } from "@/hooks";
import defaultPostImage from "@/assets/images/post-image.png";
import Slider from "react-slick";

import ShowMoreText from "react-show-more-text";
import empty from "@/assets/images/empty.gif";
import s from "./post-item.module.scss";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Block } from "@/assets/icons";
import { getSliderSettings } from "@/helpers";
import { Post } from "@/types";

export type PostImageType = {
  url: string;
  width: number;
  height: number;
  fileSize: number;
  uploadId: string;
};

type Props = {
  post: Omit<
    Post,
    "updatedAt" | "location" | "userName" | "avatarOwner" | "owner"
  >;
};
export const PostItem = memo(({ post }: Props) => {
  const settings = getSliderSettings(s.dots);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();
  const { push } = useRouter();

  const collapsedTextHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  const postClickHandler = () => {
    push(`${process.env.NEXT_PUBLIC_LINK}/profile?id=${post.postOwner.id}`);
  };

  return (
    <div className={s.root}>
      {post.images!.length === 0 ? (
        <div onClick={postClickHandler}>
          <Image
            src={defaultPostImage}
            className={`${s.image} ${isCollapsed ? s.imageCollapsed : ""}`}
            width={234}
            height={240}
            alt="Post image"
          />
        </div>
      ) : (
        <div>
          <Slider {...settings}>
            {/*{filterImagesOnly1440(post.images as any).map(*/}
            {post.images?.map((image) => {
              return (
                <div
                  className={s.item}
                  key={image.id}
                  onClick={postClickHandler}
                >
                  <Image
                    src={image.url ? image.url : empty}
                    className={`${s.image} ${isCollapsed ? s.imageCollapsed : ""}`}
                    width={234}
                    height={240}
                    alt="Post image"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      )}
      <div className={s.header}>
        <Avatar size={36} photo={post.postOwner.avatars?.[0]?.url || ""} />
        <div className={s.footerInfo}>
          <Typography variant="h3">{post.postOwner.userName}</Typography>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          {true && <Block />}
        </div>
      </div>
      <Typography color="secondary" className={s.status} variant="small_text">
        {useTimeAgo(post.createdAt)}
      </Typography>
      <div className={s.desc}>
        <ShowMoreText
          lines={2}
          more={t.showMore}
          less={t.hide}
          className={`${s.rootDesc} ${isCollapsed ? s.scrolled : ""}`}
          anchorClass={s.anchor}
          onClick={collapsedTextHandler}
          expanded={false}
          width={0}
        >
          {post.description}
        </ShowMoreText>
      </div>
    </div>
  );
});
