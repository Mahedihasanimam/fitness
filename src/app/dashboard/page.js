"use client";

import React from "react";

import image1 from "../../../public/image/Fitness.png";
import {
  BellOutlined,
  CalendarOutlined,
  ClusterOutlined,
  ContactsOutlined,
  DashboardFilled,
  HomeOutlined,
  LoginOutlined,
  MessageOutlined,
  NotificationFilled,
  RiseOutlined,
  SearchOutlined,
  UploadOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Badge,
  ConfigProvider,
  Flex,
  Image,
  Input,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import { Progress } from "antd";
import Search from "antd/es/transfer/search";
import MyChart from "@/components/dashboard/MyChart";
import PiChart from "@/components/dashboard/PiChart";
import Acvity from "@/components/dashboard/Acvity";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const page = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="bg-[#252B3B]">
      <Layout
        className="h-full"
      >
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className="bg-[#252B3B]"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            className="mb-12 pt-6 text-lg space-y-2 capitalize mymenu "
            items={[
              {
                label: (
                  <label className="text-4xl font-bold text-[#E6533C] ">
                    Fitness
                  </label>
                ),
              },
              {
                label: "dashboard",
                icon: <DashboardFilled />,
                key: "/dashboard",
              },
              {
                label: "project",
                icon: <ContactsOutlined />,
                key: "/project",
              },
              {
                label: "contact",
                icon: <ContactsOutlined />,
                key: "/contact",
              },
              {
                label: "analysis",
                icon: <ClusterOutlined />,
                key: "/analysis",
              },
              {
                label: "calender",
                icon: <CalendarOutlined />,
                key: "/calender",
              },
              {
                label: "message",
                icon: <MessageOutlined />,
                key: "/message",
              },
            ]}
          />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            className=" pt-6 text-lg space-y-2 capitalize mt-[100%] "
            items={[
              {
                label: (
                  <label>
                    <Link href={"/"}>Home</Link>
                  </label>
                ),
                icon: <HomeOutlined />,
                key: "/",
              },
              {
                label: "Log out",
                icon: <LoginOutlined />,
                key: "/logout",
              },
            ]}
          />
        </Sider>
        <Layout>
          <div className="bg-[#252B3B]">
            <Header className="py-4">
              <Flex justify="space-between" align="center">
                <Input
                  style={{
                    background: "#252B3B",
                    color: "white",
                    "--placeholder-color": "white",
                  }}
                  placeholder="search"
                  size="large"
                  className="border border-gray-500 rounded-sm  placeholder:text-white max-w-sm"
                  prefix={<SearchOutlined />}
                />

                <Space>
                  <Flex
                    justify="space-between"
                    align="center"
                    className="px-4"
                    gap={20}
                  >
                    <Badge count={6}>
                      <BellOutlined className="cursor-pointer" style={{ color: "white", fontSize: 30 }} />
                    </Badge>
                    <UserOutlined
                      className="border p-1 rounded-full cursor-pointer"
                      style={{ color: "white", fontSize: 30 }}
                    />
                  </Flex>
                </Space>
              </Flex>
            </Header>
          </div>
          <Content
            style={{
              background: "#1E222E",
            }}
          >
            <div
              style={{
                background: "#1E222E",
                minHeight: 360,
                color: "white",
                padding: 20,
                borderRadius: borderRadiusLG,
              }}
            >
              <h1 className="text-4xl font-bold">Dashboard</h1>

              

              <div className="grid gap-4 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:space-y-0 md:space-y-4 space-y-6 my-6">
                <div className="bg-[#252B3B] text-white lg:max-w-xs md:max-w-xs w-10/12 mx-auto  flex items-center justify-around px-6 py-4 rounded-lg ">
                  <div>
                    <UsergroupAddOutlined
                      style={{ fontSize: 50 }}
                      className="bg-[#2f3649] p-2 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" font-bold text-lg">Total Clients</h3>
                    <h1 className="text-2xl font-bold">86</h1>
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-green-700">+0.9%</p>
                      <p className="text-gray-400">From previous</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#252B3B] text-white lg:max-w-xs md:max-w-xs w-10/12  mx-auto  flex items-center justify-around px-6 py-4 rounded-lg ">
                  <div>
                    <ConfigProvider
                      theme={{
                        "components": {
                          "Button": {
                            "defaultActiveColor": "rgb(148,93,226)",
                            "borderColorDisabled": "rgb(242,16,16)",
                            "dangerColor": "rgb(241,107,107)"
                          },
                          "Progress": {
                            "circleTextColor": "rgb(255,255,255)",
                            "defaultColor": "rgb(83,245,1)"
                          }
                        }
                      }}
                    >
                      <Progress
                        className="text-white"
                        size={80}
                        style={{
                          color: "white",
                        }}
                        strokeColor={"#61609A"}
                        type="circle"
                        percent={76}
                      />
                    </ConfigProvider>
                  </div>
                  <div>
                    <h3 className=" font-bold text-lg">Total TAsk Done</h3>
                    <h1 className="text-2xl font-bold">32</h1>
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-red-700">+0.02%</p>
                      <p className="text-gray-400">From previous</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252B3B] text-white lg:max-w-xs md:max-w-xs w-10/12 mx-auto   flex items-center justify-around px-6 py-4 rounded-lg ">
                  <div>
                    <RiseOutlined
                      style={{ fontSize: 50 }}
                      className="bg-[#2f3649] p-2  text-green-600 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" font-bold text-lg">New Projects</h3>
                    <h1 className="text-2xl font-bold">551</h1>
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-green-700">+0.5%</p>
                      <p className="text-gray-400">Then Month</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252B3B] text-white lg:max-w-xs md:max-w-xs w-10/12 mx-auto   flex items-center justify-around px-6 py-4 rounded-lg ">
                  <div>
                    <RiseOutlined
                      style={{ fontSize: 50 }}
                      className="bg-[#2f3649] p-2  text-green-600 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className=" font-bold text-lg">Online Visitors</h3>
                    <h1 className="text-2xl font-bold">26,920</h1>
                    <div className="flex items-center justify-between gap-6">
                      <p className="text-green-700">+3.5%</p>
                      <p className="text-gray-400">Then Month</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:flex md:flex flex-row items-center justify-between gap-8 ">
                <MyChart />
                <div>
                  <PiChart />
                  <Acvity />
                </div>
              </div>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
            className="bg-black text-white"
          >
            ©{new Date().getFullYear()} Created by Mehedi
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default page;
