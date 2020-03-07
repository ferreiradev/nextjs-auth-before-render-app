import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const responseAuth = await axios.post('http://localhost:3001/api/login', { username, password });

    if (responseAuth.status === 200) {
      return res.cookie('token', responseAuth.data.token, {
        maxAge: 1000 * 60 * 2,
        httpOnly: true,
        signed: true,
      })
        .status(200)
        .send({ token: responseAuth.data.token });
    }

    return res.status(responseAuth.status).send(responseAuth.data);
  }
};
