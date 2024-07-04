CREATE DATABASE tech_interview;
USE tech_interview;

CREATE TABLE Posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(255),
  title VARCHAR(255),
  description TEXT,
  date DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Posts (category, title, description) VALUES
('Database', 'DB 트랜잭션', 'Understanding linked lists and their operations.'),
('Database', 'INDEX', 'LIFO data structure and its uses.'),
('Database', '반정규화', 'FIFO data structure and its uses.'),
('Database', '정규화', 'Introduction to tree data structures.'),
('Database', 'SQL vs NoSQL', 'Basics of graph theory and applications.'),
('DataStructures', 'Arrays', 'Introduction to arrays.'),
('DataStructures', 'Linked Lists', 'Understanding linked lists.'),
('OperatingSystems', 'Processes', 'Basics of process management.'),
('OperatingSystems', 'Memory Management', 'Understanding memory management.');
