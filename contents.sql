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
('DataStructures', '트리와 그래프', 'DFS&BFS 그래도 원리는 알고쓰자!'),
('DataStructures', '연결리스트', '헤더와 테일을 통한 꼬리잡기 놀이'),
('DataStructures', '배열과 리스트', '네? 같은거 아니냐구요?....'),
('DataStructures', '스택과 큐', '가장 기본적이지만 어디에 쓰이는 걸까?'),
('DataStructures', 'Map & Set', '정렬과 중복제거의 유무'),
('DataStructures', '해시테이블', 'Python 딕셔너리는 어떤 원리일까?'),
('Language', 'Java의 특징', 'OOP의 4가지 특징에 대하여'),
('Language', 'JS의 특징', '프론트 개발자 필수 유형'),
('Networks', 'TCP/IP 통신', '기초 중의 기초!'),
('Networks', 'HTTP와 웹소켓', '실시간성을 위해 어떤걸 써야할까?'),
('Networks', 'L4 & L7 로드밸런싱', '트래픽 처리를 위한 분산 자동화'),
('DataStructures', '해시테이블', 'Python 딕셔너리는 어떤 원리일까?'),
('DataStructures', '해시테이블', 'Python 딕셔너리는 어떤 원리일까?'),
('DataStructures', '해시테이블', 'Python 딕셔너리는 어떤 원리일까?'),
('OperatingSystems', 'DeadLock', '어이 웨이터, 온더락 한잔.'),
('OperatingSystems', 'CPU 스케줄링', 'Basics of process management.'),
('OperatingSystems', '프로세스와 스레드', 'Understanding 프로세스와 스레드.');
