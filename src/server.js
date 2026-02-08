require("dotenv").config();
const app = require("./app");
const connectMongo = require("./config/mongo");
const { createTable } = require("./modules/user/user.model.sql");

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    
    await connectMongo();
    await createTable();

    app.listen(PORT, () => {
      console.log(` Server is flying on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Critical Startup Error:", error);
    process.exit(1);
  }
})();