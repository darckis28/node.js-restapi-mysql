CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY(id));

DESCRIBE employee;
INSERT INTO employee VALUES 
(1,'Andi',1000),
(2,'Henry',2000),
(3,'Dayana',5000),
(4,'Jhoan',2500)
SELECT  * FROM employee WHERE id = 5;
DELETE FROM employee WHERE id = 2;
UPDATE employee SET name = Gorge, salary = 5000 WHERE id = 5;