require("./src/auth")
require("./src/server")
const config = require('./src/config')
const { app} = config


app.listen(3001, () => { console.log('Sever sedang berjalan di port ' + 3001) })