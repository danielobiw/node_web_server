
//FORMA DE IMPORT ANTERIOR PARA VER LA DIFERENCIA DESPUES DE MIGRAR WEB SERVER A ES6
//require('dotenv').config();
//const { get } = require('env-var');
import env from 'dotenv';
import envvar from 'env-var';



env.config(); //ESTO ES DE LA NUEVA FORMA DE IMPORTAR

//const envs = {
export const envs = {
    //PORT: get('PORT').required().asPortNumber(),
    //PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

// module.exports = {
//     envs
// }

