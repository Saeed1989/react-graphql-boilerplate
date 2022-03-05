import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
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
