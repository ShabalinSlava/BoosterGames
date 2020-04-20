import React from "react";
import Balance from './balance/Balance';
import TableBlock from './table/TableBlock';
import PaginationBlock from './pagination/PaginationBlock';
import { Row, Col} from 'antd';
const Transaction = (props) => {
  return (
    <>
    <Row>
      <Col span={24}>
        <Balance/>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <TableBlock/>
      </Col>
    </Row>
    <Row justify="end">
      <Col span={24}>
        <PaginationBlock/>
      </Col>
    </Row>
      </>
  )
}
export default Transaction;
