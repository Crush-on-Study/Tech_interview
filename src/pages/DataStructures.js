import React, { useEffect } from 'react';
import './Table.css';

const DataStructures = ({ setMaxId }) => {
  const data = [
    { id: 6, title: 'Graph', description: 'Basic Graph operations and concepts.', date: '2024-07-01' },
    { id: 5, title: 'Linked List', description: 'Understanding linked lists and their operations.', date: '2024-07-01' },
    { id: 4, title: 'Array와 Heap', description: 'LIFO data structure and its uses.', date: '2024-07-01' },
    { id: 3, title: '스택과 큐', description: 'FIFO data structure and its uses.', date: '2024-07-01' },
    { id: 2, title: 'Map,Set', description: 'Introduction to tree data structures.', date: '2024-07-01' },
    { id: 1, title: '해시테이블', description: 'Basics of graph theory and applications.', date: '2024-07-01' },
  ];

  useEffect(() => {
    if (data.length > 0) {
      setMaxId('DataStructures', data[0].id);
    }
  }, [setMaxId, data]);

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="content">
      <h2>Data Structures</h2>
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

export default DataStructures;
