// Tu primer código JavaScript útil
console.log("¡Hola desde mi inmobiliaria!");

const propiedadesPrueba = [
    { nombre: "Casa en Bello", precio: 215000000 },
    { nombre: "Apto Laureles", precio: 380000000 },
    { nombre: "Local Centro", precio: 450000000 }
];

// Filtro básico (cuando aprendas)
const propiedadesBaratas = propiedadesPrueba.filter(p => p.precio < 300000000);
console.log("Propiedades económicas:", propiedadesBaratas);