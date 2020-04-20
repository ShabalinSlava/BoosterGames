
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import s from "./Aside.module.css";
import { Layout, Menu,} from 'antd';
import { DollarOutlined, OrderedListOutlined, SolutionOutlined } from '@ant-design/icons';
const {Sider } = Layout;
const { SubMenu } = Menu;

const Aside = (props) => {
  return (
    <Menu className={s.aside} mode="inline">
      <Menu.Item className={s.aside__item}>
        <DollarOutlined />
        Balance
      </Menu.Item>
      <SubMenu className={s.aside__item} title={
          <span className={s.aside__item_padding}>
            <OrderedListOutlined />
            <span>Orders</span>
          </span>
        }>
        <Menu.Item>Orders1</Menu.Item>
        <Menu.Item>Orders2</Menu.Item>
        <Menu.Item>Orders3</Menu.Item>
      </SubMenu>
      <Menu.Item className={s.aside__item}>
        <SolutionOutlined />
        My info
      </Menu.Item>
    </Menu>

  );
}
export default Aside;
