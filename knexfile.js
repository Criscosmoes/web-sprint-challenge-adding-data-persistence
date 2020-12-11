module.exports = {
  development: {
    // Complete.
    migrations: {
      directory: "./data/migrations",
    },
    client: "sqlite3", 
    connection: {
      filename: './data/projects.db3'
    }, 
    useNullAsDefault: true, 
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },
  testing: {
    // Complete (otherwise `npm test` won't work in your local machine).
    migrations: {
      directory: "./data/migrations",
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  }
};
