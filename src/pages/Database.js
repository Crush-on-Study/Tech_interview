import React, { useEffect } from 'react';
import './Table.css';

const Database = ({ setMaxId }) => {
  const data = [
    { id: 5, title: 'DB 트랜잭션', description: 'Understanding linked lists and their operations.', date: '2024-07-02' },
    { id: 4, title: 'INDEX', description: 'LIFO data structure and its uses.', date: '2024-07-02' },
    { id: 3, title: '반정규화', description: 'FIFO data structure and its uses.', date: '2024-07-02' },
    { id: 2, title: '정규화', description: 'Introduction to tree data structures.', date: '2024-07-02' },
    { id: 1, title: 'SQL vs NoSQL', description: 'Basics of graph theory and applications.', date: '2024-07-02' },
  ];

  useEffect(() => {
    if (data.length > 0) {
      setMaxId('Database', data[0].id);
    }
  }, [setMaxId, data]);

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="content">
      <h2>Data base</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Database;
