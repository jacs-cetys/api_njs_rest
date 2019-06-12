const name = 'lessons';

let schema = {
    id: 'number',
    name: 'string',
    keycode: 'string',
    classroom: 'string',
    teacherId: 'number'
};

// contenido inicial
let data = [
    {
        id: 1,
        name: "Redes y Sistemas Distribuidos",
        keycode: "IMI358",
        classroom: "28008",
        teacherId: 1
    }
];

module.exports = {
    schema,
    data,
};
