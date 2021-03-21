export default function addTodoReducer(state = [], action) {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {item: action.payload, id: state.length == 0 ? 0 : state[state.length-1].id+1}];
        case 'DEL_TODO':
             return state.filter(el => el.id !== action.payload).map((el, i) => {return {item: el.item, id: i}})
        case 'EDIT_TODO':
            return state.map((el,i) => {
                if(el.id === action.payload.id) {
                    el.item = action.payload.item;
                }
                return el;
            });
        case 'CLEAR_TODOS':
            return [];
        default:
            return state;
    }
}