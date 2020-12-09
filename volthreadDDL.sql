DROP DATABASE IF EXISTS volthread;

CREATE DATABASE volthread;

Use volthread;

CREATE TABLE volthread.Employes
(EmployesID INT NOT NULL AUTO_INCREMENT,
EmployesNo INT NULL,
EmployesName VARCHAR(50) NULL, 
EmployesEmail VARCHAR(50) NULL, 
EmployesCounty VARCHAR(50) NULL,
EmployesSalary INT NULL,
PRIMARY KEY(EmployesID)
);
