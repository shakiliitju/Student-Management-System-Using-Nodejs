-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 29, 2022 at 01:08 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iit-ju`
--

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
CREATE TABLE IF NOT EXISTS `result` (
  `id` int(11) NOT NULL,
  `semester` varchar(225) NOT NULL,
  `cgpa` varchar(225) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `semester`, `cgpa`) VALUES
(2023, '2nd', '3.18'),
(2013, '2nd', '3.86'),
(2024, '2nd', '3.80'),
(2023, '3th', '3.80'),
(2023, '4th', '3.18'),
(2013, '1th', '3.76'),
(2023, '1th', '3.53'),
(2013, '3th', '3.80'),
(1964, '1th', '3.80'),
(1964, '2nd', '3.96'),
(1964, '3th', '3.80'),
(1976, '1th', '3.70'),
(1976, '2nd', '3.80'),
(1976, '3th', '3.00'),
(1986, '1th', '3.60'),
(1986, '2nd', '3.20');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `batch` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `department` varchar(225) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `batch`, `gender`, `department`, `phone`, `email`, `status`) VALUES
(1964, 'Zarin Sabah Teresa', '48', 'Female', 'IIT', '01728947556', 'zarin@gmail.com', 'active'),
(1976, 'Sabrina Siddiki Adity', '48', 'Female', 'IIT', '0937140978', 'admin@gmail.com', 'active'),
(1986, 'Mst.sumiya siddika', '47', 'Female', 'CSE', '018746132645', 'admin@gmail.com', 'active'),
(2013, 'Md. Shakil Ahmed', '48', 'Male', 'IIT', '01728947556', 'shakiljusc15@gmail.com', 'active'),
(2023, 'Md. Shakil Hossain', '48', 'Male', 'IIT', '01796963444', 'hossain.stu2018@juniv.edu', 'active'),
(2024, 'Mahbubur Rahman', '48', 'Male', 'IIT', '01796963444', 'mahbub@gmail.com', 'active'),
(2028, 'Nahidul Islam', '48', 'Male', 'IIT', '01728947556', 'nahidrabby2001@gmail.com', 'active'),
(2029, 'A.H.M Sakif Shale', '47', 'Male', 'CSE', '01134735432', 'admin@gmail.com', 'active'),
(2033, 'Md. Rashedul Islam', '47', 'Male', 'CSE', '02492576524', 'admin@gmail.com', 'active');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
