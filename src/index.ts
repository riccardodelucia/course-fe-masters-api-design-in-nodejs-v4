import * as dotenv from "dotenv";
dotenv.config();

import config from "./config";

import app from "./server";

console.log(config);

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
