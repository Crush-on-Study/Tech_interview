import React, { useState,useEffect } from 'react';
import './Table.css';

const OperatingSystems = ({ setMaxId }) => {
  const data = [
    { id: 3, title: 'DeadLock', description: 'Basic concepts of Operating Systems.', date: '2024-07-01' },
    { id: 2, title: 'CPU 스케줄링', description: 'Understanding process management.', date: '2024-07-01' },
    { id: 1, title: '프로세스와 스레드', description: 'Memory management techniques.', date: '2024-07-01' },
  ];

  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    if (data.length > 0) {
      setMaxId('OperatingSystems', data.length);
    }
  }, [setMaxId, data]);

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleRowClick = (post) => {
    setSelectedPost(post);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {currentPosts.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
              <td>{item.id}</td>
              <td className="clickable">{item.title}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(sortedData.length / postsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      {selectedPost && (
        <div className="post-content">
          <h3>{selectedPost.title}</h3>
          <div className="content-scroll">
            <p>{selectedPost.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}


export default OperatingSystems;
