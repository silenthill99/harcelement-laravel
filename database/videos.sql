-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 16 nov. 2025 à 10:30
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
-- Structure de la table `videos`
--

CREATE TABLE `videos` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `videos`
--

INSERT INTO `videos` (`id`, `title`, `link`, `created_at`, `updated_at`) VALUES
(1, 'DANS NOS YEUX- Court métrage', 'https://www.youtube.com/watch?v=5Nxjwau7aEY', '2025-06-13 09:16:11', '2025-06-15 14:54:00'),
(2, 'Le jour de trop', 'https://www.youtube.com/watch?v=UE6ZlMc4X48', '2025-06-13 09:29:23', '2025-06-13 09:29:23'),
(3, 'AGIS! Court-métrage contre le harcèlement', 'https://www.youtube.com/watch?v=QcV-r8FpnyU', '2025-06-13 10:00:06', '2025-06-13 10:00:06'),
(4, 'Un jeu soi-disant marrant', 'https://www.youtube.com/watch?v=vpbe_Aoihjk', '2025-06-13 11:18:45', '2025-06-13 11:18:45'),
(5, 'RESTER DEBOUT', 'https://www.youtube.com/watch?v=PYLMLcVMXrQ', '2025-06-13 11:32:43', '2025-06-13 11:32:43'),
(6, 'PUZZLE - COURT-MÉTRAGE 2021', 'https://www.youtube.com/watch?v=LZNuM_AMNQc', '2025-06-13 11:43:34', '2025-06-13 11:43:34'),
(7, 'GRAVE ! (Harcèlement scolaire)', 'https://www.youtube.com/watch?v=6FMoiGghce4', '2025-06-13 11:48:40', '2025-06-13 11:48:40'),
(8, 'Option AIS - Couleur alcool', 'https://www.youtube.com/watch?v=UCLHuEYHlBA', '2025-06-13 11:51:46', '2025-06-13 11:51:46'),
(9, 'SAVONNETTE - Court Métrage Harcèlement Scolaire', 'https://www.youtube.com/watch?v=NekbISTowB0', '2025-06-13 11:56:53', '2025-06-13 11:56:53'),
(10, 'Film sur le harcelement scolaire - Lisa', 'https://www.youtube.com/watch?v=sQhBRcNxayw', '2025-06-13 12:04:21', '2025-06-13 12:04:21'),
(11, 'HARCÈLEMENT Court-métrage film complet', 'https://www.youtube.com/watch?v=4mx8KIU0xyY', '2025-06-13 12:16:32', '2025-06-13 12:16:32'),
(12, 'Parle. - Court-métrage sur le harcèlement scolaire', 'https://www.youtube.com/watch?v=rcJf-tgknsY', '2025-06-13 12:20:38', '2025-06-13 12:20:38'),
(13, 'Même pas en rêve ! Lycée Ernest Ferroul - Non au Harcèlement', 'https://www.youtube.com/watch?v=lq_rIomTOoA', '2025-06-13 12:21:52', '2025-06-13 12:21:52'),
(14, 'Court métrage \"L\'indifférence tue\" prix \"Non au harcèlement\"', 'https://www.youtube.com/watch?v=AjCKSGUy148', '2025-06-13 12:23:14', '2025-06-13 12:23:14'),
(15, 'Silence toxique. Harcèlement scolaire.', 'https://www.youtube.com/watch?v=HwORszEu3ig', '2025-06-13 13:37:23', '2025-06-13 13:37:23'),
(16, 'Une Nouvelle Chance - Harcèlement scolaire', 'https://www.youtube.com/watch?v=k5aaghD6hKA', '2025-06-13 13:39:01', '2025-06-13 13:39:01'),
(17, 'PRIX COUP DE CŒUR : Non au harcèlement CM2 Leroy Rostand', 'https://www.youtube.com/watch?v=ZiW08jC4P5s', '2025-06-13 13:46:22', '2025-06-13 13:46:22'),
(18, 'briser le silence', 'https://www.youtube.com/watch?v=gX--7YGl-iE', '2025-06-13 13:48:41', '2025-06-13 13:48:41'),
(19, 'Et si ça s\'arrêtait', 'https://www.youtube.com/watch?v=Bg9FR4IrQwk', '2025-06-13 14:01:11', '2025-06-13 14:01:11'),
(20, 'Le Cercle, court métrage sur le harcèlement | Ville de Mulhouse', 'https://www.youtube.com/watch?v=JT3odVY4CmU', '2025-06-13 14:23:29', '2025-06-13 14:23:29'),
(21, 'CAUCHEMARS.', 'https://www.youtube.com/watch?v=7Cs5ggjnSrk', '2025-06-13 14:25:17', '2025-06-13 14:25:17'),
(22, 'Pourquoi t\'as fait ça !?', 'https://www.youtube.com/watch?v=eKhJEGYC30U', '2025-06-13 14:26:02', '2025-06-13 14:26:02'),
(23, 'C\'est envoyé', 'https://www.youtube.com/watch?v=WoJtIQ2B1lU', '2025-06-13 14:27:47', '2025-06-13 14:27:47'),
(24, 'Et si c\'était moi - prévention racket', 'https://www.youtube.com/watch?v=GRSxeC8F9wI', '2025-06-13 14:29:04', '2025-06-13 14:29:04'),
(25, 'L\'école du silence', 'https://www.youtube.com/watch?v=p6-_PkQx4Yg', '2025-06-13 14:29:46', '2025-06-13 14:29:46'),
(26, 'Courage', 'https://www.youtube.com/watch?v=1q9CUZWGrcY', '2025-06-13 14:30:18', '2025-06-13 14:30:18'),
(27, 'HARCÈLEMENT SCOLAIRE : Film dénonciateur', 'https://www.youtube.com/watch?v=9lsbivUrTac', '2025-06-13 14:32:03', '2025-06-13 14:32:03'),
(28, 'Rédemption', 'https://www.youtube.com/watch?v=Au481-cDMNw', '2025-06-13 14:33:02', '2025-06-13 14:33:02'),
(29, 'A bout de souffle', 'https://www.youtube.com/watch?v=uMSzJej4MI8', '2025-06-13 14:33:55', '2025-06-13 14:33:55'),
(30, 'Ca va aller, le film', 'https://www.youtube.com/watch?v=hWr0-zjoHVI', '2025-06-13 14:34:41', '2025-06-13 14:34:41'),
(31, 'Lucas', 'https://www.youtube.com/watch?v=LUfgp9U97Io', '2025-06-15 12:08:12', '2025-06-15 12:08:12');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
