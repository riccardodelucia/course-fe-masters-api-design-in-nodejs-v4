import * as dotenv from "dotenv";
dotenv.config();

import config from "./config";

import app from "./server";

app.listen(3000, () => {
  console.log(`Server listening on port ${config.PORT}`);
});
