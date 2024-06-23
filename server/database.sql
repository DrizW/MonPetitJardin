CREATE TABLE `user` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(250) UNIQUE NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `admin` BOOLEAN DEFAULT FALSE
)

CREATE TABLE `realisation` (
    `id_realisation` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id_realisation`)
)

CREATE TABLE `realisation_image` (
    `id_image` INT NOT NULL AUTO_INCREMENT,
    `id_realisation` INT NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `image_status` TINYINT(1) DEFAULT 0,
    PRIMARY KEY (`id_image`),
    FOREIGN KEY (`id_realisation`) REFERENCES `realisation`(`id_realisation`)
    ON DELETE CASCADE
)

CREATE TABLE `contact` (
    `id_contact` INT NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `date_sent` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `sender_name` VARCHAR(250) NOT NULL,
    `sender_email` VARCHAR(250) NOT NULL,
    PRIMARY KEY (`id_contact`)
)
