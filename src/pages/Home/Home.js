import React from 'react';
import { List } from 'antd';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const Home = () => {
  // const { loading, error, data } = useQuery(BOOK_TITLES);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <div>
      <List>
        <List.Item>
          <Link to="/writers">WRITERS</Link>
        </List.Item>
        <List.Item>
          <Link to="/books">BOOKS</Link>
        </List.Item>
      </List>
    </div>
  );
};

export default Home;
