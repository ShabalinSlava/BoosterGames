import React from "react";
import { Button} from 'antd';
import s from "./Balance.module.css";
import { Statistic } from 'antd';
import { DollarOutlined} from '@ant-design/icons';
const Balance = (props) => {
  return (
    <div className={s.balance}>
      <h2 className={s.balance__title}>my balance</h2>
      <Statistic valueStyle={{fontSize:'34px', color:'#fff', margin: '0px 20px'}} title='' value={708.83} prefix={<DollarOutlined />} precision={2} />
      <Button className={s.balance__button} type="primary">
        Make up deposit
      </Button>
    </div>
  )
}
export default Balance;
