const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./config/db.config");
const app = require("./config/express.config");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running in the port ${PORT}`);
    console.log(`Press Ctrl C to disconnect the server`);
  }
});
