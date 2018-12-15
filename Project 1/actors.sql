DROP TABLE IF EXISTS Actors;

CREATE TABLE Actors(name VARCHAR(40), movie VARCHAR(80), year INTEGER, role VARCHAR(40));

LOAD DATA LOCAL INFILE './actors.csv' INTO TABLE Actors FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"';

UPDATE Actors SET name  = REPLACE(name,'"','');

UPDATE Actors SET movie  = REPLACE(movie,'"','');

UPDATE Actors SET year  = REPLACE(year,'"','');

UPDATE Actors SET role  = REPLACE(role,'"','');

SELECT name FROM Actors WHERE movie = 'Die Another Day';

DROP TABLE Actors;