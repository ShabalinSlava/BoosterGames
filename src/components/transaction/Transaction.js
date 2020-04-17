import React from "react";
import Balance from './balance/Balance';
import TableBlock from './table/TableBlock'
import { Row, Col } from 'antd';
const Transaction = (props) => {
  return (
    <>
    <Row>
      <Col span={24}>
        <Balance state={props.state}/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <TableBlock/>
      </Col>
    </Row>
      </>
  )
}
export default Transaction;
