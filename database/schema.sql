-- Create the database
CREATE DATABASE IF NOT EXISTS smart_anganwadi;
USE smart_anganwadi;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role ENUM('worker', 'supervisor', 'children', 'admin') NOT NULL,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  descriptor TEXT
);

-- Ration Distribution Table
CREATE TABLE IF NOT EXISTS ration_distribution (
  id INT AUTO_INCREMENT PRIMARY KEY,
  centre_id INT NOT NULL,
  children_present INT NOT NULL,
  ration_distributed INT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Supervisor Reports Table
CREATE TABLE IF NOT EXISTS supervisor_reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  supervisor_id INT NOT NULL,
  centre_id INT NOT NULL,
  report TEXT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Data (Optional)
INSERT INTO users (name, role, descriptor) VALUES
('John Doe', 'worker', '[0.12, 0.34, 0.56]'),
('Jane Doe', 'supervisor', '[0.23, 0.45, 0.67]');

INSERT INTO ration_distribution (centre_id, children_present, ration_distributed) VALUES
(1, 50, 50),
(1, 60, 60);

INSERT INTO supervisor_reports (supervisor_id, centre_id, report) VALUES
(1, 1, 'Ration distribution completed successfully.');



-- ALTER TABLE users
-- ADD COLUMN username VARCHAR(255) UNIQUE,
-- ADD COLUMN password VARCHAR(255);


INSERT INTO users (name, role, username, password) VALUES
('Admin User', 'admin', 'admin', 'admin123');

INSERT INTO users (name, role, username, password) VALUES
('Worker User', 'worker', 'worker', 'worker123'),
('Children User', 'children', 'children', 'children123');


-- ALTER TABLE users
-- ADD COLUMN username VARCHAR(255) UNIQUE,
-- ADD COLUMN password VARCHAR(255);

-- INSERT INTO users (name, role, username, password) VALUES
-- ('Admin User', 'admin', 'admin', 'admin123');