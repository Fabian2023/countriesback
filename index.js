const server = require("./src/server");
const { conn } = require('./src/db.js');
const loadDb = require("./src/controllers/loadDb.js");
const PORT = process.env.PORT || 3001;

conn.sync({ force: false })
  .then(async () => {
    await loadDb(); // Espera a que se complete la carga de datos

    server.listen(PORT, () => {
      console.log(`Server Listening on port ${PORT}`);
    });
  })
  .catch(error => console.error(error));
