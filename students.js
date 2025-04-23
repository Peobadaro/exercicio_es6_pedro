// Array de objetos com alunos e suas notas
const students = [
    { name: 'João', grade: 7.5 },
    { name: 'Maria', grade: 5.8 },
    { name: 'Pedro', grade: 8.2 },
    { name: 'Ana', grade: 6.0 },
    { name: 'Carlos', grade: 4.5 },
    { name: 'Julia', grade: 9.0 }
];

// Função que retorna apenas os alunos com nota maior ou igual a 6
function getApprovedStudents(studentsArray) {
    return studentsArray.filter(student => student.grade >= 6);
}

// Testando a função
const approvedStudents = getApprovedStudents(students);
console.log('Alunos aprovados:');
approvedStudents.forEach(student => {
    console.log(`${student.name}: ${student.grade}`);
}); 