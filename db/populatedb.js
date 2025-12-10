const { Client } = require("pg");

const sql = `
CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username TEXT NOT NULL,
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (username, text) VALUES
('Alice', 'This is my first message!'),
('Bob', 'Hello World!'),
('Charles', 'How''s everyone doing?'),
('Sara', 'Just finished a Node.js project!'),
('Mohamed', 'Learning Express is fun!'),
('Lina', 'Anyone up for a quick code review?');
`;

async function populateDB() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  await client.query(sql);
  await client.end();
}

populateDB();
