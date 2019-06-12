const express = require('express');
let router = express.Router();
let DB = require('../db/db');

// Operaciones especificas para el recurso de 'maestros'

// GET consultar coleccion de maestro
router.get('/', (req, res, next) => {
    let teacherId = parseInt(req.body.teacherId);
    let teachers = DB.select('teachers', null, teacherId);
    res.status(200).send(teachers);
});

// GET consultar maestro especifico
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let teacherId = parseInt(req.body.teacherId);
    let teacher = DB.select('teachers', id, teacherId);
    res.status(200).send(teacher);
});

// POST insertar maestro
router.post('/', (req, res, next) => {
    let teacher = DB.insert('teachers', req.body);
    res.status(201).send(teacher);
})

// PUT actualizar maestro
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let object = Object.assign(req.body, {id: id});
    let teacher = DB.update('teachers', object);
    res.status(204).send(teacher);
})

// DELETE borrar maestro
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let teacher = DB.remove('teachers', id);
    res.status(204).send(teacher);
})

module.exports = router;


