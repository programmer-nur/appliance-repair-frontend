"use client";

import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";
import { ReactNode } from "react";

const items = [
  {
    label: "My Profile",
    key: 1,
    href: "/my-profile",
  },
  {
    label: "My Booking",
    key: 2,
    href: "/my-bookings",
  }
];

const Sidebar = ({children}:{children:ReactNode}) => {
  return (
    <div className="px-8">
      <div className="text-secondary font-bold text-3xl font-poppins  py-10">
        DashBoard
      </div>
      <Layout hasSider>
        <Sider
          width={280}
          style={{
            height: "100vh",
            position: "sticky",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          className="bg-transparent md:block hidden bg-white"
        >
          <Menu
            className="bg-transparent h-full"
            defaultSelectedKeys={["1"]}
            mode="inline"
            >
              {items?.map((item) => (
            <Menu.Item className="rounded-none" key={item.href}>
              <Link className="hover:font-bold font-poppins hover:text-primary" href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
            </Menu>
        </Sider>
        <Content className=" bg-white">
         {children}
        </Content>
      </Layout>
    </div>
  );
};

export default Sidebar;
