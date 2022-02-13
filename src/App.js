import React from 'react';
import BookList from './components/BookList';
import WriterList from './components/WriterList';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <h1>Book List:</h1>
        <BookList />
      </div>
      <div>
        <h1>Writer List:</h1>
        <WriterList />
      </div>
    </div>
  );
}

export default App;
