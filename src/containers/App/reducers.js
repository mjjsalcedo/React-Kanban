import { ADD_CARD, EDIT_CARD, DELETE_CARD, MOVE_CARD, TOGGLE_TODO } from './actions';

const cardReducers = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.newCard]
    case EDIT_CARD:
      return editCard(state, action);
    case DELETE_CARD:
      return deleteCard(state, action);
    case MOVE_CARD:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    default:
      return state;
  }
}

function editCard(state, action) {
  var cardEdits = action.card
  var newState = state.filter(card=> {
    if(card.id !== action.card.id){
      return true
    }
  });

  return [
  ...newState, {
      id: cardEdits.id,
      title: cardEdits.title,
      priority: cardEdits.priority,
      status: cardEdits.status,
      createdBy: cardEdits.createdBy,
      assignedTo: cardEdits.assignedTo
    }]

}

function deleteCard(state, action) {
  return state.filter(card=> {
    if(card.id !== action.card){
      return true
    }
  })
}

export default cardReducers
