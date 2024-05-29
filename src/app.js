//console.log('Hola desde app.js');

//FORMA DE IMPORT ANTERIOR PARA VER LA DIFERENCIA DESPUES DE MIGRAR WEB SERVER A ES6
//const { envs } = require('./config/env')
//const { startServer } = require('./server/server')
import { envs } from './config/env.js'
import { startServer } from './server/server.js'


const main = () => {
    //console.log(envs)
    startServer({
        port: envs.PORT, 
        public_path: envs.PUBLIC_PATH
    })
}

//Funcion agnostica autoconvocada
//Agnostica porque no tiene nombre
//Autoconvocada porque la ejecutamos con los parentesis
(async() => {
    main()
})()




