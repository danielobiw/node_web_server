const express = require('express');
const path = require('path');

const startServer = (options) => {
    const { port, public_path = 'public' } = options;
    //console.log(port);
    //console.log(public_path);

    const app= express()

    //Para poder usar middlewares se usa la palabra "use".
    app.use(express.static(public_path)) //Contenido estatico que se pone disponible para que se use.

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../public/index.html`);
        //const indexPath = path.join(__dirname + `../../../${public_path}/index.html`) //OTRA FORMA DE HACERLO
        res.sendFile(indexPath);
    } )

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })
}

module.exports = {
    startServer
}


