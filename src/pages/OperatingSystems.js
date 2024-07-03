import React, { useEffect } from 'react';
import './Table.css';

const OperatingSystems = ({ setMaxId }) => {
  const data = [
    { id: 3, title: 'DeadLock', description: 'Basic concepts of Operating Systems.', date: '2024-07-01' },
    { id: 2, title: 'CPU 스케줄링', description: 'Understanding process management.', date: '2024-07-01' },
    { id: 1, title: '프로세스와 스레드', description: 'Memory management techniques.', date: '2024-07-01' },
  ];

  useEffect(() => {
    if (data.length > 0) {
      setMaxId('OperatingSystems', data[0].id);
    }
  }, [setMaxId, data]);

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="content">
      <h2>Operating Systems</h2>
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

export default OperatingSystems;
