export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export function delTodo(id) {
    return {
        type: 'DEL_TODO',
        payload: id
    }
}

export function editTodo(todo) {
    return {
        type: 'EDIT_TODO',
        payload: todo
    }
}

export function clearTodos() {
    return {
        type: 'CLEAR_TODOS',
    }
}