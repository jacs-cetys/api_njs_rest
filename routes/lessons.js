const express = require('express');
let router = express.Router();
let DB = require('../db/db');

// Operaciones especificas para el recurso de 'clases'

// GET consultar coleccion de clase
router.get('/', (req, res, next) => {
    let lessonId = parseInt(req.body.lessonId);
    let lessons = DB.select('lessons', null, lessonId);
    res.status(200).send(lessons);
});

// GET consultar clase especifico
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let lessonId = parseInt(req.body.lessonId);
    let lesson = DB.select('lessons', id, lessonId);
    res.status(200).send(lesson);
});

// POST insertar clase
router.post('/', (req, res, next) => {
    let lesson = DB.insert('lessons', req.body);
    res.status(201).send(lesson);
})

// PUT actualizar clase
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let object = Object.assign(req.body, {id: id});
    let lesson = DB.update('lessons', object);
    res.status(204).send(lesson);
})

// DELETE borrar clase
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let lesson = DB.remove('lessons', id);
    res.status(204).send(lesson);
})

module.exports = router;


