import React from "react";
import {Pagination } from 'antd';
import s from "./Pagination.module.css";
const PaginationBlock = (props) => {
  return (
    <div className={s.pagination}>
        <Pagination total={50} showSizeChanger={true} />
    </div>
  )
}

export default PaginationBlock;
