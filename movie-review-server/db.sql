DROP DATABASE IF EXISTS movies_review_db;
CREATE DATABASE movies_review_db;
use movies_review_db;

CREATE TABLE users(user_id INT PRIMARY KEY AUTO_INCREMENT ,first_name VARCHAR(30) NOT NULL ,last_name VARCHAR(30) NOT NULL ,email VARCHAR(30) UNIQUE ,password VARCHAR(150) NOT NULL, mobile VARCHAR(10) NOT NULL, birth DATE );


CREATE TABLE reviews(
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT NOT NULL,
    review VARCHAR(100),
    rating INT NOT NULL,
    user_id INT,
    modified DATETIME default CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE movies (
    movie_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    release_date DATE
);

CREATE TABLE  shares(review_id INT, user_id INT ,FOREIGN KEY (user_id) REFERENCES users(user_id),FOREIGN KEY (review_id) REFERENCES reviews(review_id));