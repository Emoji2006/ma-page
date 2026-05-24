DROP DATABASE IF EXISTS quiz_db;
CREATE DATABASE quiz_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE quiz_db;

CREATE TABLE statut_partie (
    id INT PRIMARY KEY,
    question_actuelle INT NOT NULL DEFAULT -1,
    etape VARCHAR(20) NOT NULL DEFAULT 'attente'
) ENGINE=InnoDB;

INSERT INTO statut_partie (id, question_actuelle, etape) VALUES (1, -1, 'attente');

CREATE TABLE scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(50) NOT NULL UNIQUE,
    score INT NOT NULL DEFAULT 0,
    questions_jouees INT NOT NULL DEFAULT 0,
    derniere_question_repondue INT NOT NULL DEFAULT -1,
    actif INT NOT NULL DEFAULT 1
) ENGINE=InnoDB;