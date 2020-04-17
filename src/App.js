import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import Transaction from './components/transaction/Transaction';
import Aside from './components/aside/Aside';
import { Row, Col,} from 'antd';

const App = (props) => {
  return (
    <div className="App">
      <Row>
        <Col span={4}>
          <Aside />
        </Col>
        <Col span={20}>
          <Transaction state={props.state} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
