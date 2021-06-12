-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 12, 2021 at 02:34 PM
-- Server version: 8.0.23-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donations_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `donors_tbl`
--

CREATE TABLE `donors_tbl` (
  `id` int UNSIGNED NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `street_address` text NOT NULL,
  `city` varchar(255) NOT NULL,
  `state_region` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `postal_code` varchar(16) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `preferred_contact` varchar(16) NOT NULL,
  `preferred_payment` varchar(255) NOT NULL,
  `donation_frequency` varchar(16) NOT NULL,
  `donation_amount` decimal(20,4) NOT NULL,
  `comments` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `donors_tbl`
--

INSERT INTO `donors_tbl` (`id`, `first_name`, `last_name`, `street_address`, `city`, `state_region`, `country`, `postal_code`, `phone_number`, `email`, `preferred_contact`, `preferred_payment`, `donation_frequency`, `donation_amount`, `comments`) VALUES
(1, 'loise', 'mwai', 'kanairo', 'nairobi', 'ruiru', 'Kenya', '00100', '12345', 'loise@gmail.com', 'Phone', 'USD', 'Monthly', '12.0000', 'sdfa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donors_tbl`
--
ALTER TABLE `donors_tbl`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donors_tbl`
--
ALTER TABLE `donors_tbl`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
