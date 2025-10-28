const http = require("http");
const { reqestUserHandler } = require("./user");

const Server = http.createServer(reqestUserHandler);

const PORT = 3000;
Server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
