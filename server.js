const http = require('http');
const app = require('./src/app');
const { checkDbConnection } = require('./src/database/index');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const connectServer = () => {
   server.listen(port, () => {
      try {
         checkDbConnection();
         console.log(`Server is Running on ${port}`);
      } catch (error) {
         console.log("Server Crash");
      }
   });
}

connectServer();
