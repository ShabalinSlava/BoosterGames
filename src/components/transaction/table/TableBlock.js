import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, } from 'antd';

const columns = [
  {
    title: '#',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Date & Time',
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: 'Info',
    dataIndex: 'info',
    key: 'info',
  },
  {
    title: 'Type',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: 'Cash',
    dataIndex: 'cash',
    key: 'cash',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const data = [
  {
    key: '1',
    id: '23818',
    data: 'Apr 7, 2021 11:44',
    info: 'Buy in Fortnite the unique item, Golden Pickaxe',
    type: 'Buy',
    cash: 2.25,
    status: 'Done'
  },
  {
    key: '2',
    id: '23818',
    data: 'Oct 26, 2020 09:51',
    info: 'Buy in WOW BFA the unique item, Axe of ice King',
    type: 'Buy',
    cash: 65.00,
    status: 'Cansel'
  },
  {
    key: '3',
    id: '23816',
    data: 'Dec 27, 2019 14:46',
    info: 'Buy in Fortnite the unique user, Happy 8 ball',
    type: 'Buy',
    cash: 43.00,
    status: 'Done'
  },
];

const TableBlock = (props) => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default TableBlock;
