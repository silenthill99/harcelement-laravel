-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 19 août 2025 à 17:24
-- Version du serveur : 8.0.35-0ubuntu0.22.04.1
-- Version de PHP : 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `harcelement`
--

-- --------------------------------------------------------

--
-- Structure de la table `clips`
--

CREATE TABLE `clips` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `clips`
--

INSERT INTO `clips` (`id`, `title`, `link`, `created_at`, `updated_at`) VALUES
(1, 'Indochine - College boy', 'https://www.youtube.com/watch?v=Rp5U5mdARgY', '2025-08-18 10:01:51', '2025-08-18 10:01:51'),
(2, 'Maelle - L\'effet de masse', 'https://www.youtube.com/watch?v=6zUxsrJqg14', '2025-08-18 15:29:51', '2025-08-18 15:29:51'),
(3, 'Keen\'V - Petite émilie', 'https://www.youtube.com/watch?v=9JaVW9u-zrE', '2025-08-18 15:31:20', '2025-08-18 15:31:20'),
(4, 'Soprano - Fragile', 'https://www.youtube.com/watch?v=zgBEVbDzuu4', '2025-08-19 17:21:15', '2025-08-19 17:21:15');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clips`
--
ALTER TABLE `clips`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clips`
--
ALTER TABLE `clips`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
