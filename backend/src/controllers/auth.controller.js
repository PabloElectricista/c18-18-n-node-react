import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  console.log(req.body);

  const { email, password, username } = req.body;

  try {
    // entra un hash y se encripta
    const passwordHash = await bcrypt.hash(password, 10);

    // se crea un nuevo usuario
    const newUser = new User({
      email,
      password: passwordHash,
      username,
    });

    // se guardan los datos del nuevo usuario en la base de datos
    const userSaved = await newUser.save();

    // se crea el token viene del archivo libs/jwt.js

    const token = await createAccessToken({ id: userSaved._id });

    // luego que se crea el token se guarda el token en una cookie y se responde al cliente con los datos del usuario
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  try {
    // se busca el usuario por email para ver si existe
    const userFound = await User.findOne({ email });

    // si el usuario no existe se responde con un error
    if (!userFound) {
      return res.status(400).json({ message: "User not found" });
    }

    // compararo contraseña con la contraseña encriptada que esta en la base de datos
    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // se crea un token del usuario encontrado

    const token = await createAccessToken({ id: userFound._id });

    // luego que se crea el token se guarda el token en una cookie y se responde al cliente con los datos del usuario
    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
