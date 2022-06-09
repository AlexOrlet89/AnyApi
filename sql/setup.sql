-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists friends;

create table friends (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    status VARCHAR NOT NULL
    -- URL VARCHAR NOT NULL,
    -- year INT NOT NULL,
    -- lives INT NOT NULL
);

INSERT INTO friends (name, status) VALUES
('Ross', 'unknown'),
('Phoebe', 'Alive'),
('Rachel', 'Alive'),
('Monica', 'Alive'),
('Chandler', 'Alive'),
('Joey', 'Alive')