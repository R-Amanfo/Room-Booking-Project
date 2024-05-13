
-- // Removed Not Null for initial test, to be able to just add email and username to table
-- // and to be able to partially add users with just email and username.
--//not used
-- CREATE TABLE users (
-- userId INTEGER ,
-- firstName TEXT ,
-- lastName TEXT ,
-- username TEXT NOT NULL PRIMARY KEY,
-- email TEXT NOT NULL,
-- password TEXT
-- );


--  //Add users//

-- INSERT INTO User (userId,firstName,lastName,username,email,password) VALUES ( 1001,'Teddy','Tbear', 'Tbear23', 'kumar@draft.dev', '$87YSE3pP7G4uF' );
-- INSERT INTO User (userId,firstName,lastName,username,email,password) VALUES ( 1002,'pauly','tomomo', 'Oberda3', 'wednesday@draft.dev', '$2GH87YSE3pP7G4uF' );
-- INSERT INTO User (userId,firstName,lastName,username,email,password) VALUES ( 1003,'Betty','bar', 'Bettyd3', 'tempomar@draft.dev', '$GH87YSE3pP7G4uF' );
-- INSERT INTO User (userId,firstName,lastName,username,email,password) VALUES ( 1004,'testy','test', 'tester', 'testtest@draft.dev', '$ZfeGH87YSE3pP7G4uF' );




-- INSERT INTO users (username, email) VALUES ('Testperson','testemail@email.com');


-- SELECT password FROM users Where username = "?";


-- // get pasword
-- SELECT password FROM User Where username = "testy";
-- // change password
-- UPDATE User SET password ='amq@%N@r' WHERE username='tester';


-- INSERT INTO User (username, email) VALUES ('Testperson','testemail@email.com');



-- INSERT INTO Room (name, capacity,max_capacity) VALUES ('Room1','4','50');
-- INSERT INTO Room (name, capacity,max_capacity) VALUES ('Room2','3','20');
-- INSERT INTO Room (name, capacity,max_capacity) VALUES ('Room3','6','40');


-- INSERT INTO Equipment (name,description ,quantity) VALUES ('samsungA1','small','200');
-- INSERT INTO Equipment (name,description ,quantity) VALUES ('samsung22','small','500');
-- INSERT INTO Equipment (name,description ,quantity) VALUES ('IPhone14','small','200');
-- INSERT INTO Equipment (name,description ,quantity) VALUES ('Server','large','50');


--- add column to table

ALTER TABLE Room
  ADD max_capacity INTEGER;
                    
-- DROP TABLE IF EXISTS users;


