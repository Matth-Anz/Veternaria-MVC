const Router=require('express');
const veterinariaController=require('../controllers/veterinaria.controller');
const router=Router();
//se conecta a la base de datpos y se trae tod ala coleccion en la base de datos
router.get('/',veterinariaController.obtenerVeterina);

module.exports=router;