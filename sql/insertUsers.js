// Task B04
// Extract, reformat and prepare the user test data (illustrated below)
// into a suitable single SQL ‘INSERT’ instruction that results in the insertion
// of each of the specified user accounts; ensure you set the default password as “--blank--”
// to indicate no password has been set at this time, the correct administration state and set
// the last login timestamp as 0 (0 = Unix Epoch i.e., Jan 01 1970) to indicate that no previous login attempts have been recorded.

const insertUsers = `
INSERT INTO Users(friendlyname,Email,password,Administrator) VALUES
('Abraham Lincoln','abraham@ada.ac.uk','--blank--','Yes'),
('Anne Frank','anne@ada.ac.uk','--blank--',NULL),
('Aristotle','aristotle@ada.ac.uk','--blank--',NULL),
('Benjamin Franklin','benjamin@ada.ac.uk','--blank--',NULL),
('Confucius','confucius@ada.ac.uk','--blank--',NULL),
('Eleanor Roosevelt','eleanor@ada.ac.uk','--blank--',NULL),
('Franklin D. Roosevelt','franklin@ada.ac.uk','--blank--',NULL),
('Kamala Harris','kamala@ada.ac.uk','--blank--','Yes'),
('Mark Twain','mark@ada.ac.uk','--blank--',NULL),
('Oprah Winfrey','oprah@ada.ac.uk','--blank--','Yes'),
('Socrates','socrates@ada.ac.uk','--blank--',NULL),
('Steve Jobs','steve@ada.ac.uk','--blank--','Yes'),
('Thomas A. Edison','tom@ada.ac.uk','--blank--',NULL),
('Thomas Jefferson','thomas@ada.ac.uk','--blank--',NULL),
('Alexei Navalny','alexei@ada.ac.uk','--blank--',NULL);

`
module.exports = { insertUsers };