module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Admin = app.model.define('long_admin', {
    account: STRING,
    password: STRING(32),
    phone: STRING(32),
    token: STRING(64),
    role_id: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  Admin.findByToken = async function(token) {
    return await this.findOne({
      where: {
        token: token
      }
    });
  }

  // // don't use arraw function
  // Admin.prototype.token = async function() {
  //   return await this.update({ token_expire: new Date() });
  // }

  return Admin;
};