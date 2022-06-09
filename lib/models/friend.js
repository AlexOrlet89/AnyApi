const pool = require('..utils/pool'); // ask julie what this is

module.exports = class Friend {
  id;
  name;
  status;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.status = row.status;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM friends;');
    return rows.map((row) => new Friend(row));
  }
  static async getByID(id) {
    const { rows } = await pool.query('SELECT * FROM friends WHERE id=$1;', [
      id,
    ]);
    if (!rows[0]) return null;

    return new Friend(rows[0]);
  }
};
