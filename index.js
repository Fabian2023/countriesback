//const axios = require("axios");
const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;
const loadDb = require("../server/src/controllers/loadDb")

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  loadDb();
})
}).catch(error => console.error(error))


