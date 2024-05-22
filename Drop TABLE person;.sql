Drop TABLE person;

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

SELECT * FROM person

Delete From person where id = 5; 




