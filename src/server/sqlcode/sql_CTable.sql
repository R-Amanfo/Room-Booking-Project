-- CREATE TABLE users (
-- userId INTEGER NOT NULL,
-- firstName TEXT NOT NULL,
-- lastName TEXT NOT NULL,
-- username TEXT NOT NULL PRIMARY KEY,
-- email TEXT NOT NULL,
-- password TEXT NOT NULL
-- );

-- // Removed Not Null for initial test, to be able to just add email and username to table
-- // and to be able to partially add users with just email and username.

-- CREATE TABLE users (
-- userId INTEGER ,
-- firstName TEXT ,
-- lastName TEXT ,
-- username TEXT NOT NULL PRIMARY KEY,
-- email TEXT NOT NULL,
-- password TEXT
-- );


--  //Add users//

-- INSERT INTO users (userId,firstName,lastName,username,email,password) VALUES ( 1001,'Teddy','Tbear', 'Tbear23', 'kumar@draft.dev', '$2b$10$XccSsh0YszxUYbWWHQZZfeGH87YSE3pP7G4uF' );
-- INSERT INTO users (userId,firstName,lastName,username,email,password) VALUES ( 1002,'pauly','tomomo', 'Oberda3', 'wednesday@draft.dev', '$2b$tentenH87YSE3UYbWWHQZZfeGH87YSE3pP7G4uF' );
-- INSERT INTO users (userId,firstName,lastName,username,email,password) VALUES ( 1003,'Betty','bar', 'Bettyd3', 'tempomar@draft.dev', '$2b$10ZfeGH87YSE3UYbWWHQZZfeGH87YSE3pP7G4uF' );
-- INSERT INTO users (userId,firstName,lastName,username,email,password) VALUES ( 1004,'testy','test', 'tester', 'testtest@draft.dev', '$testestetstesttestHQZZfeGH87YSE3pP7G4uF' );




-- INSERT INTO users (username, email) VALUES ('Testperson','testemail@email.com');



-- SELECT password FROM users Where username = "?";



-- // get pasword
-- SELECT password FROM users Where username = "testy";
-- // change password
-- UPDATE users SET password ='amq@%N@r' WHERE username='tester';


-- INSERT INTO users (username, email) VALUES ('Testperson','testemail@email.com');







-- CREATE TABLE rooms (
--   roomid INTEGER PRIMARY KEY AUTOINCREMENT,
--   roomname TEXT NOT NULL,
--   capacity INTEGER NOT NULL
-- );

-- INSERT INTO rooms (roomname, capacity) VALUES ('Room1','4');
-- INSERT INTO rooms (roomname, capacity) VALUES ('Room2','3');
-- INSERT INTO rooms (roomname, capacity) VALUES ('Room3','6');

-- CREATE TABLE equipment (
--   eqid INTEGER PRIMARY KEY AUTOINCREMENT,
--   eqname TEXT NOT NULL,
--   quantity INTEGER NOT NULL,
--   room_id INTEGER NOT NULL,
--   FOREIGN KEY (room_id) REFERENCES rooms(roomid)
-- );

INSERT INTO equipment (eqname, quantity,room_id) VALUES ('samsunga1','5','2');




-- DROP TABLE IF EXISTS users;


