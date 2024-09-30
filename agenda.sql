-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 30-Set-2024 às 19:30
-- Versão do servidor: 5.7.40
-- versão do PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `agenda`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

DROP TABLE IF EXISTS `contato`;
CREATE TABLE IF NOT EXISTS `contato` (
  `n_id_contato` int(11) NOT NULL AUTO_INCREMENT,
  `s_nome_contato` varchar(255) NOT NULL,
  `s_celular_contato` varchar(255) NOT NULL,
  `s_email_contato` varchar(255) NOT NULL,
  `dt_dtnasc_contato` varchar(255) NOT NULL,
  PRIMARY KEY (`n_id_contato`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`n_id_contato`, `s_nome_contato`, `s_celular_contato`, `s_email_contato`, `dt_dtnasc_contato`) VALUES
(15, 'Kauan Cloudy', '7165434686', 'redesonocuscuz@gmail.com', '20-02-2005'),
(14, 'Kaique Tsimitakis', '11915434167', 'kaique@kaique.com', '20-10-2002'),
(16, 'Marquin Reis', '1194661315', 'musicafotocs@bahia.com', '15-11-2002');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
