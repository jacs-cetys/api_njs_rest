const name = 'teachers';

let schema = {
    id: 'number',
    firstName: 'string',
    lastName: 'string',
    email: 'string'
};

// contenido inicial
let data = [
    {
        id: 1,
        fistName: "Edwin",
        lastName: "Salinas",
        email: "edwin.salinas@cetys.mx"
    }
];

module.exports = {
    schema,
    data,
};
