import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import s from "./MyInfo.module.css";
import UserInfo from './userInfo/UserInfo';
import FormBlock from './formBlock/FormBlock';
const MyInfo = (props) => {
  return (
    <div>
      <div className={s.info}>
        <h2 className={s.info__title}>my info</h2>
      </div>
      <UserInfo />
      <FormBlock />
    </div>
  )
}

export default MyInfo;
