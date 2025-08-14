CREATE TABLE `users` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`username` varchar(255),
	`password` text NOT NULL,
	`role` enum('admin','applicant','employer') DEFAULT 'applicant',
	`avatar_url` text,
	`email` varchar(255) NOT NULL,
	`email_verified_at` timestamp,
	`phone_number` varchar(255),
	`deleted_at` timestamp,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_username_unique` UNIQUE(`username`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
