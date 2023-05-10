const veterinariaController={};
const Veterinaria=require('../models/Citas.model');
veterinariaController.obtenerVeterina=async(req,res)=>{
    const veterinaria=await Veterinaria.find();
    res.json(veterinaria);
    
};
module.exports=veterinariaController;