CREATE SCHEMA `spotifyapp` ;

CREATE TABLE Tickets (
    iTicketId int,
	bIsUsed boolean
);

INSERT INTO spotifyapp.tickets VALUES (1, false), (2, false), (3, false), (4, false), (5, false), (6, false), (7, false), (8, false), (9, false), (10, true)