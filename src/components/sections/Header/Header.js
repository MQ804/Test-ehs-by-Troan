"use client";

import React from "react";
import { Layout, theme } from "antd";
import {
    Avatar,
    Breadcrumbs,
    AccountMenu,
} from "@/components";
import { Divider } from "antd";
const { Header: HeaderComponent } = Layout;

export default function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <HeaderComponent
      className=""
      style={{
        padding: 0,
        background: colorBgContainer,
      }}>
      <div className="mx-4 flex items-center ">
        <div className="mr-auto ">
          <Breadcrumbs />
        </div>
        <Avatar />
        <div>
          <Divider type="vertical" className="bg-gray-300 h-[25px]" />
        </div>
        <AccountMenu />
      </div>
    </HeaderComponent>
  );
}
