import React , { useCallback, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
  useQuery,
} from '@apollo/client';
import WriterListContainer from './pages/WriterListContainer/WriterListContainer';
import BookListContainer from './pages/BookListContainer/BookListContainer';
import { Layout, Button, Space } from 'antd';
import './App.css';
import Home from './pages/Home/Home';
import initCache from './appolo/cache';

const { Header, Footer } = Layout;
const WriterListPage = WriterListContainer();
const BookListPage = BookListContainer();
const HomePage = Home();

function App() {
  const [client, setClient] = useState();

  useEffect(() => {
    async function init() {
      const cache = await initCache();
      const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: cache,
      });
      setClient(client);
    }

    init().catch(console.error);
  }, []);

  if (!client) {
    return <h2>Initializing app...</h2>;
  }

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
