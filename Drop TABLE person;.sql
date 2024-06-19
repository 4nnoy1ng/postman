CREATE TABLE person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(255),
    LastName VARCHAR(255)
);

INSERT INTO person (FirstName, LastName) VALUES
('Riedmann', 'Andreas'),
('Türtscher', 'Daniel'),
('Türtscher', 'Elias'),
('Ehe', 'Immanuel'),
('Jonas', 'Nigg');

CREATE TABLE UserTable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    User VARCHAR(255),
    UserPassword VARCHAR(255)
);

INSERT INTO UserTable (User, UserPassword) VALUES
('Daniel', '12345'),
('Rangel', '678910');

SELECT * FROM person
SELECT * FROM UserTable

Delete From person where id = 5; 

Drop TABLE person;



