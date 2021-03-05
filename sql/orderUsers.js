// Task C06
// Create a SQL query that selects all users and arranges them
// in order of administration status and then alphabetically
// in descending order by their friendly name.

const orderUsers = `
select friendlyname, emailaddress, admin, datetime(lastlogin,'unixepoch') AS lastlogin  FROM Users Order BY admin DESC, friendlyname DESC;
`;

module.exports = { orderUsers };