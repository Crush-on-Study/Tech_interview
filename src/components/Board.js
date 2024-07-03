import React, { useState } from 'react';
import Chart from './Chart';
import './Board.css';

const categories = [
  { name: 'Data Structures', posts: [] },
  { name: 'DB', posts: [] },
  { name: 'Algorithms', posts: [] },
  { name: 'Networking', posts: [] },
  { name: 'Operating Systems', posts: [] },
  { name: 'Object-Oriented Programming', posts: [] },
  { name: 'Software Engineering', posts: [] },
  { name: 'SW Test', posts: [] },
  { name: 'Web', posts: [] },
  { name: 'Random Questions Defense!', posts: [] },
];

const Board = () => {
  const [boards, setBoards] = useState(categories);

  return (
    <div className="board-container">
      <Chart data={boards} />
      {boards.map((category, index) => (
        <div key={index} className="board">
          <h3>{category.name}</h3>
          <p>Posts: {category.posts.length}</p>
          {/* Add posts list or form to add posts here */}
        </div>
      ))}
    </div>
  );
}

export default Board;
