// Task C10
// Create a suitable single SQL instruction that deletes all archived messages over 30 days old.

const deleteOldMessages = `
DELETE FROM Messages
WHERE created < strftime('%s','now','-30 days')
AND archived = 1;
`;

module.exports = { deleteOldMessages };