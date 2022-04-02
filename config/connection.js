const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize = process.env.JAWSDB_URL;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    // process.env.SECRET,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;

// const Sequelize = require("sequelize");

// require("dotenv").config();

// // create connection to our db
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PW,
//       process.env.SECRET,
//       {
//         host: "localhost",
//         dialect: "mysql",
//         port: 3306,
//       }
//     );

// module.exports = sequelize;
