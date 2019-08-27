import Sequelizer, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelizer.STRING,
        email: Sequelizer.STRING,
        password: Sequelizer.VIRTUAL,
        password_hash: Sequelizer.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
