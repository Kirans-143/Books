module.exports = (sequelize, db_connection) => {
  const Users = db_connection.define(
    "users",
    {
      id: {
        type: sequelize.INTEGER,
        notNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_name: {
        type: sequelize.STRING,
      },
      email: {
        type: sequelize.STRING,
      },
      password: {
        type: sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Users;
};
