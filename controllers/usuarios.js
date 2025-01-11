const {response, request} = require('express');



const usuarioGet = (req= request, res = response)=>{
    const {q=null,nombre=null,apikey=null,apellido=null, page="1", limit="10"} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q,
        nombre,
        apellido,
        apikey,
        page,
        limit
    });
}

const usuarioPut = (req,res = response)=>{
    //const id= req.params.id;
    const { id }= req.params;


    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

const usuarioPost =  (req,res = response)=>{
    const {nombre, edad}= req.body;


    res.json({
        ok: true,
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuarioDelete = (req,res =  response)=>{
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

const usuarioPatch = (req,res =  response)=>{
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}


module.exports ={ 
    usuarioGet, 
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch,

};