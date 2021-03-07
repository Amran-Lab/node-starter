const createRatings = `
CREATE TABLE IF NOT EXISTS Ratings (
    ratingid INTEGER PRIMARY KEY AUTOINCREMENT,
    id INTEGER,
    userid INTEGER,
    stars INTEGER,
    FOREIGN KEY(userid) REFERENCES Users(userid) ON DELETE CASCADE,
    FOREIGN KEY(id) REFERENCES Messages(id) ON DELETE CASCADE,
    UNIQUE(id,userid)
);
`
module.exports = { createRatings };
// Cascade deletes record if parent record is deleted
// UNIQUE makes sure both id and user id have to be UNIQUE
// (id,userid) [1,1],[1,2],[2,1] allowed
// (id,userid) [1,1],[1,1] not allowed