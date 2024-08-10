'use client'
import React from 'react';
import { BellOutlined, NotificationFilled, SearchOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Badge, Flex, Input, Layout, Menu, Space, theme } from 'antd';
import Search from 'antd/es/transfer/search';
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

const page = () => {
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
      <Layout className='h-screen'>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className='bg-[#252B3B]'
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 8,
              

              background: '#252B3B',

            }}
          >
            <Flex justify='space-between' align='center'>
            <Input placeholder="large size" size="large" style={{background:'#252B3B',color:'white'}} className='border border-gray-500 rounded-sm  placeholder:text-white max-w-sm'  prefix={<SearchOutlined />} />

            <Space>
            <Flex justify='space-between' align='center' className='px-4' gap={20}>
            <Badge count={6} >
            <BellOutlined style={{color:"white",fontSize:30}} />
            </Badge>
            <UserOutlined className='border p-1 rounded-full'  style={{color:"white",fontSize:30}}/>
            </Flex>
            </Space>
            </Flex>
          </Header>
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              content
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };

export default page;