DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
  `id` int auto_increment primary key not null,
  `burger_name` varchar(60) not null,
  `devoured` boolean not null default 0,
  `date` timestamp default current_timestamp
);
