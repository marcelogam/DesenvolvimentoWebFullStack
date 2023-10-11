const todos = [
    {
        id: 1,
        description: "Estudar programacao",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    },
]

const todosJSON = JSON.stringify(todos) //Uma lista em um objeto JSON
console.log(todosJSON)

const todosList = JSON.parse(todosJSON) //Um objeto JSON em uma lista
console.log(todosList)