-- Vivid Printing
CREATE TABLE IF NOT EXISTS user (
	[userid] INTEGER PRIMARY KEY AUTOINCREMENT,
	[email] TEXT NOT NULL,
	[password] TEXT NOT NULL,
	[firstname] TEXT,
	[lastname] TEXT
);

CREATE TABLE IF NOT EXISTS user_session (
	[userid] INTEGER NOT NULL,
	[token] TEXT NOT NULL,
	CONSTRAINT "PK_USERID_TOKEN" PRIMARY KEY ([userid], [token]),
	CONSTRAINT "FK_USERID" FOREIGN KEY ([userid])
		REFERENCES [user]([userid])
		ON DELETE CASCADE
);
