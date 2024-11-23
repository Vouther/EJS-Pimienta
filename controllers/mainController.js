const path = require('path');

const menuList = [
    {
        id: 1,
        nombre:"Carpaccio fresco",
        descripcion:"Entrada Carpaccio de salmón con cítricos",
        precio:"U$S 65.50",
        imagen:"Carpaccio-de-salmon.jpg",
    },
    {
        id: 2,
        nombre:"Risotto de berenjena",
        descripcion:"Risotto de berenjena y queso de cabra",
        precio:"U$S 47.00",
        imagen:"Risotto-berenjena-queso-cabra.jpg",
    },
    {
        id: 3,
        nombre:"Mousse de arroz",
        descripcion:"Mousse de arroz con leche y aroma de azahar",
        precio:"U$S 27.50",
        imagen:"Mousse-de-arroz-con-leche.jpg",
    },
    {
        id: 4,
        nombre:"Espárragos blancos",
        descripcion:"Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio:"U$S 37.50",
        imagen:"esparragos.png",
    }

]

const mainController = {
    home: function (req, res) {
        //res.sendFile(path.join(__dirname,'../views/index.html'));
        res.render('index',{menuList});
    },
    detalleMenu: function (req, res) {

        const menuBuscado = menuList.find(menu => {
            return menu.id == req.params.id
        })

        res.render('detalleMenu',{menu: menuBuscado});
    },
}

module.exports = mainController;