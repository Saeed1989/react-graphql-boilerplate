import React from 'react';
import { Typography, Row, Col } from 'antd';
import BookList from './components/BookList';
import WriterList from './components/WriterList';
import './App.css';

const { Title } = Typography;

function App() {
  return (
    <Row>
      <Col>
        <Title level={2}>Book List:</Title>
        <BookList />
      </Col>
      <Col>
        <Title level={2}>Writer List:</Title>
        <WriterList />
      </Col>
    </Row>
  );
}

export default App;
