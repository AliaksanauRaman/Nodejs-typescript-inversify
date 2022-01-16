import { Router } from "express";

const usersController = Router();

usersController.get('/', (_req, res) => {
  console.log(_req.query);

  res.send([
    {
      id: 1,
      name: "roman"
    },
    {
      id: 2,
      name: "darya"
    }
  ]);
});

export { usersController };
