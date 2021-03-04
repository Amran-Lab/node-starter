// Task A01
// Design a suitable, single SQL ‘CREATE TABLE’ instruction that results
// in the creation (IF NOT EXISTS) of the ‘Users’ table as illustrated in
// the AdaBoard schema; don’t forget to include the Primary Key and unique constraints.
// Use “strftime('%s','now')” rather than “CURRENT_TIMESTAMP”.
const createUsers =`
CREATE TABLE IF NOT EXISTS Users (
    userid INTEGER PRIMARY KEY AUTOINCREMENT,
    friendlyname VARCHAR(50),
    emailaddress VARCHAR(320) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL,
    admin INTEGER(1),
    lastlogin INTEGER(4) DEFAULT CURRENT_TIMESTAMP
);
`
module.exports = { createUsers };
