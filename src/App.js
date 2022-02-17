import React from 'react';
import { Route, BrowserRouter as Router, Routes, Redirect } from "react-router-dom";
import { Typography, Row, Col } from 'antd';
import WriterListContainer from './pages/WriterListContainer/WriterListContainer';
import BookListContainer from './pages/BookListContainer/BookListContainer';
import { Layout, Button, Space } from 'antd';
import './App.css';
import Home from './pages/Home/Home';

const { Header, Footer } = Layout;
const WriterListPage = WriterListContainer();
const BookListPage = BookListContainer();
const HomePage = Home();

function App() {
  return (
    <Layout>
      <Header>
        <Space>
          <div className="logo">
            <h1 className="header">React GraphQL Boilerplate with Apollo Client</h1>
          </div>
        </Space>
      </Header>
      <Router>
        <Routes>
          <Route exact path="/" element={HomePage} />
          <Route exact path="/writers" element={WriterListPage} />
          <Route exact path="/books" element={BookListPage} />
        </Routes>
      </Router>
      <Footer />
    </Layout>
  );
}

export default App;
