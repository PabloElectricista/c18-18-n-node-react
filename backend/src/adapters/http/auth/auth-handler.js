module.exports = class AuthHandler {
  constructor() {}

  register = async (req, res) => {
    try {
      const errors = registerValidation(req.body);
      if (errors)
        return res.status(400).send({
          message: "fail",
          errors,
        });
      const [user, status, err] = await this.usecases.register(req.body);
      if (err) return err;
      return res.status(status).send({
        data: user,
        message: "success",
      });
    } catch (error) {}
  };
};
