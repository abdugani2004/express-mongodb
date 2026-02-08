require("dotenv").config();
const app = require("./app");
const connectMongo = require("./config/mongo");
const { createTable } = require("./modules/user/user.model.sql");

(async () => {
  await connectMongo();
  await createTable();

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
  });
})();
