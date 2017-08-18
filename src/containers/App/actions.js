export const ADD_CARD = 'ADD_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const MOVE_CARD = 'MOVE_CARD'
export const TOGGLE_TODO = 'TOGGLE_TODO'


let id = 0;

export const addCard = (card) => {
  return (dispatch) => {
    id = ++id;
    let newCard = {
      id: id,
      title: card.title,
      priority: card.priority,
      status: card.status,
      createdBy: card.createdBy,
      assignedTo: card.assignedTo
    };
    dispatch({
      type: ADD_CARD,
      newCard
    });
  }
};

export function editCard(card) {
  return { type: EDIT_CARD,
   card: card
 }
}

export function deleteCard(card) {
  return { type: DELETE_CARD,
   card: card
 }

}

/*export function moveCard(card) {
  return { type: MOVE_CARD,
           card: card
         }
}
*/
export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id: id }
}

