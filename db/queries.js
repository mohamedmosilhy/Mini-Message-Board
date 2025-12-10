const { pool } = require("./pool");

async function addMessage(text, user) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
    user,
    text,
  ]);
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
  return rows[0] || null;
}

async function getMessages() {
  const { rows } = await pool.query(
    "SELECT * FROM messages ORDER BY created_at DESC"
  );
  return rows;
}

module.exports = { addMessage, getMessageById, getMessages };
