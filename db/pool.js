const { Pool } = require("pg");

// const role_name = process.env.USER;
// const role_password = process.env.PW;
// const host = process.env.HOST;
// const port = process.env.DB_PORT;
// const database = process.env.DB;

// module.exports = new Pool({
//   connectionString: `postgresql://${role_name}:${role_password}@${host}:${port}/${database}`,
// });

module.exports = new Pool({
  connectionString:
    "postgresql://justin:1433@localhost:5432/mini_message_board",
});
