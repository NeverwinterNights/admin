import React, { useCallback, useState } from "react";
import { useTranslation } from "@/hooks";
import { ArrowBack } from "@/assets/icons";
import s from "./user-component.module.scss";
import { Avatar, Button, Loader, Tabs, Typography } from "@/components";
import { useRouter } from "next/router";
import { useGetUserQuery } from "@/queries/users.generated";
import { Payments, UploadedPhotos } from "@/components/user/components";
import { format } from "date-fns";

export const UserComponent = () => {
  const { t } = useTranslation();

  const tabsData = [
    {
      label: t.user.uploadedPhotos,
      value: t.user.uploadedPhotos,
      disabled: false,
    },
    {
      label: t.user.payments,
      value: t.user.payments,
      disabled: false,
    },
    {
      label: t.user.followers,
      value: t.user.followers,
      disabled: false,
    },
    {
      label: t.user.following,
      value: t.user.following,
      disabled: false,
    },
  ];
  const { query, back } = useRouter();

  const { data, loading } = useGetUserQuery({
    variables: {
      userId: +query.id!,
    },
    skip: !query.id,
  });

  const [tabValue, setTabValue] = useState(tabsData[0].value);

  const getActivePage = useCallback(() => {
    if (tabValue === t.user.uploadedPhotos) {
      return <UploadedPhotos />;
    } else if (tabValue === t.user.payments) {
      return <Payments />;
    } else if (tabValue === t.user.followers) {
      return <div>Followers</div>;
    } else if (tabValue === t.user.following) {
      return <div>Following</div>;
    }
  }, [
    t.user.followers,
    t.user.following,
    t.user.payments,
    t.user.uploadedPhotos,
    tabValue,
  ]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={s.root}>
      <Button variant={"link"} onClick={() => back()} className={s.header}>
        <ArrowBack className={s.backIcon} />
        {t.user.backToUsersList}
      </Button>
      <div className={s.main}>
        <div className={s.mainInfo}>
          <Avatar
            size={60}
            photo={data?.getUser?.profile?.avatars?.[0]?.url!}
            className={s.image}
          />
          <div className={s.info}>
            <Typography variant={"h1"}>{data?.getUser.userName}</Typography>
            <Typography
              as="a"
              href={`${process.env.NEXT_PUBLIC_LINK}/profile?id=${data?.getUser.id}`}
              className={s.nickname}
              variant={"regular_text_14"}
            >
              {data?.getUser.userName}
            </Typography>
          </div>
        </div>
        <div className={s.data}>
          <div className={s.item}>
            <Typography className={s.dataSub} variant="regular_text_14">
              {t.user.userID}
            </Typography>
            <Typography variant="regular_text_16">
              {data?.getUser.id}
            </Typography>
          </div>
          <div className={s.item}>
            <Typography className={s.dataSub} variant="regular_text_14">
              {t.user.profileCreationDate}
            </Typography>
            <Typography variant="regular_text_16">
              {format(new Date(data?.getUser.createdAt), "dd.MM.yyyy")}
            </Typography>
          </div>
        </div>
      </div>
      <Tabs
        defaultValue={tabsData[0].value}
        className={s.tabs}
        tabs={tabsData}
        onValueChange={(value) => setTabValue(value)}
      />
      {getActivePage()}
    </div>
  );
};
