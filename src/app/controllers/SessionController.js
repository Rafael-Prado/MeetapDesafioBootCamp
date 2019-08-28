import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConf from '../../config/auth';

class SesssionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not march' });
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConf.secret, {
        expiresIn: authConf.experesIn,
      }),
    });
  }
}

export default new SesssionController();
