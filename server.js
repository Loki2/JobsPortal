require('dotenv').config();
const http = require('http');
const app = require('./src/app');

const server = http.createServer(app);
server.listen(process.env.APP_PORT, () => {
    console.log("Server is started on Port: " + process.env.APP_PORT)
})


// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });