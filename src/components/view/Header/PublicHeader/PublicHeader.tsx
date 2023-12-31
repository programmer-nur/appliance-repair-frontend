'use client'

import React, {  useState } from "react";
import { Drawer, Button, Menu, Layout, Space, Dropdown, Avatar, MenuProps } from "antd";
import { MenuOutlined,UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import logo from '@/assets/pro_logo.png';
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
const { Header } = Layout;

const PublicHeader =  ({session}:{session:boolean}) => {
  
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const handelSignOut = ()=>{
    signOut()
    router.push('/')
  }
  const onClose = () => {
    setOpen(false);
  };

  const publicItems = [
    {
      key: "1",
      label: "Home",
      href: "/",
    },
    {
      key: "2",
      label: "All Service",
      href: "/all-services",
    },

  ];

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/my-profile">My Profile</Link>,
    },
    {
      key: "2",
      label: <Link href="/my-bookings">My Booking</Link>,
    },
    {
      key: "3",
      label: <Button type="primary" className="text-white m-0" block danger onClick={()=>handelSignOut()}>Log Out</Button>,
    },
  ];
  return (
    <Header className="flex sticky opacity-100 top-0 z-50 justify-between shadow-lg items-center bg-white">
      
    <div className="flex justify-center items-center">
      <Link className="flex justify-center items-center" href="/">
        <Image width={100} height={50} src={logo} alt="logo"/>
      </Link>
    </div>
    <Menu
      className="md:flex bg-transparent bg-none justify-center items-center text-black hidden"
      disabledOverflow
      theme="dark"
      mode="horizontal"
    >
      {publicItems?.map((item) => (
        <Menu.Item
          className="bg-none  text-black bg-transparent font-medium leading-6 mx-3"
          key={item.href}
        >
          <Link className=" bg-none bg-transparent bg-opacity-0  listing" href={item.href}>
            {item.label}
          </Link>
        </Menu.Item>
      ))}

      {session ? (
        
          <div style={{display:'flex' , justifyContent:'center', gap:"5px"}}>
          <Dropdown menu={ {items} }>
            <a>
              <Space size={28}>
                <Avatar shape="circle" icon={<UserOutlined />} size="large" />
              </Space>
            </a>
          </Dropdown>
          </div>
       
      ) : (
        <Button
          size="large"
          className="bg-primary font-poppins font-medium text-white border-none"
          onClick={() => {
            router.push("/login");
          }}
        >
          Sign In
        </Button>
      )}
    </Menu>

    <div className=" block md:hidden">
      <Button
        className=" block bg-primary md:hidden"
        type="primary"
        onClick={showDrawer}
      >
        <MenuOutlined />
      </Button>
      <Drawer placement="right" title="Menubar" onClose={onClose} open={open}>
        <Menu
          theme="light"
          mode="vertical"
          selectedKeys={[pathname]}
          style={{ borderRight: 0 }}
        >
           <Menu.Item>
              <Link href='/'>Home</Link>
            </Menu.Item>
           <Menu.Item>
              <Link href='/all-services'>All Services</Link>
            </Menu.Item>
            {
              session ?
             <>
              <Menu.Item>
              <Link href='/my-profile'>My Profile</Link>
            </Menu.Item>
              <Menu.Item>
              <Link href='/my-bookings'>My Bookings</Link>
            </Menu.Item>
            <Button type="primary" className="text-white m-0" block danger onClick={()=>handelSignOut()}>Log Out</Button>
             </>
            :
            <Button
            size="large"
            block
            className="bg-primary mt-5 font-poppins font-medium text-white border-none"
            onClick={() => {
              router.push("/login");
            }}
          >
            Sign In
          </Button>
            }
        </Menu>
      </Drawer>
    </div>
  </Header>
  );
};
export default PublicHeader;
