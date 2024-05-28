//console.log('Hola desde app.js');

const { envs } = require('./config/env')
const { startServer } = require('./server/server')

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




