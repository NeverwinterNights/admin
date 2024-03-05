import { ReactNode, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Sidebar, Typography } from "@/components";

import { Payments, SearchIcon, TrendingUpOutline, User } from "@/assets/icons";
import { useTranslation } from "@/hooks";
import { PATH } from "@/consts/route-paths";
import s from "./sidebar-layaout.module.scss";

type SidebarLayoutProps = {
  className?: string;
  children?: ReactNode;
};

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const sidebarItems = [
    { href: PATH.USERS, icon: <User />, title: t.sidebars.users },
    {
      href: PATH.STATISTIC,
      icon: <TrendingUpOutline />,
      title: t.sidebars.statistics,
    },

    {
      href: PATH.PAYMENTS,
      icon: <Payments />,
      title: t.sidebars.payments,
    },
    { href: PATH.POSTS, icon: <SearchIcon />, title: t.sidebars.posts },
  ];

  return (
    <>
      <Sidebar>
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${s.item} ${router.pathname === item.href ? s.active : ""}`}
          >
            <>
              {item.icon}
              <Typography variant="bold_text_14" color="inherit">
                {item.title}
              </Typography>
            </>
          </Link>
        ))}
      </Sidebar>
      {children}
    </>
  );
};

export const getSidebarLayout = (page: ReactNode) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
