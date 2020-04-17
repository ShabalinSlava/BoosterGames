import React from "react";
import { Button} from 'antd';
import s from "./Balance.module.css";
const Balance = (props) => {
  let myBalance = props.state.balance;
  return (
    <div className={s.balance}>
      <h2>my balance</h2>
      <span>${myBalance}</span>
      <Button type="primary">
        Make up deposit
      </Button>
    </div>
  )
}
export default Balance;
