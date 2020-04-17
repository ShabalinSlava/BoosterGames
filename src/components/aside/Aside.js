
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import s from "./Aside.module.css";
import { Layout, Menu,} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const {Sider } = Layout;
const { SubMenu } = Menu;

const Aside = (props) => {
    return (
      <Layout className={s.aside}>
          <Menu style={{height:'100%', background: '#006D75'}} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <span className={s.aside__item}>Balance</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span className={s.aside__item}>Orders</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="2">
              <DesktopOutlined />
              <span className={s.aside__item}>My info</span>
            </Menu.Item>
          </Menu>
      </Layout>
    );
}
export default Aside;
