-- setting up the tasks database
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    url varchar(120) NOT NULL,
    comment varchar(150) NOT NULL);
