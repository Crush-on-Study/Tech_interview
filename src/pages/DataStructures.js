import React, { useEffect, useState } from 'react';
import './Table.css';

const DataStructures = ({ setMaxId }) => {
  const data = [
    { id: 6, title: 'Graph', description: 'Basic Graph operations and concepts.', content: 'Detailed content about Graph.', date: '2024-07-01' },
    { id: 5, title: 'Linked List', description: 'Understanding linked lists and their operations.', content: 'Detailed content about Linked List.', date: '2024-07-01' },
    { id: 4, title: 'Array와 Heap', description: 'LIFO data structure and its uses.', content: 'Detailed content about Array and Heap.', date: '2024-07-01' },
    { id: 3, title: '스택과 큐', description: 'FIFO data structure and its uses.', content: 'Detailed content about Stack and Queue.', date: '2024-07-01' },
    { id: 2, title: 'Map,Set', description: 'Introduction to tree data structures.', content: 'Detailed content about Map and Set.', date: '2024-07-01' },
    { id: 1, title: '해시테이블', description: 'Basics of graph theory and applications.', content: 'Detailed content about Hash Table.', date: '2024-07-01' },
  ];

  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    if (data.length > 0) {
      setMaxId('DataStructures', data.length);
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

export default DataStructures;
