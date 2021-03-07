// Task C08
// Create a suitable single SQL instruction that returns in descending order
// of their creation date all non-archived messages from all users with (and/or containing)
// the name “Franklin”; your results should include the name of the message’s owner,
// the message and the message’s date in the format of “YYYY-MM-DD HH:MM:SS.


const getMessagesFromFranklins = `
SELECT Users.friendlyname,Messages.message,datetime(messages.created,'unixepoch')  AS created 
FROM Messages
INNER JOIN Users ON users.userid=messages.userid
WHERE Users.friendlyname Like '%Franklin%'
AND
Messages.archive = 0
ORDER BY Messages.created DESC;
`;

module.exports = { getMessagesFromFranklins };
