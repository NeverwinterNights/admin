import React, { memo, useState } from "react";
import Image from "next/image";
import { Avatar, Typography } from "@/components";
import { useTimeAgo, useTranslation } from "@/hooks";
import defaultPostImage from "@/assets/images/post-image.png";
import { getSliderSettings } from "@/helpers";
import ShowMoreText from "react-show-more-text";
import empty from "@/assets/images/empty.gif";
import s from "./post-item.module.scss";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Block } from "@/assets/icons";
import Slider from "react-slick";

import a from "./test/img.png";
import x from "./test/img_1.png";

export type PostImageType = {
  url: string;
  width: number;
  height: number;
  fileSize: number;
  uploadId: string;
};

export type Post = {
  id: number;
  userName: string;
  description: string;
  location: string;
  images: PostImageType[];
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
  avatarOwner: string;
  owner: {
    firstName: string;
    lastName: string;
  };
};

type Props = {
  post: any;
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

  const arr = [
    {
      fileSize: 279216,
      height: 1440,
      id: 923,
      url: a,
      width: 1440,
    },
    {
      fileSize: 279216,
      height: 1440,
      id: 923,
      url: x,
      width: 1440,
    },
  ];

  return (
    <div className={s.root}>
      {post.images.length === 0 ? (
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
        <Slider {...settings}>
          {/*{filterImagesOnly1440(post.images).map((image: PostImageType) => {*/}
          {arr.map((image: any, index) => {
            return (
              <div
                className={s.item}
                key={index}
                // onClick={postClickHandler}
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
      )}
      <div className={s.header}>
        <Avatar size={36} photo={post.postOwner.avatars.url} />
        <div className={s.footerInfo}>
          {/*<Typography variant="h3">{`${post.owner.firstName} ${post.owner.lastName}`}</Typography>*/}
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
          // width={140}
          width={0}
        >
          {post.description}
        </ShowMoreText>
      </div>
    </div>
  );
});
