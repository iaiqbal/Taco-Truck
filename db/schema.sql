CREATE DATABASE tacos_db;
USE tacos_db;


CREATE TABLE tacos
(
    id INT NOT NULL AUTO_INCREMENT,
    taco_name VARCHAR(50) NOT NULL,
    shell VARCHAR(10) NOT NULL,
    vegetarian BOOLEAN DEFAULT false,
    picked_up BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);