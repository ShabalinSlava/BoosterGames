import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import s from "./UserInfo.module.css";
import { Upload, message, } from 'antd';
const name = 'Avatar'
const UserInfo = (props) => {
  return (
    <div className={s.user}>
      <div>здесь будет фото</div>
      <div className={s.user__wrap}>
        <h3 className={s.user__name}>{name}</h3>
        <span className={s.user__data}>jpg or png with size 750x750 pixel, less 2 MB.</span>
        <Upload {...props} showUploadList={true}>
          <span className={s.user__download}>
             Download New
          </span>
        </Upload>
      </div>
    </div>
  )
}

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default UserInfo
