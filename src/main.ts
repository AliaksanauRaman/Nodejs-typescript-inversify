import express from "express";

import { usersController } from "./users/controller";

const expressApp = express();

const PORT = process.env.PORT || 3000;

expressApp.use('/users', usersController);;

expressApp.listen(PORT, () => {
  console.log(`The app is listening on port: ${PORT}...`);
});
